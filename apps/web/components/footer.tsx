import Link from 'next/link'

const links = [
  { name: 'Docs', path: '/' },
  { name: 'Components', path: '/' },
  { name: 'FAQ', path: '/' },
]

export default function Footer() {
  return (
    <footer className="w-full py-2 lg:px-8 px-4">
      <div className="flex flex-row flex-wrap items-center justify-center text-center gap-y-6 gap-x-12 md:justify-between py-2">
        <h2 className="text-2xl font-bold">Open UI</h2>
        <nav className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {links.map((link, i) => (
            <Link key={i} href={link.path} className="block p-1 text-small font-medium antialiased">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <span className="block border-t pt-2 border-blue-gray-50">
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-center text-blue-gray-900">
          © 2024 Open UI, Inc. All rights reserved.
        </p>
      </span>
    </footer>
  )
}
