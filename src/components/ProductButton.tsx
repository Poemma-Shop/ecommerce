"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
};

export default function ProductButton({ product }: Props) {
  const { items, addItem, removeItem } = useCart();

  const item = items.find((i) => i.id === String(product.id));
  const quantity = item?.quantity ?? 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem({
      id: String(product.id),
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  const handleSubtract = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (quantity === 1) {
      removeItem(String(product.id));
    } else {
      addItem({
        id: String(product.id),
        name: product.name,
        price: product.price,
        quantity: -1,
        image: product.image,
      });
    }
  };

  return (
    <div
      className={`
        flex items-center overflow-hidden bg-black text-white
        transition-all duration-300 ease-in-out
        ${
          quantity === 0
            ? "h-11 w-11 rounded-full"
            : "h-11 w-27.5 rounded-full px-3"
        }
      `}
    >
      {quantity === 0 ? (
        <button
          onClick={handleAdd}
          className="flex h-full w-full items-center justify-center text-xl"
        >
          +
        </button>
      ) : (
        <>
          <button
            onClick={handleSubtract}
            className="flex h-full items-center justify-center px-2 text-xl"
          >
            –
          </button>

          <span className="flex-1 text-center text-sm font-medium">
            {quantity}
          </span>

          <button
            onClick={handleAdd}
            className="flex h-full items-center justify-center px-2 text-xl"
          >
            +
          </button>
        </>
      )}
    </div>
  );
}
