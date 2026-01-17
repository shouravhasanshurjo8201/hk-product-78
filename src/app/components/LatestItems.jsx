"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

export default function LatestItems() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/items.json")
            .then((res) => res.json())
            .then((data) => {
                const latest = data.slice(-8).reverse();
                setItems(latest);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <section className="pt-10 pb-2">
            <div className="container mx-auto px-10">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Latest <span className="text-blue-600">Arrivals</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Check out our newest premium items managed with H.K Workflow
                    </p>
                </div>

                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-white/50 rounded-2xl border border-slate-200/50 shadow-sm overflow-hidden p-0">
                                <div className="h-48 bg-slate-300/70 animate-pulse w-full"></div>
                                <div className="p-6 space-y-4">
                                    <div className="h-6 bg-slate-200 animate-pulse rounded-full w-3/4"></div>
                                    <div className="space-y-2">
                                        <div className="h-3 bg-slate-200 animate-pulse rounded-full w-full"></div>
                                        <div className="h-3 bg-slate-200 animate-pulse rounded-full w-5/6"></div>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                                        <div className="space-y-2">
                                            <div className="h-3 bg-slate-200 animate-pulse rounded-full w-10"></div>
                                            <div className="h-6 bg-slate-200 animate-pulse rounded-full w-16"></div>
                                        </div>
                                        <div className="h-10 w-24 bg-slate-200 animate-pulse rounded-xl"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && items.length === 0 && (
                    <div className="text-center py-20 rounded-3xl border-2 border-dashed border-slate-200">
                        <Package size={60} className="mx-auto text-slate-300 mb-4" />
                        <h3 className="text-xl font-bold text-slate-700">No Items Found</h3>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {!loading && items.map((item) => (
                        <div key={item.id} className="group bg-white/50 rounded-2xl border border-slate-100 shadow-sm hover:-translate-y-1 transition-all duration-600 overflow-hidden">
                            <div className="relative h-50 w-full overflow-hidden bg-slate-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase shadow-sm">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-bold text-slate-800 mb-2 truncate group-hover:text-blue-600 transition-colors">
                                    {item.name}
                                </h2>
                                <p className="text-slate-500 text-sm line-clamp-2 mb-2 h-10 italic">
                                    {item.description}
                                </p>

                                <div className="flex justify-between items-center border-t border-slate-50 pt-4">
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Price</p>
                                        <p className="text-2xl font-black text-slate-900">৳{item.price}</p>
                                    </div>
                                    <Link
                                        href={`/items/${item.id}`}
                                        className="bg-blue-600/70 hover:bg-blue-700/70 text-white p-3 rounded-2xl shadow-lg shadow-blue-100 flex items-center gap-2 group/btn transition-all"
                                    >
                                        <span className="font-bold text-sm ml-1">Details</span>
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!loading && items.length > 0 && (
                    <div className="text-right mt-8">
                        <Link
                            href="/items"
                            className="inline-flex items-center gap-2 bg-blue-600/70 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700/70 transition-all shadow"
                        >
                            View All Products
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}