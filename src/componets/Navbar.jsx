import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1f1f1f] border-b border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="bg-white px-3 py-1.5 rounded flex items-center">
              <img 
                src="https://files.codingninjas.in/new_cn_logo-29829.svg" 
                alt="Coding Ninjas" 
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="text-[#fafafa] font-bold text-[16px] hover:text-[#f66c3b] transition-colors">
              Job Bootcamp
            </Link>
            <Link to="#" className="text-[#fafafa] font-bold text-[16px] hover:text-[#f66c3b] transition-colors">
              Courses
            </Link>
            <Link to="#" className="text-[#fafafa] font-bold text-[16px] hover:text-[#f66c3b] transition-colors">
              Practice
            </Link>
            <Link to="#" className="text-[#fafafa] font-bold text-[16px] hover:text-[#f66c3b] transition-colors">
              Contests
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#fafafa] font-bold bg-[#141414] border border-[#2d2d2d] px-6 py-2 rounded-lg hover:bg-[#2d2d2d] transition-colors">
              Login
            </button>
            <button className="text-white font-bold bg-[#f66c3b] px-6 py-2 rounded-lg hover:bg-[#e16824] transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#fafafa] hover:text-[#f66c3b] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-b border-[#2d2d2d]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="#" className="block px-3 py-2 text-[#fafafa] font-bold text-[16px] hover:text-[#f66c3b]">
              Job Bootcamp
            </Link>
            <Link to="#" className="block px-3 py-2 text-[#fafafa] font-bold text-[16px] hover:text-[#f66c3b]">
              Courses
            </Link>
            <Link to="#" className="block px-3 py-2 text-[#fafafa] font-bold text-[16px] hover:text-[#f66c3b]">
              Practice
            </Link>
            <Link to="#" className="block px-3 py-2 text-[#fafafa] font-bold text-[16px] hover:text-[#f66c3b]">
              Contests
            </Link>
            <div className="mt-4 flex flex-col space-y-2 px-3 pb-2">
              <button className="w-full text-[#fafafa] font-bold bg-[#141414] border border-[#2d2d2d] px-6 py-2 rounded-lg">
                Login
              </button>
              <button className="w-full text-white font-bold bg-[#f66c3b] px-6 py-2 rounded-lg">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
