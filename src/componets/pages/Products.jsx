import React from 'react'
import { useProducts } from '../../queries/use-product'
import ProductCard from '../layout/ProductCard'

const Products = () => {

  const {data:products,isLoading} = useProducts()
  console.log(products)

  if(isLoading) return (<div className='h-screen'><h1>Product is loading</h1></div>)
  return (
    <div className='h-screen max-width'>
      <section className='section-padding-x section-padding-y grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {
              products?.map((product)=> (
                <ProductCard  product={product}/>
              ))
            }
      </section>
    </div>
  )
}

export default Products