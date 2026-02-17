import Carousel from "@/components/Carousel";
import NavBar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Collar Aurora",
    price: 29.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "2",
    name: "Pulsera Éter",
    price: 19.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "3",
    name: "Anillo Lúa",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "4",
    name: "Anillo Lúa",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "5",
    name: "Anillo Lúa",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "6",
    name: "Anillo Lúa",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "7",
    name: "Anillo Lúa",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "8",
    name: "Anillo Lúa",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "9",
    name: "Anillo Lúa",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "10",
    name: "Anillo Lúa",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Contenedor global */}
      <main className="mx-auto w-full max-w-6xl px-4">
        {/* Carousel */}
        <section className="mt-8">
          <Carousel
            slides={[
              { id: 1, imageUrl: "/slide-1.jpg" },
              { id: 2, imageUrl: "/slide-2.jpg" },
              { id: 3, imageUrl: "/slide-3.jpg" },
            ]}
          />
        </section>

        {/* Productos */}
        <section className="py-12">
          <h2 className="mb-6 text-xl font-semibold tracking-wide text-gray-900">
            Productos
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
