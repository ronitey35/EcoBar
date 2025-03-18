import React, { createRef, useState } from 'react'
import { useProducts } from '../../queries/use-product'
import ProductCard from '../layout/ProductCard'
import { BiCabinet, BiCategory } from 'react-icons/bi'



const caategories= [
 {
  id:1,
  title:"All",
  value:"all"
 },
 {
  id:2,
  title:"Fruits",
  value:"fruit"
 },
 {
  id:3,
  title:"Vegetable",
  value:"vegetable"
 },
 {
  id:4,
  title:"Meat & Fish",
  value:"meat&fish"
 },

]
const Products = () => {

  const {data:products,isLoading} = useProducts()
  const [selectedCategory,setSelectedCategory] = useState("all")
  const [priceRange,setPriceRange] = useState([10,1000])
  const [selectedRating,setSelectedRating] = useState(null)



const handleCategoryChange= (value)=> {
  setSelectedCategory(value)
}


const resetFilter= ()=> {
  setSelectedCategory("all")
  setPriceRange([10,1000])
  selectedRating(null)
}

const filterProducts = products?.filter((product)=>{

const matchesCategory = selectedCategory ==="all" || product.category === selectedCategory
const matchesPrice = product.price>= priceRange[0] && product.price <= priceRange[1];
const matchesRating = !selectedRating || product.rating >=selectedRating
return  matchesCategory && matchesPrice && matchesRating

} )





  if(isLoading) return (<div className='h-screen'><h1>Product is loading</h1></div>)
  return (
    <div className='min-h-screen max-width'>

<div>
  {/* filtew= section */}
   <div  className='w-full lg:w-1/4 '>
        <div  className='stickey top-24 border bg-white p-4 shadow-sm '>
   <h4>Filters</h4>
     

     {/* categoried */}
     <div>
      <h5>Categories</h5>
        <div>

          
{caategories.map((category)=> (
  <label key={category.id}  className='flex' >
        <input type="radio" onChange={()=> handleCategoryChange(category.value)} checked={selectedCategory === category.value} />
        <span>{category.title}</span>
  </label>
))}

        </div>
     </div>

     {/* price */}
<div>
<Range
      label="Select your value"
      step={10}
      min={10}
      max={1000}
      values={priceRange}
      onChange={(values) => setPriceRange(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          className='h-2 bg-gray-300 '
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
         className='w-4 h-4 bg-green-500 rounded-full cursor-pointer'
        />
      )}
    />
 
</div>
{/* start */}
<div>

</div>


<button onClick={resetFilter}>reset</button>
        </div>
   </div>

  {/* Posuct section */}
  <section className='section-padding-x section-padding-y grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {
              filterProducts?.map((product)=> (
                <ProductCard  product={product}/>
              ))
            }
      </section>
</div>

<input type="range" />
     
    </div>
  )
}

export default Products