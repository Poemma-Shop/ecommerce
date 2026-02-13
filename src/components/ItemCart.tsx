import Image from "next/image";
import ProductButton from "./ProductButton";
import { CartItem } from "@/context/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Props {
  item: CartItem;
  removeItem: (id: string) => void;
}
export default function ItemCart({ item, removeItem }: Props) {
  const total = item.price * item.quantity;

  return (
    <div className="flex items-center gap-4 border-b border-gray-100 py-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col">
        <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
          {item.name}
        </h4>

        <p className="mt-1 text-sm text-gray-500">
          ${item.price.toFixed(2)} c/u
        </p>

        <div className="mt-3">
          <ProductButton product={item} />
        </div>
      </div>

      <span className="text-sm font-semibold text-black">
        ${total.toFixed(2)}
      </span>

      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 transition hover:text-red-600"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
