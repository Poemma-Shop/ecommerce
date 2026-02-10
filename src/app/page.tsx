import Carousel from "@/components/Carousel";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />

      <section className="mt-8 mx-4">
        <Carousel
          slides={[
            { id: 1, imageUrl: "/slide-1.jpg" },
            { id: 2, imageUrl: "/slide-2.jpg" },
            { id: 3, imageUrl: "/slide-3.jpg" },
          ]}
        />
      </section>
    </>
  );
}
