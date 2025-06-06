import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineBars3,
  HiOutlineXCircle,
} from "react-icons/hi2";
import { IoLeafOutline } from "react-icons/io5";
import useCartStore from "../../store/use-cart-store";
import CartItems from "./cart-items";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const Dropdown = ({ options, value, onChange }) => (
  <select
    className="bg-transparent text-white hover:text-gray-200"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((option) => (
      <option key={option} value={option} className="text-black">
        {option}
      </option>
    ))}
  </select>
);

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
 

  const { getTotalItems } = useCartStore()
  const totalCartItems = getTotalItems()

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className=" section-padding-x  hidden max-width w-full items-center justify-between bg-zinc-900 px-4 py-2 text-sm text-white md:flex">
        <div className="flex items-center gap-2">
          <HiOutlineMapPin className="h-4 w-4" />
          <span>Store Location: Bharatpur - 10, Bypass Road, Bishal Chowk, chitwan</span>
        </div>
        <div className="flex items-center gap-4">
          <Dropdown options={["English", "Spanish", "French"]} value={language} onChange={setLanguage} />
          <Dropdown options={["USD", "EUR", "GBP"]} value={currency} onChange={setCurrency} />
          <div className="h-4 w-px bg-white/20" />
          <a href="/sign-in" className="hover:text-gray-200 hover:underline">
            Sign In 
            
          </a> 
          <div className="h-4 w-[1px] bg-white"/>
          <a href="/sign-up" className="hover:text-gray-200 hover:underline">
            Sign Up
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-2 text-2xl font-bold text-green-600">
            <IoLeafOutline className="h-6 w-6" /> Ecobazar
          </a>
          <div className="hidden flex-1 items-center justify-center px-6 lg:flex  "> 
            <div className="flex w-full max-w-xl items-center">
              <input
                type="search"
                placeholder="Search"
                className="w-full rounded-l-md border border-r-0 px-4 py-2 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
              <button className="rounded-r-md bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700">
                <HiOutlineSearch className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* heart-icon */}
            <div className="relative p-2 hover:text-green-600">
              <HiOutlineHeart className="h-6 w-6" />
            </div>
            {/* cart-icon */}
            <div
              className="relative p-2 hover:text-green-600 cursor-pointer"
               onClick={() => setIsCartOpen(true)}
            >
              <HiOutlineShoppingCart className="h-6 w-6" />
              {totalCartItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                  {totalCartItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <HiOutlineBars3 className="h-6 w-6" />
          </button>
          <div className="hidden lg:flex lg:items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className={`text-gray-600 transition-colors hover:text-green-600 ${href === '/' ? 'text-green-600' : ''}`}>
                {label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <HiOutlinePhone className="h-4 w-4" />
            <span className="font-medium">+977 9788587874</span>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t lg:hidden">
          <div className="flex flex-col divide-y">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="px-4 py-3 text-gray-600">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}


      {/* cart drawer   */}

      <div
  className={`fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50 transition-opacity duration-300 ${
    isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
  onClick={() => setIsCartOpen(false)}
>
  <div
    className={`w-80 h-full bg-white p-4 shadow-xl transform overflow-y-scroll transition-transform duration-300 ${
      isCartOpen ? "translate-x-0" : "translate-x-full"
    }`}
    onClick={(e) => e.stopPropagation()}
  >
    <div className="flex justify-between items-center border-b pb-2">
      <h2 className="text-lg font-semibold">Shopping Cart</h2>
      <HiOutlineXCircle className="h-6 w-6 cursor-pointer" onClick={() => setIsCartOpen(false)} />
    </div>
    <p className="mt-4">
           
    {totalCartItems > 0 ? <CartItems /> : "No Items in the cart"}

    </p>
  </div>
</div>
 


    </header>
  );
};

export default Navbar;
