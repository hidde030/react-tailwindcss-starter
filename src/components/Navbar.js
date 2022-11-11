import { Link } from 'react-router-dom';
const navData = [
  {
    name: 'Home',
    href: '/home',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  }
]

export default function NavBar() {
  return (
    <div className=" flex container w-full mx-auto justify-between items-center font-bold text-2xl px-5  py-6 bg-slate-600">
      <Link href="/">
        <h1 className="h-[3.5rem] flex items-center text-center">Logo</h1>
      </Link>
      <nav className="hidden md:flex space-x-10 items-center">
        {navData.map((n) => {
          return (
            <Link key={n.name} href={n.href}>
              {n.name}
            </Link>
          )
        })}


      </nav>
      <div className="md:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
