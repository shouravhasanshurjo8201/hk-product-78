"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { UserPlus, Mail, Lock, User, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        const loadingToast = toast.loading("Creating your account...");

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log("Signup Data:", data);

            toast.success("Account created successfully! Please login.", {
                id: loadingToast,
            });

            router.push("/login");
        } catch (error) {
            toast.error("Something went wrong. Please try again.", { id: loadingToast });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">

                <div className="text-center mb-8">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <UserPlus className="text-green-600 w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">Create Account</h1>
                    <p className="text-slate-500 text-sm mt-1">Join us today to get started!</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium text-slate-700 mb-1 block">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Your Name"
                                {...register("name", { required: "Name is required" })}
                                className={`w-full border pl-10 pr-4 py-2.5 rounded-lg outline-none transition-all ${errors.name ? "border-red-500" : "border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                                    }`}
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-slate-700 mb-1 block">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                })}
                                className={`w-full border pl-10 pr-4 py-2.5 rounded-lg outline-none transition-all ${errors.email ? "border-red-500" : "border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                                    }`}
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-slate-700 mb-1 block">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Min 6 characters" }
                                })}
                                className={`w-full border pl-10 pr-4 py-2.5 rounded-lg outline-none transition-all ${errors.password ? "border-red-500" : "border-slate-200 focus:border-green-500 focus:ring-4 focus:ring-green-100"
                                    }`}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <button
                        disabled={isLoading}
                        className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 text-center border-t border-slate-100 pt-6">
                    <p className="text-slate-600 text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-green-600 font-semibold hover:underline inline-flex items-center gap-1">
                            Login here <ArrowRight className="w-4 h-4" />
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}