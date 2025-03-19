import { FacebookIcon, Instagram, LinkedinIcon, TwitterIcon } from "lucide-react"
import FooterColumn from "./footer-column"

export default function Footer() {
  const aboutLinks = [
    { id: 1, label: "About Us", href: "/about" },
    { id: 2, label: "Contact", href: "/contact" },
    { id: 3, label: "Shipping Info", href: "#" },
  ]

  const accountLinks = [
    { id: 1, label: "My Account", href: "#" },
    { id: 2, label: "Order History", href: "#" },
    { id: 3, label: "Settings", href: "#" },
    { id: 4, label: "Shipping Info", href: "#" },
  ]

  const helpLinks = [
    { id: 1, label: "Contact", href: "#" },
    { id: 2, label: "FAQs", href: "#" },
    { id: 3, label: "Privacy Policy", href: "#" },
    { id: 4, label: "Terms & Conditions", href: "#" },
    { id: 5, label: "Track Order", href: "#" },
  ]

  const proxyLinks = [
    { id: 1, label: "About", href: "#" },
    { id: 2, label: "Shop", href: "#" },
    { id: 3, label: "Product", href: "#" },
    { id: 4, label: "Find on Google", href: "#" },
  ]

 
  return (
    <footer className="bg-green-900 text-white pt-12 pb-4">
      <div className="max-width px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a href="/" className="inline-block">
                <div className="flex items-center">
                  <span className="text-white font-bold text-xl">
                    <span className="text-green-400">Eco</span>bazar
                  </span>
                </div>
              </a>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <div className="mb-4">
              <p className="text-gray-300 text-sm mb-1">+977 9789798974</p>
              <p className="text-gray-300 text-sm">info@gmail.com</p>
            </div>
          </div>

          <FooterColumn title="About Shopery" links={aboutLinks} />
          <FooterColumn title="My Account" links={accountLinks} />
          <FooterColumn title="Help" links={helpLinks} />
          <FooterColumn title="Proxy" links={proxyLinks} />
        </div>

  
        <div className="mt-10 pt-6 border-t border-green-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">Copyright © 2023 All rights reserved</p>
          <div className="flex items-center space-x-4">
            <FacebookIcon/>
            <a href="#" className="text-gray-300 hover:text-white">
              <TwitterIcon/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
             <Instagram/>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <LinkedinIcon/>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

