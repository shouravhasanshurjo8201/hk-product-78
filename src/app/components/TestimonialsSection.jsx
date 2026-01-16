
"use client";

import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, ExampleCorp",
            image: "https://i.pravatar.cc/150?img=32",
            message: "This app has transformed our workflow! Super easy to use and very efficient. The integration was seamless.",
            rating: 5
        },
        {
            name: "Jane Smith",
            role: "Marketing Manager",
            image: "https://i.pravatar.cc/150?img=47",
            message: "I love the user-friendly interface and excellent customer support! It saved me hours of manual work.",
            rating: 5
        },
        {
            name: "Michael Lee",
            role: "Product Designer",
            image: "https://i.pravatar.cc/150?img=12",
            message: "Highly recommended for anyone who wants to manage tasks effortlessly. The UI is just beautiful.",
            rating: 4
        },
    ];

    return (
        <section id="testimonials" className="py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                        What Our <span className="text-blue-600">Users Say</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Trusted by thousands of professionals worldwide. Here is what they think about MyApp.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group bg-white/50 p-8 rounded-3xl shadow border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative flex flex-col h-full"
                        >
                            <div className="absolute top-6 right-8 text-blue-100/40 group-hover:text-blue-100 transition-colors">
                                <Quote size={40} fill="currentColor" />
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}
                                    />
                                ))}
                            </div>

                            <p className="text-slate-600 mb-2 italic leading-relaxed flex-grow">
                                "{testimonial.message}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="relative w-14 h-14 rounded-full object-cover border-2 border-white ring-1 ring-slate-100"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-blue-600/60 transition-colors">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}