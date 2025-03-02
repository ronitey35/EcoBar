import { HiArrowRight } from "react-icons/hi2"
import { HiOutlineShoppingBag, HiOutlinePhone, HiOutlineShieldCheck } from "react-icons/hi"
import { IoRefreshOutline } from "react-icons/io5"

const features = [
  {
    icon: <HiOutlineShoppingBag className="h-8 w-8" />,
    title: "Free Shipping",
    description: "Free shipping with discount",
    isPrimary: true,
  },
  {
    icon: <HiOutlinePhone className="h-8 w-8 text-green-600" />,
    title: "Great Support 24/7",
    description: "Instant access to Contact",
  },
  {
    icon: <HiOutlineShieldCheck className="h-8 w-8 text-green-600" />,
    title: "100% Secure Payment",
    description: "We ensure your money is save",
  },
  {
    icon: <IoRefreshOutline className="h-8 w-8 text-green-600" />,
    title: "Money-Back Guarantee",
    description: "30 days money-back guarantee",
  },
]

const Hero = () => {
  return (
    <div className="w-full bg-white">
      <div className="relative mx-auto max-width px-4">
        {/* Hero Content */}
        <div className="grid gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          {/* Left section */}
          <div className="flex flex-col justify-center space-y-4">
            <span className="text-sm font-medium uppercase text-green-600">WELCOME TO SHOPERY</span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
              Fresh & Healthy Organic Food
            </h1>
            <p className="text-lg text-gray-600">Free shipping on all your order, we deliver, you enjoy</p>
            <div>
              <a
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
              >
                Shop now
                <HiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* 70% off right */}
          <div className="relative">
            <div className="absolute -left-4 top-4 z-10 rounded-full bg-orange-500 px-4 py-2 text-white">
              <span className="text-lg font-bold">70% OFF</span>
            </div>
            <img
              src="/vegetable.png"
              alt="Fresh organic fruits and vegetables in a basket"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 rounded-lg p-6 ${
                feature.isPrimary ? "bg-green-600 text-white" : "border bg-white"
              }`}
            >
              {feature.icon}
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className={`text-sm ${feature.isPrimary ? "text-green-100" : "text-gray-600"}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero

