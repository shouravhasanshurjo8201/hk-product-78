"use client";

import { CheckCircle } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        {
            title: "Secure Login",
            description: "Protect your account with robust email/password auth or quick Google login.",
        },
        {
            title: "Admin & User Roles",
            description: "Dedicated access levels ensures your data is managed by the right people.",
        },
        {
            title: "Item Management",
            description: "Streamlined CRUD operations: easily create, view, update, and delete items.",
        },
        {
            title: "Responsive Design",
            description: "Experience a pixel-perfect UI that works flawlessly on any device or screen.",
        },
        {
            title: "Fast & Reliable",
            description: "Built with Next.js 15 for lightning-fast performance and optimized SEO.",
        },
        {
            title: "Instant Notifications",
            description: "Get real-time feedback with toast notifications for every important action.",
        },
    ];

    return (
        <section id="features" className="py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Features of <span className="text-blue-600">H.K </span>
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Discover the powerful tools and functionalities designed to make your
                        data management efficient, secure, and incredibly fast.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white/60 p-8 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
                        >
                            <div className="flex flex-col items-start">
                                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/60 group-hover:text-white transition-colors duration-300 text-blue-600">
                                    <CheckCircle size={20} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 mb-3 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}