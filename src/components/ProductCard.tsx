import Image from "next/image";
import Link from "next/link";
import ProductButton from "./ProductButton";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block h-full overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:shadow-lg"
    >
      <div className="flex h-full flex-col">
        {/* Imagen */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw,
                   (max-width: 1024px) 33vw,
                   20vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col p-4">
          {/* Título con espacio reservado */}
          <h3 className="min-h-11 text-sm font-medium text-gray-900 line-clamp-2">
            {product.name}
          </h3>

          {/* Bloque inferior pegado abajo */}
          <div className="mt-auto flex items-center justify-between pt-1">
            <p className="text-sm font-semibold text-black whitespace-nowrap">
              ${product.price.toFixed(2)}
            </p>

            <ProductButton product={product} />
          </div>
        </div>
      </div>
    </Link>
  );
}
