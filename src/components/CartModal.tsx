"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
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

        <div className="flex-1 overflow-auto pb-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center px-6">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <ShoppingCartIcon className="h-10 w-10 text-gray-400" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Tu carrito está vacío
              </h3>

              <p className="mt-2 text-sm text-gray-500 max-w-62.5">
                Agrega productos para comenzar tu compra.
              </p>

              <button
                onClick={closeCart}
                className="mt-6 rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Explorar productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <ItemCart key={item.id} item={item} removeItem={removeItem} />
              ))}
            </div>
          )}
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
