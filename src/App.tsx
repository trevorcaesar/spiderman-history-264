import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Comic book style halftone pattern background
function HalftoneBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="halftone" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2" fill="#000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone)" />
      </svg>
    </div>
  )
}

// Comic book action burst
function ActionBurst({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path
          d="M100 5 L120 35 L155 25 L140 55 L170 70 L135 80 L145 110 L110 90 L100 120 L90 90 L55 110 L65 80 L30 70 L60 55 L45 25 L80 35 Z"
          fill="#FFD700"
          stroke="#000"
          strokeWidth="3"
        />
        <text
          x="100"
          y="65"
          textAnchor="middle"
          className="font-black text-2xl fill-black"
          style={{ fontFamily: 'Impact, sans-serif' }}
        >
          {text}
        </text>
      </svg>
    </div>
  )
}

// Comic panel component
function ComicPanel({ 
  children, 
  className = '', 
  delay = 0,
  tilt = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  tilt?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: tilt - 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      className={`bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Speech bubble
function SpeechBubble({ text, position = 'left' }: { text: string; position?: 'left' | 'right' }) {
  return (
    <div className={`relative ${position === 'right' ? 'ml-auto' : ''} max-w-xs`}>
      <div className="bg-white border-4 border-black rounded-full p-4 relative">
        <p className="font-bold text-black text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          {text}
        </p>
        {/* Tail */}
        <div 
          className={`absolute bottom-0 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-black ${
            position === 'left' ? '-left-2' : '-right-2'
          }`}
          style={{ transform: position === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)', bottom: '-15px' }}
        />
      </div>
    </div>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-blue-600">
      {/* Comic book burst background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg viewBox="0 0 400 400" className="w-[800px] h-[800px] animate-spin" style={{ animationDuration: '60s' }}>
          <path
            d="M200 20 L230 150 L360 120 L260 200 L360 280 L230 250 L200 380 L170 250 L40 280 L140 200 L40 120 L170 150 Z"
            fill="#FFD700"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Issue number badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-block bg-yellow-400 border-4 border-black px-6 py-2 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="font-black text-black text-xl" style={{ fontFamily: 'Impact, sans-serif' }}>
            AMAZING FANTASY #15
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black text-white mb-4"
          style={{ 
            fontFamily: 'Impact, sans-serif',
            textShadow: '6px 6px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000'
          }}
        >
          SPIDER-MAN
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-yellow-300 mb-8"
          style={{ 
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '3px 3px 0px #000'
          }}
        >
          The Web-Slinger's Epic Journey!
        </motion.p>

        {/* Hero Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative mx-auto max-w-lg"
        >
          <div className="border-8 border-black bg-white p-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] rotate-2">
            <img 
              src="/images/spiderman-hero.png" 
              alt="Spider-Man"
              className="w-full h-auto"
            />
          </div>
          <ActionBurst text="THWIP!" className="absolute -top-8 -right-8 w-32 h-16" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12"
        >
          <a 
            href="#origin"
            className="inline-block bg-yellow-400 text-black font-black text-xl px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            START READING! →
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 border-4 border-black rotate-12" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500 border-4 border-black -rotate-12" />
    </section>
  )
}

// Origin Story Section
function OriginSection() {
  return (
    <section id="origin" className="py-24 px-4 bg-gradient-to-b from-blue-100 to-white relative">
      <HalftoneBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 
            className="text-6xl md:text-8xl font-black text-red-600"
            style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '4px 4px 0px #000'
            }}
          >
            THE ORIGIN!
          </h2>
          <p className="text-2xl font-bold text-black mt-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            How Peter Parker became the Amazing Spider-Man!
          </p>
        </motion.div>

        {/* Comic panels grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1 - The Bite */}
          <ComicPanel className="p-4" delay={0.1} tilt={-2}>
            <div className="bg-gradient-to-br from-blue-200 to-blue-100 p-4 mb-4">
              <img 
                src="/images/origin-spider-bite.png" 
                alt="The Radioactive Spider Bite"
                className="w-full h-64 object-cover border-2 border-black"
              />
            </div>
            <h3 className="text-2xl font-black text-red-600 mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
              THE BITE!
            </h3>
            <p className="text-black font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              While attending a science demonstration, Peter Parker is bitten by a radioactive spider, granting him amazing arachnid-like abilities!
            </p>
            <ActionBurst text="CHOMP!" className="absolute -top-4 -right-4 w-24 h-12" />
          </ComicPanel>

          {/* Panel 2 - Uncle Ben */}
          <ComicPanel className="p-4" delay={0.2} tilt={2}>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 mb-4">
              <img 
                src="/images/origin-uncle-ben.png" 
                alt="Uncle Ben's Wisdom"
                className="w-full h-64 object-cover border-2 border-black"
              />
            </div>
            <h3 className="text-2xl font-black text-blue-600 mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
              WITH GREAT POWER...
            </h3>
            <p className="text-black font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              After tragedy strikes, Peter learns that "with great power comes great responsibility" - words that would guide him forever!
            </p>
          </ComicPanel>

          {/* Panel 3 - Quote */}
          <ComicPanel className="p-8 bg-yellow-50 md:col-span-2" delay={0.3} tilt={0}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <SpeechBubble 
                  text="Remember, with great power comes great responsibility!"
                  position="left"
                />
              </div>
              <div className="flex-1 text-center">
                <p 
                  className="text-4xl md:text-6xl font-black text-red-600"
                  style={{ 
                    fontFamily: 'Impact, sans-serif',
                    textShadow: '3px 3px 0px #000'
                  }}
                >
                  THE SPIDER-MAN IS BORN!
                </p>
              </div>
            </div>
          </ComicPanel>
        </div>
      </div>
    </section>
  )
}

// Villains Section
function VillainsSection() {
  const villains = [
    { name: 'GREEN GOBLIN', realName: 'Norman Osborn', threat: 'GENIUS LEVEL', image: '/images/villain-green-goblin.png', color: 'bg-green-500' },
    { name: 'DOCTOR OCTOPUS', realName: 'Otto Octavius', threat: 'EXTREME', image: '/images/villain-doc-ock.png', color: 'bg-green-600' },
    { name: 'VENOM', realName: 'Eddie Brock', threat: 'MAXIMUM', image: '/images/villain-venom.png', color: 'bg-black' },
    { name: 'SANDMAN', realName: 'Flint Marko', threat: 'HIGH', image: '/images/villain-sandman.png', color: 'bg-yellow-500' },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-900 to-red-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-6xl md:text-8xl font-black text-white mb-4"
            style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '4px 4px 0px #000, -2px -2px 0px #FFD700, 2px -2px 0px #FFD700, -2px 2px 0px #FFD700, 2px 2px 0px #FFD700'
            }}
          >
            ROGUES GALLERY
          </h2>
          <p className="text-2xl font-bold text-yellow-300" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            The Most Dangerous Villains in New York!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {villains.map((villain, index) => (
            <motion.div
              key={villain.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            >
              {/* WANTED header */}
              <div className="bg-yellow-400 border-b-4 border-black p-2 text-center">
                <span 
                  className="text-2xl font-black text-black"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  ☠ WANTED ☠
                </span>
              </div>

              {/* Villain image */}
              <div className={`${villain.color} p-4`}>
                <img 
                  src={villain.image} 
                  alt={villain.name}
                  className="w-full h-48 object-cover border-2 border-black"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 
                  className="text-xl font-black text-red-600 mb-1"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  {villain.name}
                </h3>
                <p className="text-sm text-gray-600 font-bold mb-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {villain.realName}
                </p>
                <div className="bg-red-600 text-white text-center py-1 px-2 border-2 border-black">
                  <span className="text-xs font-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                    THREAT: {villain.threat}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Timeline Section
function TimelineSection() {
  const timeline = [
    { year: '1962', title: 'AMAZING FANTASY #15', desc: 'Spider-Man makes his debut, created by Stan Lee and Steve Ditko!', color: 'bg-red-500' },
    { year: '1963', title: 'OWN SERIES BEGINS', desc: 'The Amazing Spider-Man #1 launches, introducing the Green Goblin!', color: 'bg-blue-500' },
    { year: '1967', title: 'ANIMATED DEBUT', desc: 'The classic animated series airs with the famous theme song!', color: 'bg-yellow-500' },
    { year: '1984', title: 'BLACK SUIT SAGA', desc: 'Spider-Man gets his iconic black symbiote suit!', color: 'bg-black text-white' },
    { year: '2002', title: 'SPIDER-MAN MOVIE', desc: 'Sam Raimi\'s blockbuster brings Spidey to the big screen!', color: 'bg-red-600' },
    { year: '2018', title: 'INTO THE SPIDER-VERSE', desc: 'Miles Morales and multiple Spider-People unite!', color: 'bg-purple-600' },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-6xl md:text-8xl font-black text-blue-600"
            style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '4px 4px 0px #000'
            }}
          >
            HISTORY TIMELINE
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-black" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className={`${item.color} border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block`}>
                  <span 
                    className="text-3xl font-black block mb-2"
                    style={{ fontFamily: 'Impact, sans-serif' }}
                  >
                    {item.year}
                  </span>
                  <h3 
                    className="text-xl font-black mb-2"
                    style={{ fontFamily: 'Impact, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="font-bold text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-400 border-4 border-black rounded-full z-10" />

              {/* Empty space for other side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Powers Section
function PowersSection() {
  const powers = [
    { name: 'SPIDER-SENSE', desc: 'Warns of danger before it strikes!', image: '/images/power-spider-sense.png', color: 'from-red-500 to-orange-500' },
    { name: 'WALL-CRAWLING', desc: 'Stick to any surface like a spider!', image: '/images/power-wall-crawl.png', color: 'from-blue-500 to-cyan-500' },
    { name: 'SUPER STRENGTH', desc: 'Lift up to 10 tons with ease!', image: '/images/power-strength.png', color: 'from-yellow-500 to-amber-500' },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-red-600 to-blue-600 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-6xl md:text-8xl font-black text-white mb-4"
            style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '4px 4px 0px #000'
            }}
          >
            AMAZING POWERS!
          </h2>
          <ActionBurst text="WOW!" className="mx-auto w-32 h-16" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {powers.map((power, index) => (
            <motion.div
              key={power.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -3 : 3 }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${power.color} border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] h-full`}>
                <div className="bg-white border-4 border-black mb-4 overflow-hidden">
                  <img 
                    src={power.image} 
                    alt={power.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h3 
                  className="text-2xl font-black text-white mb-2"
                  style={{ 
                    fontFamily: 'Impact, sans-serif',
                    textShadow: '2px 2px 0px #000'
                  }}
                >
                  {power.name}
                </h3>
                <p 
                  className="text-white font-bold"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  {power.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t-8 border-yellow-400">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-4xl font-black text-yellow-400 mb-6"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            THE END?
          </h3>
          
          <div className="bg-gray-900 border-4 border-white p-6 mb-8 inline-block">
            <p className="text-lg mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Created with love for the Web-Head!
            </p>
            <p className="text-sm text-gray-400">
              Characters created by Stan Lee & Steve Ditko<br />
              © Marvel Comics
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <span className="bg-red-600 text-white px-4 py-2 border-2 border-white font-bold" style={{ fontFamily: 'Impact, sans-serif' }}>
              EXCELSIOR!
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <OriginSection />
      <VillainsSection />
      <TimelineSection />
      <PowersSection />
      <Footer />
    </div>
  )
}

