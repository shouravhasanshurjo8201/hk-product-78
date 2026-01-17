"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
    ArrowLeft,
    ShoppingCart,
    ShieldCheck,
    Truck,
    RotateCcw,
    Star,
    Tag,
    Package
} from "lucide-react";

export default function ItemDetails() {
    const { id } = useParams();
    const router = useRouter();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/items.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((i) => i.id === id);
                setItem(found);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 py-10 px-4">
                <div className="container mx-auto">
                    <div className="h-6 w-32 bg-slate-200 animate-pulse rounded-full mb-4"></div>
                    <div className="bg-white/50 rounded-2xl border border-blue-100 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            <div className="h-80 lg:h-120 bg-slate-200 animate-pulse relative">
                                <div className="absolute top-6 left-6 h-7 w-20 bg-white/60 rounded-full"></div>
                            </div>

                            <div className="px-8 py-4 flex flex-col space-y-4">
                                <div className="h-4 w-32 bg-slate-100 animate-pulse rounded-full"></div>

                                <div className="space-y-3">
                                    <div className="h-10 bg-slate-200 animate-pulse rounded-xl w-full"></div>
                                    <div className="h-10 bg-slate-200 animate-pulse rounded-xl w-3/4"></div>
                                </div>

                                <div className="h-12 w-36 bg-blue-100/50 animate-pulse rounded-2xl"></div>

                                <div className="space-y-2 border-l-4 border-slate-100 pl-4">
                                    <div className="h-4 bg-slate-100 animate-pulse rounded-full w-full"></div>
                                    <div className="h-4 bg-slate-100 animate-pulse rounded-full w-full"></div>
                                    <div className="h-4 bg-slate-100 animate-pulse rounded-full w-1/2"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="h-16 bg-slate-50 animate-pulse rounded-2xl border border-slate-100"></div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <div className="h-14 bg-blue-200/50 animate-pulse rounded-2xl w-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="h-52 bg-white/70 animate-pulse rounded-2xl border border-slate-100"></div>
                        <div className="h-52 bg-blue-100/40 animate-pulse rounded-2xl border border-blue-200"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center px-4">
                <div className="bg-white/50 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-blue-100  flex flex-col items-center max-w-lg w-full text-center">
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-white p-6 rounded-full shadow-sm border border-slate-50">
                            <Package size={64} className="text-slate-300 stroke-[1.5]" />
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-red-500/60 mb-3 tracking-tighter uppercase">
                        Item Not Found
                    </h2>

                    <p className="text-slate-500 mb-10 leading-relaxed italic">
                        Oops! The item you're looking for doesn't exist or might have been removed from our collection.
                    </p>

                    <button
                        onClick={() => router.push("/items")}
                        className="group bg-blue-700/60 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-blue-200 active:scale-95"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Return to Shop
                    </button>

                    <div className="mt-8 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-100"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-50"></div>
                    </div>
                </div>
            </div>
        );
    }

    const addToCart = () => {
        toast.success(`${item.name} added to cart!`, {
            style: { borderRadius: '15px' },
            icon: '🛒',
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="container mx-auto">

                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-4 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold text-sm uppercase tracking-widest">Back to Items</span>
                </button>

                <div className="bg-white/50 rounded-2xl border border-blue-200 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                        <div className="relative">
                            <div className="flex justify-center items-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-120 "
                                />
                            </div>
                            <div className="absolute top-6 left-6">
                                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-blue-600 uppercase tracking-tighter shadow-sm border border-white/50">
                                    {item.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-8 lg:p-12 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <span className="text-xs font-bold text-slate-400">(4.8 / 5.0 Rating)</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4 uppercase tracking-tighter">
                                {item.name}
                            </h1>

                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-2xl w-fit mb-6">
                                <Tag size={18} />
                                <span className="font-black text-2xl">৳ {item.price}</span>
                            </div>

                            <p className="text-slate-500 leading-relaxed text-lg mb-6 italic border-l-4 border-slate-100 pl-4">
                                "{item.description}"
                            </p>

                            <div className="grid grid-cols-1 mb-2 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                                    <Truck size={20} className="text-blue-500" />
                                    <span className="text-[10px] font-bold uppercase text-slate-600 tracking-tighter leading-tight">Fast Delivery <br /><span className="text-slate-400 font-medium lowercase">within 24 hours</span></span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                                    <ShieldCheck size={20} className="text-emerald-500" />
                                    <span className="text-[10px] font-bold uppercase text-slate-600 tracking-tighter leading-tight">Authentic <br /><span className="text-slate-400 font-medium lowercase">100% genuine</span></span>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                                    <RotateCcw size={20} className="text-orange-500" />
                                    <span className="text-[10px] font-bold uppercase text-slate-600 tracking-tighter leading-tight">Easy Returns <br /><span className="text-slate-400 font-medium lowercase">7 days policy</span></span>
                                </div>
                            </div>

                            <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={addToCart}
                                    className="flex-1 bg-blue-600/60 hover:bg-blue-500/80 text-white flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 transition-all active:scale-95"
                                >
                                    <ShoppingCart size={22} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/70 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Product Specifications</h3>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-sm"><span className="text-slate-400">Model ID</span> <span className="font-bold text-slate-700">HK-{id.slice(0, 5)}</span></li>
                            <li className="flex justify-between text-sm"><span className="text-slate-400">Category</span> <span className="font-bold text-slate-700">{item.category}</span></li>
                            <li className="flex justify-between text-sm"><span className="text-slate-400">Warranty</span> <span className="font-bold text-slate-700">1 Year Official</span></li>
                            <li className="flex justify-between text-sm"><span className="text-slate-400">Stock Status</span> <span className="font-bold text-emerald-500">In Stock</span></li>
                        </ul>
                    </div>
                    <div className="bg-blue-100/60 p-8 rounded-2xl text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl text-black/60 font-bold mb-2">Need Help?</h3>
                            <p className="text-blue-700 mb-4 text-sm">Our support team is available 24/7 for your assistance.</p>
                            <button className="bg-white/40 hover:bg-blue-200 text-blue-900/50 px-6 py-2 rounded-xl font-bold text-sm">Contact Us</button>
                        </div>
                        <ShoppingCart size={120} className="absolute bottom-6 right-6 text-blue-500/30 rotate-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}