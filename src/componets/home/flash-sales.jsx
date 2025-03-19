"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const endTime = new Date("2025-04-04T15:59:59").getTime()

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now())

  useEffect(() => {
    const updateTimeLeft = () => setTimeLeft(endTime - Date.now())
    const interval = setInterval(updateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, []) // Add empty dependency array to prevent continuous re-creation of interval

  const seconds = Math.floor((timeLeft / 1000) % 60)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))

  return (
    <div className="bg-[#f5f9f5]  section-padding-x  section-padding-y">
      <div className="max-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Left side image */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img
              src="/home/flashsales/left-side-image.png"
              alt="Fresh vegetables in a basket"
              className="object-contain max-h-[300px]"
              style={{ objectPosition: "left center" }}
            />
          </div>

          {/* Center content */}
          <div className="w-full md:w-1/3 lg:w-2/4 text-center z-10">
            <p className="text-green-500 font-medium uppercase tracking-wider mb-2">BEST DEALS</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-900 mb-6 leading-tight">
              Our Special Products
              <br />
              Deal of the Month
            </h2>

            <div className="flex justify-center gap-4 mb-8">
              <Counter timer={days} title="DAYS" />
              <div className="text-2xl font-bold text-green-500 self-center pb-6">:</div>
              <Counter timer={hours} title="HOURS" />
              <div className="text-2xl font-bold text-green-500 self-center pb-6">:</div>
              <Counter timer={minutes} title="MINS" />
              <div className="text-2xl font-bold text-green-500 self-center pb-6">:</div>
              <Counter timer={seconds} title="SECS" />
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center mx-auto transition-all duration-300">
              Shop now
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Right side image */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img
              src="/home/flashsales/right-side-image.png"
              alt="Person holding grocery bag"
              className="object-contain max-h-[300px]  "

            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashSales

const Counter = ({ title, timer }) => {
  // timer lai sadhia 2 digit mah rakhne lai ho hai yo `formattedTimer` variable
  const formattedTimer = timer < 10 ? `0${timer}` : timer

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-md w-16 h-16 flex items-center justify-center mb-2">
        <h3 className="text-2xl md:text-3xl font-bold text-green-500">{formattedTimer}</h3>
      </div>
      <p className="text-xs font-medium text-gray-600">{title}</p>
    </div>
  )
}

