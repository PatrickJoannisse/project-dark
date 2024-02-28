import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product/$productId')({
  loader: async ({ params }) => {
    return fetchProduct(params.productId)
  },
  component: Product,
})

async function fetchProduct(productId: string) {
  const res = await fetch(`/api/v1/products/${productId}`)
  return res.json()
}

function Product() {
  const data = Route.useLoaderData();
  return (
    <div className="p-2">
      <img src={data.image} alt={data.name} className='aspect-auto w-44' />
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  )
}