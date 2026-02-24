import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-sm text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`truncate max-w-45 ${
                    isLast ? "font-medium text-gray-900" : ""
                  }`}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRightIcon className="h-4 w-4 text-gray-400" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
