"use client";

import { useCart } from "@/context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CartModal() {
  const { items, isOpen, closeCart, removeItem } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <h2 className="text-lg font-semibold">Tu carrito</h2>
          <button onClick={closeCart}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto py-4 space-y-4">
          {items.length === 0 && (
            <p className="text-sm text-gray-500 text-center">
              Tu carrito está vacío
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded p-3"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × ${item.price}
                </p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-sm text-red-500"
              >
                Quitar
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <button className="mt-4 w-full rounded bg-black py-3 text-white text-sm">
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
