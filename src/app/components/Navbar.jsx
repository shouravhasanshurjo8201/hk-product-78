"use client"; 
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">H.K</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/items" className="hover:underline">Items</Link>
        <Link href="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}
