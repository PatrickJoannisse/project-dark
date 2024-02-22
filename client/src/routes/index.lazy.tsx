import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import ProductList from '../features/products/ProductList';
import { useAuth } from '../contexts/auth';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const query = useQuery({ queryKey: [], queryFn: () => fetch('/api/product').then(res => res.json()) })
  const auth = useAuth();
  return (
    <>
      <header className="py-16">
        <h1 className="flex flex-col items-center justify-center text-5xl font-extrabold text-neutral-100">
          Welcome to the store
        </h1>
      </header>
      <button onClick={() => auth.setUser({ id: "1", email: "test@test.com" }) }>Login</button>
      <main className="container mx-auto">
        {query.isLoading && <div>Loading products...</div>}
        {query.isError && <div>Error fetching products</div>}
        {query.isSuccess && !query.data && <div>No products found</div>}
        {query.isSuccess && query.data && <ProductList title="All products" products={query.data} />}
      </main>
    </>
  )
}