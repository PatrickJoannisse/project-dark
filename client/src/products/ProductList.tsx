import { Link } from '@tanstack/react-router';
import { Product } from './product'

type ProductListProps = {
  title: string;
  products: Array<Product>;
}

export default function ProductList(props:ProductListProps) {
  const { title, products } = props;
  /* I would make this a utility that takes into account the currency, localization etc. */
  const formatPrice = (price: number) => {
    if(price === 0) return 'Free';
    return `$${price / 100}`
  }

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-screen-2xl lg:px-8">
        <h2 className="text-white py-3 font-bold text-lg">{title}</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8 xl:gap-x-4">
          {products.map((product) => (
            <Link to="/product/$productId" params={{productId:product.id}} key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-90 xl:max-h-[220px]"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-300">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-100">{formatPrice(product.price)}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
