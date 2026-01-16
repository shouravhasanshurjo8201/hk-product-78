"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { LogOut, LayoutDashboard, List, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const getLinkStyle = (path) => {
    const isActive = pathname === path;
    return `relative px-4 py-2 flex items-center gap-2 transition-all duration-300 rounded-xl text-sm font-bold ${isActive
        ? "text-white bg-blue-500/10 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
        : "text-blue-100 hover:text-white hover:bg-white/10"
      }`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-700/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4 lg:px-12 py-3 flex justify-between items-center">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-white/40 text-blue-700 w-10 h-10 flex items-center justify-center rounded-2xl font-black text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            H.K
          </div>
          <div className="hidden md:flex  flex-col">
            <h1 className="font-bold text-lg leading-none text-white tracking-tight">
              <span className="text-blue-300 font-light">Workflow</span>
            </h1>
            <span className="text-[10px] text-blue-200/60 font-medium uppercase tracking-[0.2em]">Management</span>
          </div>
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-1 bg-blue-400/20 p-1.5 rounded-2xl border border-white/5 shadow-inner">
            <Link href="/" className={getLinkStyle("/")}>
              <LayoutDashboard size={15} />
              <span className="hidden md:inline">Home</span>
              {pathname === "/"}
            </Link>

            <Link href="/items" className={getLinkStyle("/items")}>
              <List size={15} />
              <span className="hidden md:inline">Items</span>
              {pathname === "/items"}
            </Link>
          </div>

          <div className="h-8 w-1 bg-white/20 mx-1 hidden sm:block"></div>

          <div className="flex items-center">
            {status === "loading" ? (
              <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
            ) : !session ? (
              <Link
                href="/login"
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 flex items-center gap-2 ${pathname === "/login"
                    ? "bg-white text-blue-700 shadow-xl shadow-white/10"
                    : "text-white border border-white/30 hover:bg-white/10"
                  }`}
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors p-1 pr-3 rounded-2xl border border-white/10 group cursor-default">
                <div className="relative">
                  <img
                    src={session.user?.image || "https://i.ibb.co/2kR5zq0/user.png"}
                    alt="avatar"
                    className="w-9 h-9 rounded-xl border border-white/20 object-cover shadow-md"
                  />
                  <div className="absolute -top-1 -right-1 bg-emerald-500 w-3 h-3 border-2 border-blue-700 rounded-full" title="Online"></div>
                </div>

                <button
                  onClick={() => signOut()}
                  className="ml-1 p-2 bg-white/5 text-white hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300"
                  title="Logout"
                >
                  <LogOut size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}