"use client";

import { CheckCircle2, Award, Users } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="py-10 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40  rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40  rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse delay-1000" />

                        <div className="relative group">
                           
                            <img
                                src="https://i.postimg.cc/XNBNZPdB/Hero-1-removebg-preview.png"
                                alt="H.K  Team Work"
                                className="relative rounded-3xl w-full object-cover z-10 transform transition-all duration-500 group-hover:translate-y-1"
                            />

                            <div className="absolute bottom-10 md:bottom-30 right-8 md:-right-5 bg-white/90 p-6 rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1) z-20 border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                <div className="bg-blue-600 p-3 rounded-xl text-white">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">10k+</p>
                                    <p className="text-xs font-semibold text-slate-800 uppercase tracking-widest">Active Users</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest">
                                <Award size={14} /> Leader in Data Management
                            </div>

                            <h2 className="text-xl md:text-2xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
                                Master Your Workflow with <span className="text-blue-600">H.K Application </span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                H.K  is a next-generation ecosystem built for those who value <strong>security, efficiency, and speed</strong>. Leveraging Next.js 15, we provide a seamless experience for managing your most critical data.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                                {[
                                    "Advanced Data Security",
                                    "Real-time Collaboration",
                                    "Automated Backups",
                                    "Insightful Analytics"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group">
                                        <div className="text-blue-600 bg-blue-50 group-hover:bg-blue-600/70 group-hover:text-white transition-colors p-1 rounded-full">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="font-bold text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-slate-600 pt-8 mt-8 flex flex-wrap justify-center gap-8">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-slate-900">99.9%</span>
                                    <span className="text-sm text-slate-500 font-medium">Uptime Guarantee</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-slate-900">24/7</span>
                                    <span className="text-sm text-slate-500 font-medium">Customer Support</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}