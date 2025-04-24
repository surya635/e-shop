"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-24 max-w-7xl mx-auto">
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-4xl font-bold mb-4">Style That Speaks</h2>
      <p className="text-gray-400 mb-6 max-w-md">
        Discover the latest trends in fashion and express your personality with our exclusive clothing collections.
      </p>
      <Link href="/product">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded cursor-pointer hover:bg-gray-200 transition">
          Shop Now
        </button>
      </Link>
    </div>
    <div className="flex-1 mt-10 lg:mt-0 flex justify-center relative h-[500px]">
      <Image
        src="/clothe.svg" // Ganti ini dengan nama file dari folder public
        alt="Fashion Model"
        width={500}
        height={500}
        className="rounded-lg shadow-lg"
      />
    </div>
  </section>
  );
}
