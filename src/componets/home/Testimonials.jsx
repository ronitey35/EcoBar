
const testimonialsData = [
  {
    id: 1,
    quote:
      "Lorem ut elit augue orci consectetur vestibulum nunc ut amet. Aliquam ligula dignissim potenti pellentesque. Aliquam quam sodales semper. Maecenas commodo ipsum tortor ultricies.",
    name: "Jenny Wilson",
    position: "Customer",
    avatar: "image-1.png",
  },
  {
    id: 2,
    quote:
      "Proin quis mauris vel tellus malesuada ultricies eget cursus. Nullam a dui blandit, aliquam turpis eu, suscipit lectus. Vivamus a dui placerat, ornare imperdiet dapibus id, vel feugibus tellus velit.",
    name: "Guy Hawkins",
    position: "Customer",
    avatar: "image-2.png",
  },
  {
    id: 3,
    quote:
      "Nam sed dolor diam. Mauris sagittis ligula sed cursus cursus. Proin mollis ultricies enim, vel tempor nisi efficitur at. Mauris sagittis venenatis. Curabitur tortor leo sed tortor pulvinar.",
    name: "Kathryn Murphy",
    position: "Customer",
    avatar: "image-3.png",
  },
]

const Testimonials = () => {
  return (
    <section className="py-12 bg-[#f0f7f0]">
      <div className="max-width px-4">
        <h2 className="text-center text-2xl font-bold text-[#0a3b0a] mb-10">What our Clients Says</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#22c55e] text-4xl font-serif mb-4">"</div>
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={`/home/testimonials/${testimonial.avatar}` }
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

