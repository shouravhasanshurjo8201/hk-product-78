"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const faqs = [
        {
            question: "How do I create an account?",
            answer: "Simply click the 'Login' button in the navbar. For this project, you can use the mock credentials provided in the documentation to explore the protected features.",
        },
        {
            question: "Can I login with Google?",
            answer: "Yes! Our platform is designed to support NextAuth.js, allowing quick and secure access via Google or traditional credentials.",
        },
        {
            question: "Is my data safe?",
            answer: "Absolutely. We use industry-standard encryption, HTTP-only cookies, and secure middleware to ensure your data remains protected.",
        },
        {
            question: "Can I access items without logging in?",
            answer: "Yes, the item list and details pages are publicly accessible. However, adding new items is a protected feature reserved for logged-in users.",
        },
        {
            question: "How do I add a new item?",
            answer: "Once logged in, you will have access to the 'Add Item' page where you can fill out a form to store new data on our Express server.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className=" py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Got <span className="text-blue-600">Questions?</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about the platform and how it works.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`group border rounded-2xl transition-all duration-300 ${isOpen
                                    ? "bg-white/60 border-blue-500 shadow-xl shadow-blue-100/50"
                                    : "bg-white/60 border-slate-200 hover:border-blue-300"
                                    }`}
                            >
                                <button
                                    className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-blue-600" : "text-slate-800"
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-1 rounded-full transition-transform duration-300 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-500"
                                        }`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}>
                                    <div className="p-5 md:p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}