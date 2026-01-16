"use client";

import { Settings, Smartphone, Globe, Server } from "lucide-react";

export default function ServicesSection() {
    const services = [
        {
            icon: <Settings size={25} />,
            title: "Customizable Settings",
            description: "Easily configure your app preferences to suit your personal or business needs.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Smartphone size={25} />,
            title: "Mobile Friendly",
            description: "A fully responsive design that works perfectly on smartphones and tablets.",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: <Globe size={25} />,
            title: "Global Access",
            description: "Your data is synced across all devices, accessible from anywhere in the world.",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: <Server size={25} />,
            title: "Reliable Backend",
            description: "Fast and secure servers powered by Express.js to ensure 99.9% uptime.",
            color: "bg-orange-100 text-orange-600"
        },
    ];

    return (
        <section id="services" className="py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                        What We <span className="text-blue-600">Offer</span>
                    </h2>
                    <p className="text-slate-500 text-lg">
                        We provide cutting-edge solutions to help you manage your data and tasks efficiently.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-1000 transform hover:-translate-y-2 cursor-default"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300 ${service.color}`}>
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description}
                            </p>

                            <div className="mt-4 w-10 h-1 bg-blue-200 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 "></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}