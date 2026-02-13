import Image from "next/image";
import Link from "next/link";
import ProductButton from "./ProductButton";

export type Product = {
  id: number;
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
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:shadow-lg"
    >
      {/* Imagen */}
      <div className="relative h-55 w-full overflow-hidden bg-gray-100">
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
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-black">
            ${product.price.toFixed(2)}
          </p>

          <ProductButton product={product} />
        </div>
      </div>
    </Link>
  );
}
