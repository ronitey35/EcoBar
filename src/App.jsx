import { Route, Routes } from "react-router-dom";
import Footer from "./componets/layout/Footer";
import Navbar from "./componets/layout/Navbar";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contact";
import SignIn from "./componets/pages/SignIn";
import SignUp from "./componets/pages/SignUp";
import Products from "./componets/pages/Products";
import Home from "./Home";
import NotFound from "./componets/layout/NotFound";




function App() {
  return (

  <>
  <Navbar/>
  <main>

<Routes>

<Route  path="/" element={<Home />} />
<Route  path="/about" element={<About />} />
<Route  path="/contact" element={<Contact/>} />
<Route  path="/signin" element={<SignIn/>} />
<Route  path="/signup" element={<SignUp/>} />
<Route  path="/products" element={<Products/>} />
<Route  path="*" element={<NotFound/>} />
</Routes>

  </main>



  <Footer/>
  </>

  );
}

export default App;
