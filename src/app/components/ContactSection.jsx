"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async () => {
        toast.success("Message sent successfully! We'll get back to you soon.");
        reset();
    };

    return (
        <section id="contact" className=" py-10">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Get in <span className="text-blue-600">Touch</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Have a project in mind or just want to say hi? We'd love to hear from you.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-blue-50 p-8 rounded-3xl space-y-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-slate-800">Contact Details</h3>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email Us</p>
                                    <p className="text-slate-800 font-medium">support@myapp.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Call Us</p>
                                    <p className="text-slate-800 font-medium">+880 123 456 789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Location</p>
                                    <p className="text-slate-800 font-medium">Jamalpur, Mymensingh, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-blue-50 border border-slate-100 p-8 md:p-10 rounded-3xl shadow shadow-slate-200/50 space-y-1"
                        >
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        {...register("name", { required: "Name is required" })}
                                        className={`w-full border rounded-xl p-3.5 outline-none transition-all ${errors.name ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                            }`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                        })}
                                        className={`w-full border rounded-xl p-3.5 outline-none transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                            }`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                <textarea
                                    placeholder="Tell us about..."
                                    {...register("message", { required: "Message is required", minLength: { value: 10, message: "Too short!" } })}
                                    className={`w-full border rounded-xl p-3.5 outline-none h-20 resize-none transition-all ${errors.message ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                        }`}
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-600 text-white py-4 rounded-xl w-full hover:bg-blue-700 active:scale-[0.98] transition-all font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}