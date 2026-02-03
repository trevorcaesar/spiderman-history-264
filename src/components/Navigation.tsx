import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const villains = [
  { name: 'Green Goblin', path: '/villains/green-goblin', color: 'from-green-500 to-purple-600' },
  { name: 'Doctor Octopus', path: '/villains/doctor-octopus', color: 'from-amber-500 to-orange-600' },
  { name: 'Venom', path: '/villains/venom', color: 'from-gray-800 to-black' },
  { name: 'Sandman', color: 'from-yellow-400 to-orange-500' },
]

const powers = [
  { name: 'Spider-Sense', path: '/powers/spider-sense', color: 'from-red-500 to-blue-600' },
  { name: 'Wall-Crawling', path: '/powers/wall-crawling', color: 'from-blue-500 to-cyan-400' },
  { name: 'Super Strength', path: '/powers/super-strength', color: 'from-red-600 to-yellow-500' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white border-b-4 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,0.2)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-blue-600 border-2 border-black rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span 
                className="font-black text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                <span className={scrolled ? 'text-red-600' : 'text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]'}>SPIDER</span>
                <span className={scrolled ? 'text-blue-600' : 'text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]'}>-MAN</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Home */}
              <button
                onClick={() => scrollToSection('hero')}
                className={`px-4 py-2 font-bold uppercase tracking-wide transition-all hover:scale-105 ${
                  scrolled 
                    ? 'text-black hover:text-red-600' 
                    : 'text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:text-yellow-400'
                }`}
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                Home
              </button>

              {/* Villains Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('villains')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 font-bold uppercase tracking-wide flex items-center gap-1 transition-all hover:scale-105 ${
                    scrolled 
                      ? 'text-black hover:text-red-600' 
                      : 'text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:text-yellow-400'
                  }`}
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  Villains
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'villains' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden"
                    >
                      {villains.map((villain) => (
                        <Link
                          key={villain.name}
                          to={villain.path || '#'}
                          className="block px-4 py-3 font-bold uppercase text-sm hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0 transition-colors"
                          style={{ fontFamily: 'Impact, sans-serif' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className={`bg-gradient-to-r ${villain.color} bg-clip-text text-transparent`}>
                            {villain.name}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Powers Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('powers')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 font-bold uppercase tracking-wide flex items-center gap-1 transition-all hover:scale-105 ${
                    scrolled 
                      ? 'text-black hover:text-red-600' 
                      : 'text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:text-yellow-400'
                  }`}
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  Powers
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === 'powers' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden"
                    >
                      {powers.map((power) => (
                        <Link
                          key={power.name}
                          to={power.path}
                          className="block px-4 py-3 font-bold uppercase text-sm hover:bg-gray-100 border-b-2 border-gray-200 last:border-b-0 transition-colors"
                          style={{ fontFamily: 'Impact, sans-serif' }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className={`bg-gradient-to-r ${power.color} bg-clip-text text-transparent`}>
                            {power.name}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Origin */}
              <button
                onClick={() => scrollToSection('origin')}
                className={`px-4 py-2 font-bold uppercase tracking-wide transition-all hover:scale-105 ${
                  scrolled 
                    ? 'text-black hover:text-red-600' 
                    : 'text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:text-yellow-400'
                }`}
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                Origin
              </button>

              {/* Timeline */}
              <button
                onClick={() => scrollToSection('timeline')}
                className={`px-4 py-2 font-bold uppercase tracking-wide transition-all hover:scale-105 ${
                  scrolled 
                    ? 'text-black hover:text-red-600' 
                    : 'text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:text-yellow-400'
                }`}
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                Timeline
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 border-2 border-black rounded-lg transition-colors ${
                scrolled ? 'bg-white text-black' : 'bg-white/20 text-white backdrop-blur-sm'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white border-l-4 border-black">
              <div className="p-6 pt-20">
                <div className="space-y-4">
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="block w-full text-left px-4 py-3 font-black text-xl border-2 border-black hover:bg-red-50 transition-colors"
                    style={{ fontFamily: 'Impact, sans-serif' }}
                  >
                    HOME
                  </button>

                  <div className="border-2 border-black">
                    <div className="bg-red-600 text-white px-4 py-2 font-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                      VILLAINS
                    </div>
                    {villains.map((villain) => (
                      <Link
                        key={villain.name}
                        to={villain.path || '#'}
                        className="block px-4 py-3 font-bold border-b-2 border-gray-200 last:border-b-0 hover:bg-gray-50"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                        onClick={() => setIsOpen(false)}
                      >
                        {villain.name}
                      </Link>
                    ))}
                  </div>

                  <div className="border-2 border-black">
                    <div className="bg-blue-600 text-white px-4 py-2 font-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                      POWERS
                    </div>
                    {powers.map((power) => (
                      <Link
                        key={power.name}
                        to={power.path}
                        className="block px-4 py-3 font-bold border-b-2 border-gray-200 last:border-b-0 hover:bg-gray-50"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                        onClick={() => setIsOpen(false)}
                      >
                        {power.name}
                      </Link>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToSection('origin')}
                    className="block w-full text-left px-4 py-3 font-black text-xl border-2 border-black hover:bg-red-50 transition-colors"
                    style={{ fontFamily: 'Impact, sans-serif' }}
                  >
                    ORIGIN
                  </button>

                  <button
                    onClick={() => scrollToSection('timeline')}
                    className="block w-full text-left px-4 py-3 font-black text-xl border-2 border-black hover:bg-red-50 transition-colors"
                    style={{ fontFamily: 'Impact, sans-serif' }}
                  >
                    TIMELINE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

