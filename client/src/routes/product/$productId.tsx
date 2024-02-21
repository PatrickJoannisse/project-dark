import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product/$productId')({
  loader: async ({ params }) => {
    return fetchProduct(params.productId)
  },
  component: Product,
})

async function fetchProduct(productId: string) {
  const res = await fetch(`http://localhost:3000/product/${productId}`)
  return res.json()
}

function Product() {
  const data = Route.useLoaderData();
  return (
    <div className="text-white p-2">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  )
}