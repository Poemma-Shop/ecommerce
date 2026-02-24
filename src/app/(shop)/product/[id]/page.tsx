import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../../page";
import ProductCard from "@/components/ProductCard";
import ProductButton from "@/components/ProductButton";
import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-6xl">
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/products" },
          { label: product.name },
        ]}
      />

      <div className="grid gap-2 lg:grid-cols-2 lg:items-start">
        {/* 🖼 Imagen */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative aspect-square w-full max-w-120 overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* 📄 Info */}
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            {product.category}
          </span>

          <h1 className="mt-3 text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
            {product.name}
          </h1>

          <p className="mt-5 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* 💰 CARD DE COMPRA */}
          <div className="mt-10 rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between gap-6">
              <p className="text-3xl font-semibold text-black">
                ${product.price.toFixed(2)}
              </p>

              <ProductButton product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Relacionados */}
      <section className="mt-20">
        <h2 className="mb-8 text-xl font-medium text-gray-900">
          Más productos
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
