export default function FooterColumn({ title, links }) {
    return (
      <div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  