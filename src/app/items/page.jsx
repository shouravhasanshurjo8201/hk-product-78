"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Filter, ArrowUpDown, ArrowRight, Package } from "lucide-react";

export default function ItemsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        fetch("/items.json")
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            });
    }, []);

    let filtered = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || item.category === category)
    );

    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-10">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
                        Explore Our <span className="text-blue-600">Collection</span>
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Discover premium items managed with H.K Workflow
                    </p>
                </div>

                <div className="bg-white/60 p-4 rounded-2xl border border-slate-200 mb-8 flex flex-wrap justify-center items-center gap-4">
                    <div className="relative flex-1 min-w-50">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search items by name..."
                            className="w-full pl-12 pr-4 py-3 bg-slate-200/50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        />
                    </div>

                    <div className="flex items-center gap-2 bg-slate-200/50 px-4 py-1 rounded-2xl border border-slate-100">
                        <Filter size={18} className="text-slate-500" />
                        <select
                            onChange={(e) => { setCategory(e.target.value); setPage(1); }}
                            className="bg-transparent py-2 outline-none text-slate-600 font-medium cursor-pointer"
                        >
                            <option value="All">All Categories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Books">Books</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-200/50 px-4 py-1 rounded-2xl border border-slate-100">
                        <ArrowUpDown size={18} className="text-slate-500" />
                        <select
                            onChange={(e) => setSort(e.target.value)}
                            className="bg-transparent py-2 outline-none text-slate-600 font-medium cursor-pointer"
                        >
                            <option value="">Sort By</option>
                            <option value="low">Price: Low to High</option>
                            <option value="high">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {[...Array(itemsPerPage)].map((_, i) => (
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

                {/* Empty */}
                {!loading && paginated.length === 0 && (
                    <div className="text-center py-20 rounded-3xl border-2 border-dashed border-slate-200">
                        <Package size={60} className="mx-auto text-slate-300 mb-4" />
                        <h3 className="text-xl font-bold text-slate-700">No Items Found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters</p>
                    </div>
                )}

                {/* Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {paginated.map(item => (
                        <div key={item.id} className="group bg-white/50 rounded-2xl border border-slate-100 shadow-sm  hover:-translate-y-1 transition-all duration-600 overflow-hidden">
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

                                <div className="flex justify-between items-center border-t border-slate-50">
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

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-12">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-600 disabled:opacity-50 hover:bg-slate-50 transition-all shadow-sm"
                        >
                            Prev
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages).keys()].map(i => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i + 1)}
                                    className={`w-12 h-12 rounded-2xl font-bold transition-all shadow-sm ${page === i + 1
                                        ? "bg-blue-600/70 text-white shadow-blue-200 scale-110"
                                        : "bg-white border border-slate-200 text-slate-600 hover:border-blue-400"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                            className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-600 disabled:opacity-50 hover:bg-slate-50 transition-all shadow-sm"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}