// components/Header.tsx
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { LuMonitor } from "react-icons/lu";

export default function Header() {
  return (
    <header className="bg-[#0f0f0f] text-white py-4 px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold">
          E-shop
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-8 bg-[#121212] border border-gray-700 rounded-full px-6 py-2">
          <Link href="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="/product" className="hover:text-purple-400 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-purple-400 transition">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="flex items-center gap-1 border border-gray-700 px-3 py-1.5 rounded-md hover:border-purple-500"
          >
            <FiLogIn />
            Login
          </Link>
          <Link
            href="/auth/register"
            className="flex items-center gap-1 border border-gray-700 px-3 py-1.5 rounded-md hover:border-purple-500"
          >
            <PiUserCirclePlusLight />
            Sign Up
          </Link>
          <button className="border border-blue-500 p-2 rounded-md hover:bg-blue-500 hover:text-white transition">
            <LuMonitor />
          </button>
          <Link
            href="https://github.com/surya635/e-shop"
            target="_blank"
            className="p-2 rounded-md hover:bg-gray-800 transition"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </header>
  );
}