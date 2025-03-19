"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MapPin, Mail, Phone } from "lucide-react"

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters." })
    .max(100, { message: "Subject must not exceed 100 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must not exceed 1000 characters." }),
})


const contactInfo = [
  {
    icon: MapPin,
    lines: ["2715 Ash Dr, San Jose, South", "Dakota 83475"],
  },
  {
    icon: Mail,
    lines: ["Proxy@gmail.com", "Help.proxy@gmail.com"],
  },
  {
    icon: Phone,
    lines: ["+977 985674736", "+977 98954636"],
  },
]



export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data) => {
   console.log(data)
  }

  return (
    <div className="w-full section-margin-y max-w-6xl border mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Contact Info Sidebar */}
        <div className="w-full md:w-1/3 bg-gray-50 p-8">
          <div className="space-y-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <item.icon className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  {item.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-800 font-medium">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-2/3 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Just Say Hello!</h2>
            <p className="text-gray-600 mt-2">
              Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free
              to contact me.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <input
                {...register("subject")}
                type="text"
                placeholder="Subject"
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                {...register("message")}
                rows={6}
                placeholder="Your message"
                className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-75"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

