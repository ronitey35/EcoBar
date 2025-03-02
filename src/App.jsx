import Features from "./componets/home/Features";
import FlashSales from "./componets/home/FlashSales";
import Hero from "./componets/home/Hero";
import ProductsDetails from "./componets/home/ProductDetails";
import Testimonials from "./componets/home/Testimonials";
import Navbar from "./componets/Navbar";



function App() {
  return (

    <>
    <Navbar/>

    
    <div className="section-margin-y">
    <Hero/>
      </div>
      <div className="section-margin-y">
      <ProductsDetails />
      </div>

      <div className="section-margin-y">
      <Features/>
      </div>

      <div className="section-margin-y">
      <FlashSales/>
      </div>

      <div className="section-margin-y">
      <Testimonials/>
      </div>

      
  
 
 
 
    </>

  );
}

export default App;
