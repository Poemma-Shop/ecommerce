import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../../page";
import ProductCard from "@/components/ProductCard";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* 🖼 Imagen */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 max-w-120">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </div>

        {/* 📄 Info */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">{product.category}</span>

          <h1 className="mt-2 text-3xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-4 text-3xl font-bold text-black">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Cantidad */}
          <div className="mt-6 flex items-center gap-4">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-20 rounded-lg border border-gray-300 px-3 py-2"
            />

            <button className="flex-1 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800">
              Agregar al carrito
            </button>
          </div>

          {/* Info extra */}
          <div className="mt-8 border-t pt-6 text-sm text-gray-500 space-y-2">
            <p>✔ Envíos a todo el país</p>
            <p>✔ Garantía de 30 días</p>
            <p>✔ Pagos seguros</p>
          </div>
        </div>
      </div>

      <section className="py-12">
        <h2 className="mb-6 text-xl font-semibold tracking-wide text-gray-900">
          Productos
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
