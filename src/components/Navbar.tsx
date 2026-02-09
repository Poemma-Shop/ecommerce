import Link from "next/link";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link href="/login" className="md:hidden p-2">
              <UserIcon className="h-6 w-6 text-gray-700" />
            </Link>

            <Link href="/" className="hidden md:block">
              <h1 className="text-2xl font-bold tracking-widest">POEMMA</h1>
            </Link>
          </div>

          <div className="flex flex-1 justify-center">
            <Link href="/" className="md:hidden">
              <h1 className="text-xl font-bold tracking-widest">POEMMA</h1>
            </Link>

            <div className="hidden md:flex w-full max-w-md">
              <SearchInput />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:flex items-center gap-2">
              <UserIcon className="h-6 w-6" />
              <span className="text-sm">Iniciar sesión</span>
            </Link>

            <Link href="/cart" className="relative p-2">
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        <div className="md:hidden pb-3">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}
