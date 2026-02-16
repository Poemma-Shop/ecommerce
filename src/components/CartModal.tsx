"use client";

import { useCart } from "@/context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ItemCart from "./ItemCart";
import CartSummary from "./CartSummary";

export default function CartModal() {
  const { items, isOpen, closeCart, removeItem } = useCart();

  if (!isOpen) return null;

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-1 pb-4">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Tu carrito
          </h2>

          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100 active:scale-95"
            aria-label="Cerrar carrito"
          >
            <XMarkIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto pb-4 space-y-4">
          {items.length === 0 && (
            <p className="text-sm text-gray-500 text-center">
              Tu carrito está vacío
            </p>
          )}

          {items.map((item) => (
            <ItemCart key={item.id} item={item} removeItem={removeItem} />
          ))}
        </div>

        {items.length > 0 && (
          <CartSummary
            total={total}
            onCheckout={() => {
              closeCart();
            }}
          />
        )}
      </div>
    </div>
  );
}
