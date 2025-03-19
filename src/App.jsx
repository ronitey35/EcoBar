import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./componets/pages/sign-in";
import SignUp from "./componets/pages/sign-up";
import Blogs from "./componets/pages/blogs";
import Products from "./componets/pages/products";
import NotFound from "./componets/layout/not-found";
import Navbar from "./componets/layout/navbar";
import Footer from "./componets/layout/Footer";
import About from "./componets/pages/About";
import Contact from "./componets/pages/contact";



function App() {
  return (

  <>
  <Navbar/>
  <main className="">

<Routes>

<Route  path="/" element={<Home />} />
<Route  path="/about" element={<About />} />
<Route  path="/contact" element={<Contact/>} />
<Route  path="/sign-in" element={<SignIn/>} />
<Route  path="/sign-up" element={<SignUp/>} />
<Route  path="/blogs" element={<Blogs/>} />
<Route  path="/products" element={<Products/>} />
<Route  path="*" element={<NotFound/>} />
</Routes>

  </main>



  <Footer/>
  </>

  );
}

export default App;
