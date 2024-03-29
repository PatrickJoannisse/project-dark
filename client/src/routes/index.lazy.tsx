import { useQuery } from '@tanstack/react-query';
import { Link, createLazyFileRoute } from '@tanstack/react-router';
import ProductList from '../features/products/ProductList';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const query = useQuery({ queryKey: [], queryFn: () => fetch('/api/v1/products').then(res => res.json()) })
  return (
    <>
      <header className="py-16">
        <h1 className="flex flex-col items-center justify-center text-5xl font-extrabold">
          Welcome to the store
        </h1>
        <div className='flex flex-col items-center'>
          <Link to="/login" className="">Login</Link>
          <Link to="/private">Private</Link>
        </div>
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