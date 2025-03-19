import Features from "./componets/home/Features";
import FlashSales from "./componets/home/flash-sales";
import Hero from "./componets/home/Hero";
import LatestNews from "./componets/home/latest-news";
import ProductsDetails from "./componets/home/product-details";
import Testimonials from "./componets/home/Testimonials";



function Home() {
  return (

    <>

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
    
    </>

  );
}

export default Home;
