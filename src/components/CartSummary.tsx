"use client";

interface Props {
  total: number;
  onCheckout: () => void;
}

const formatPrice = (value: number) => {
  return value.toFixed(2);
};

const CartSummary: React.FC<Props> = ({ total, onCheckout }) => {
  return (
    <div className="border-t pt-4">
      <div className="mb-6 mt-2 flex justify-between items-center">
        <span className="text-[22px] font-medium text-[#393938]">Total</span>

        <span className="text-[22px] font-semibold text-[#393938]">
          ${formatPrice(total)}
        </span>
      </div>

      <button
        onClick={onCheckout}
        className="w-full h-12.5 rounded-md bg-black text-white text-lg font-medium transition hover:bg-neutral-800 active:scale-[0.98]"
      >
        Ir a pagar
      </button>
    </div>
  );
};

export default CartSummary;
