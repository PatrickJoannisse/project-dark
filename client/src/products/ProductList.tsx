import React, { useEffect } from 'react'
import { Product } from './product'

export default function ProductList() {
  const [products, setProducts] = React.useState(Array<Product>);

  /* I would make this a utility that takes into account the currency, localization etc. */
  const formatPrice = (price: number) => {
    if(price === 0) return 'Free';
    return `$${price / 100}`
  }

  // just testing something
  useEffect(() => {
    fetch('http://localhost:3000/product')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <div key={product.id} className="bg-neutral-900 shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt="product"
          className=""
        />
        <div className="p-4">
          <h1 className="text-neutral-100 font-bold text-2xl">{product.name}</h1>
          <p className="mt-2 text-neutral-400">{product.description}</p>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-neutral-300 font-bold">{formatPrice(product.price)}</h1>
            <button className="px-3 py-1 bg-neutral-100 text-xs font-bold uppercase rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      ))}
      </div>
      
  )
}
