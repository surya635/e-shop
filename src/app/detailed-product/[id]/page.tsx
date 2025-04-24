'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '../../service/api';
import { Product } from '@/interface/props';


export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setMainImage(res.data.images?.[0] || '');
      })
      .catch(err => console.error('Gagal fetch product:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-gray-400">Loading product...</div>;
  if (!product) return <div className="text-center mt-10 text-red-400">Product not found.</div>;

  return (
    <div className="min-h-fit min-w-fit bg-black rounded-2xl text-white p-10 flex flex-col md:flex-row gap-10">
      {/* Left Side: Thumbnails + Main Image */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-4">
          {product.images?.map((img, idx) => (
            <img
              key={idx}
              src={product.images[idx]}
              alt={`Thumbnail ${idx}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 
                ${mainImage === img ? 'border-white' : 'border-transparent'}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        {mainImage && (
        <div>
          <img
            src={mainImage}
            alt={product.title}
            className="w-[400px] h-[400px] object-cover rounded-xl"
          />
        </div>
        )}
      </div>

      {/* Right Side: Info */}
      <div className="flex-1 ">
        <div className='w-full flex justify-end'>
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-1 w-fit flex justify-end rounded-full border border-gray-600 text-sm hover:bg-zinc-800 transition">
          ← Back
        </button>
        </div>

        <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
        <div className="inline-block px-3 py-1 text-sm bg-zinc-800 rounded-full mb-4">
          {product.category.name}
        </div>

        <p className="text-gray-400 mb-6">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="mt-4 text-sm">
             <p className="text-xl text-gray-400 font-semibold mb-6">
              Price <br /><span className="text-3xl font-bold text-white">${product.price}</span>
              </p>
          </div>
          <button className="bg-violet-600 hover:bg-violet-700 transition text-white px-6 py-3 rounded-lg">
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
}
