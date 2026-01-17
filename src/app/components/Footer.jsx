"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#151d2f] text-gray-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div className="space-y-4">
          <img src="/logo.png" alt="logo" className="h-12 w-12" />
          <p className="text-sm leading-relaxed">
            Build, manage, and scale your ideas with our secure platform. Designed for modern developers and creators.
          </p>
          <div className="flex gap-4 pt-2">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Navigation</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-all flex items-center gap-2 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-blue-400 transition-all flex items-center gap-2 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                Explore Items
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-400 transition-all flex items-center gap-2 group">
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                Member Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Support</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#faq" className="hover:text-blue-400 transition-all">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-all">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-all">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Stay Updated</h3>
          <p className="text-sm mb-4">Get the latest updates directly in your inbox.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-500 transition-all"
            />
            <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 p-1.5 rounded-md text-white transition-colors">
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p>&copy; {new Date().getFullYear()} MyApp Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Status: Healthy
          </span>
        </div>
      </div>
    </footer>
  );
}