import NewsCard from "../layout/news-card"


export default function LatestNews() {
  const blogPosts = [
    {
      id: 1,
      image: "/home/latest-news/image-3.png",
      date: "22",
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      description:
        "Nulla felis lorem, venenatis pharetra libero et, lacinia aliquet tortor. Mauris consectetur nulla quis pulvinar porttitor. In porttitor eu risus.",
    },
    {
      id: 2,
      image: "/home/latest-news/image-2.png",
      date: "29",
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      description:
        "Nulla felis lorem, venenatis pharetra libero et, lacinia aliquet tortor. Mauris consectetur nulla quis pulvinar porttitor. In porttitor eu risus.",
    },
    {
      id: 3,
      image: "/home/latest-news/image-3.png",
      date: "08",
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      description:
        "Nulla felis lorem, venenatis pharetra libero et, lacinia aliquet tortor. Mauris consectetur nulla quis pulvinar porttitor. In porttitor eu risus.",
    },
  ]

  return (
    <section className="py-12 px-4 max-width">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

