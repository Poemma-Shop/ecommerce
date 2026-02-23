"use client";

import Link from "next/link";
import { ArrowUturnLeftIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({ 
  title = "Próximamente", 
  description = "Estamos trabajando en algo increíble para ti. Esta sección estará disponible muy pronto." 
}: ComingSoonProps) {
  return (
    <main className="min-h-[80dvh] flex items-center justify-center px-4">
      <section className="w-full max-w-md bg-white border border-gray-100 p-10 rounded-3xl shadow-sm text-center relative">
        <Link
          href="/"
          className="absolute left-6 top-6 p-2 text-gray-400 hover:text-black hover:bg-gray-50 rounded-full transition-all"
          title="Volver al inicio"
        >
          <ArrowUturnLeftIcon className="w-5 h-5" />
        </Link>

        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-gray-50 rounded-2xl">
            <RocketLaunchIcon className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-3">
          {title}
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed mb-8">
          {description}
        </p>

        <Link
          href="/"
          className="inline-flex w-full items-center justify-center bg-black text-white py-3 rounded-xl font-medium tracking-wide hover:bg-gray-800 transition-all"
        >
          Volver a la tienda
        </Link>

        <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest">
          Coming Soon
        </p>
      </section>
    </main>
  );
}