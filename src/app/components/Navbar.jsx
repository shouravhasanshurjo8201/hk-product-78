"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const linkClass = (path) =>
    `hover:underline ${pathname === path ? "underline font-semibold" : ""}`;

  return (
    <nav className="bg-blue-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="font-bold text-2xl">H.K</h1>

      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <Link href="/" className={linkClass("/")}>Home</Link>
        <Link href="/items" className={linkClass("/items")}>Items</Link>

        {/* Session loading */}
        {status === "loading" && <span>...</span>}

        {/* Not logged in */}
        {!session && status !== "loading" && (
          <Link href="/login" className={linkClass("/login")}>Login</Link>
        )}

        {/* Logged in */}
        {session && (
          <div className="flex items-center gap-3">
            <img
              src={session.user?.image || "https://i.ibb.co/2kR5zq0/user.png"}
              alt="avatar"
              className="w-8 h-8 rounded-full border"
            />
            <button
              onClick={() => signOut()}
              className="bg-red-500 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
