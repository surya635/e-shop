"use client";
import { Product } from '@/interface/props';
import React, { useEffect, useState } from 'react';
import api from '../service/api';
import { Card, CardContent } from '@/components/card';
import Image from "next/image";
import Link from 'next/link';

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.get('/products')
      .then(res => {
        console.log(res);
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Gagal ambil produk:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-lg bg-white p-4 flex flex-col">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-xl object-cover h-64 w-full"
            />
            <CardContent className="mt-4 flex flex-col justify-between h-full">
              <h2 className="text-xl text-gray-500 font-semibold mb-2">{product.title}</h2>
              {/* <p className="text-gray-600 text-sm mb-4 overflow-y-hidden max-h-[64px] text-ellipsis whitespace-normal line-clamp-3 transition-all duration-500 hover:max-h-[9999px] hover:whitespace-normal hover:transition-all hover:line-clamp-none">
                {product.description}</p> */}
                 <p className="text-sm text-gray-400 truncate">{product.description}</p>
      
                {/* TOMBOL READ MORE */}
              <Link
                href={`/detailed-product/${product.id}`}
                className="text-sm text-gray-400 hover:underline mt-2 inline-block">
                Read More
              </Link>
                <span className="inline-block w-fit bg-zinc-100 dark:bg-zinc-800 text-sm px-3 py-1 mt-3 rounded-full border border-zinc-300 dark:border-zinc-700">
                 {product.category.name}
                </span>
              <div className="flex items-center justify-between mt-4">
                <div className="mt-4 text-sm">
                  <p className="text-zinc-400">Price</p>
                  <p className="text-lg font-bold text-purple-700">${product.price}</p>
                </div>
                <button className="mt-4 w-fit bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-md transition">
                  Add To Cart
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;