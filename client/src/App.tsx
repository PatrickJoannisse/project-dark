import ProductList from "./products/ProductList";

export default function App() {
  return (
    <>
      <header className="py-32">
        <h1 className="flex flex-col items-center justify-center text-5xl font-extrabold text-neutral-100">
          Welcome to the store
        </h1>
      </header>
      <main className="container mx-auto">
        <ProductList />
      </main>
    </>
  )
}
