"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function CartButton() {
  const { openCart, items } = useCart();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        openCart();
      }}
      className="relative p-2"
    >
      <ShoppingBagIcon className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
}
