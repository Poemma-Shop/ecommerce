import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchInput() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Buscar piezas únicas..."
        className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-3 text-sm focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  );
}
