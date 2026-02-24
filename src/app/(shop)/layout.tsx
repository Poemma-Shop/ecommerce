import NavBar from "@/components/Navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="mx-auto w-full max-w-6xl px-4 py-2">{children}</main>
    </>
  );
}
