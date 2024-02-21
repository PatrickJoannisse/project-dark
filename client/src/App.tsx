import ProductList from "./products/ProductList";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function App() {
  const queryClient = useQueryClient()
  const query = useQuery({ queryKey: [], queryFn: () => fetch('http://localhost:3000/product').then(res => res.json()) })

  return (
    <>
      <header className="py-16">
        <h1 className="flex flex-col items-center justify-center text-5xl font-extrabold text-neutral-100">
          Welcome to the store
        </h1>
      </header>
      <main className="container mx-auto">
        {query.isLoading && <div>Loading products...</div>}
        {query.isError && <div>Error fetching products</div>}
        {query.isSuccess && !query.data && <div>No products found</div>}
        {query.isSuccess && query.data && <ProductList title="All products" products={query.data} />}
      </main>
    </>
  )
}
