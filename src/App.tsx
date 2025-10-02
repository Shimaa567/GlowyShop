
import CardSkeleton from './components/CardSkeleton'
import ErrorState from './components/ErrorState'
import ProductCard from './components/ProductCard'
import { useGetProducts } from './Services/useGetProducts'

import "./App.css"

function App() {
  const {data:products,isLoading, isError ,refetch } = useGetProducts()

  if (isLoading) {
    return (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

    if (isError) {
    return (
      <div className="grid h-full">
        <ErrorState refetchProducts={refetch} />
      </div>
    );
  }


  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto'>
    {products?.map((product) => <ProductCard key={product.id} product={product} /> )}
    </div>
  )
}

export default App
