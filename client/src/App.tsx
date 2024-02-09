import { useEffect, useState } from "react";
import ProductList from "./products/ProductList";

export default function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/product')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  
  return (
    <>
      <header className="py-16">
        <h1 className="flex flex-col items-center justify-center text-5xl font-extrabold text-neutral-100">
          Welcome to the store
        </h1>
      </header>
      <main className="container mx-auto">
        <ProductList title="Best sellers" products={products} />
      </main>
    </>
  )
}
