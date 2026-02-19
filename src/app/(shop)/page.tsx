import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";

export const products = [
  {
    id: "1",
    name: "Collar Aurora",
    price: 4.5,
    category: "Collares",
    description:
      "Collar delicado con dijes de cristales que reflejan la luz como el amanecer.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "2",
    name: "Pulsera Éter",
    price: 3.2,
    category: "Pulseras",
    description:
      "Pulsera ligera con cuentas de colores, perfecta para el uso diario.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "3",
    name: "Anillo Lúa",
    price: 2.75,
    category: "Anillos",
    description:
      "Anillo ajustable con un pequeño cristal que brilla suavemente bajo la luz.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "4",
    name: "Aretes Cielo",
    price: 1.99,
    category: "Aretes",
    description:
      "Aretes colgantes en forma de estrella, ideales para resaltar tu estilo.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "5",
    name: "Collar Estrella",
    price: 4.8,
    category: "Collares",
    description:
      "Collar con colgante de estrella brillante, elegante y minimalista.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "6",
    name: "Pulsera Luna",
    price: 2.5,
    category: "Pulseras",
    description:
      "Pulsera con dijes de luna, perfecta para combinar con cualquier outfit.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "7",
    name: "Anillo Sol",
    price: 3.99,
    category: "Anillos",
    description: "Anillo con diseño de sol, un accesorio llamativo y moderno.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "8",
    name: "Aretes Mariposa",
    price: 1.5,
    category: "Aretes",
    description:
      "Aretes pequeños con forma de mariposa, delicados y femeninos.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "9",
    name: "Collar Corazón",
    price: 4.2,
    category: "Collares",
    description:
      "Collar con colgante de corazón, perfecto para regalar o lucir a diario.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
  {
    id: "10",
    name: "Pulsera Amatista",
    price: 3.75,
    category: "Pulseras",
    description:
      "Pulsera con cuentas de amatista, aporta un toque elegante a tu estilo.",
    image:
      "https://res.cloudinary.com/dglodibsi/image/upload/v1770762168/test_pjrtjl.webp",
  },
];
export default function Home() {
  return (
    <>
      {/* Contenedor global */}
      <div className="mx-auto w-full max-w-6xl px-4">
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
      </div>
    </>
  );
}
