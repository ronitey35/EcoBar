export default function NewsCard({ post }) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative">
          <img
            src={post.image }
            alt={post.title}
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute top-4 left-4 bg-white rounded-md px-2 py-1 text-sm font-medium">{post.date}</div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
          <a
            href="#"
            className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors duration-300 inline-flex items-center"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    )
  }
  
  