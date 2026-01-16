"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Users } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
            <div className="container mx-auto px-6 lg:px-16 relative z-10 py-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-3/5 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 border border-blue-100 backdrop-blur-md rounded-full text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                            <Sparkles size={14} className="animate-pulse text-blue-500" />
                            The Future of Workflow
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                            Welcome To <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">
                                H.K Application
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            <span className="text-blue-600 font-bold">H.K </span> Application provides a modern, secure, and fast environment to manage items and users. Experience seamless workflow management.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start pt-4">
                            <Link
                                href="/items"
                                className="group p-5 px-10 bg-blue-400 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all flex items-center gap-3 shadow-xl shadow-blue-200 active:scale-95"
                            >
                                Get Started Free
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                        </div>

                        <div className="pt-10 flex flex-wrap justify-center lg:justify-start gap-8 border-t border-slate-200">
                            <div className="flex items-center gap-2 text-slate-500 font-medium">
                                <div className="p-1.5 bg-emerald-50 rounded-lg">
                                    <ShieldCheck size={18} className="text-emerald-500" />
                                </div>
                                Enterprise Security
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 font-medium">
                                <div className="p-1.5 bg-amber-50 rounded-lg">
                                    <Zap size={18} className="text-amber-500" />
                                </div>
                                Fast Performance
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 font-medium">
                                <div className="p-1.5 bg-blue-50 rounded-lg">
                                    <Users size={18} className="text-blue-500" />
                                </div>
                                User Driven UI
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-4/6 relative">
                        <div className="relative z-10 rounded-[3.2rem]animate-float">
                            <img
                                src="https://i.postimg.cc/Twq9Q0WN/images-removebg-preview.png"
                                alt="Dashboard Preview"
                                className="rounded-[2.5rem] w-full transition-all duration-700"
                            />
                        </div>

                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-blue-500/5 rounded-[3rem] blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}