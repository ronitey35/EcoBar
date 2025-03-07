import Features from "./componets/home/Features";
import FlashSales from "./componets/home/FlashSales";
import Hero from "./componets/home/Hero";
import LatestNews from "./componets/home/LatestNews";
import ProductsDetails from "./componets/home/ProductDetails";
import Testimonials from "./componets/home/Testimonials";
import Footer from "./componets/layout/Footer";
import Navbar from "./componets/layout/Navbar";



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

      <div className="section-margin-y ">
      <FlashSales/>
      </div>

      <div className="section-margin-y">
      <Testimonials/>
      </div> 

     
     
      <div className="section-margin-y">
      <LatestNews/>
      </div> 
     
     <Footer/>
    </>

  );
}

export default App;
