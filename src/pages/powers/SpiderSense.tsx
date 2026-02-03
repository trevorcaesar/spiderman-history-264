import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Zap, Eye, Shield } from 'lucide-react'

export default function SpiderSense() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-blue-900 overflow-x-hidden">
      {/* Spider-Sense Waves Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-20">
          <defs>
            <radialGradient id="spiderSense" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff0000" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ff6600" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0000ff" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="50%" cy="50%" r="30%" fill="url(#spiderSense)">
            <animate attributeName="r" values="30%;35%;30%" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#ff0000" strokeWidth="2" opacity="0.3">
            <animate attributeName="r" values="40%;45%;40%" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-white font-bold hover:text-yellow-300 transition-colors"
          style={{ fontFamily: 'Impact, sans-serif' }}
        >
          <ArrowLeft className="w-5 h-5" />
          BACK TO SPIDER-MAN
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Comic Title */}
            <div className="inline-block mb-8">
              <div className="bg-yellow-400 border-4 border-black px-8 py-4 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h1 
                  className="text-4xl md:text-7xl font-black tracking-tighter text-red-600"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  SPIDER-SENSE
                </h1>
              </div>
            </div>

            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              The ultimate early warning system. A sixth sense that tingles when danger approaches, giving Spider-Man the edge he needs to survive.
            </p>
          </motion.div>

          {/* Power Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-lg mx-auto mb-16"
          >
            <div className="aspect-square bg-gradient-to-br from-red-600 to-blue-600 border-4 border-white rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,0,0,0.5)] flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-center"
              >
                <Zap className="w-32 h-32 text-yellow-300 mx-auto" />
                <p className="text-white font-black text-2xl mt-4" style={{ fontFamily: 'Impact, sans-serif' }}>TINGLE!</p>
              </motion.div>
            </div>
            {/* Comic bursts */}
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-black"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-black font-black text-center text-xs" style={{ fontFamily: 'Impact, sans-serif' }}>
                DANGER!
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 px-4 py-8 bg-black border-y-4 border-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Zap, label: 'RANGE', value: '360°', color: 'text-yellow-400' },
              { icon: Eye, label: 'DETECTION', value: 'INSTANT', color: 'text-white' },
              { icon: Shield, label: 'RELIABILITY', value: '99.9%', color: 'text-green-400' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-gray-400 text-xs font-bold" style={{ fontFamily: 'Impact, sans-serif' }}>{stat.label}</p>
                <p className={`text-lg md:text-2xl font-black ${stat.color}`} style={{ fontFamily: 'Impact, sans-serif' }}>{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
          >
            <h2 
              className="text-3xl md:text-4xl font-black text-red-600 mb-6"
              style={{ fontFamily: 'Impact, sans-serif' }}>
              HOW IT WORKS
            </h2>
            <div className="space-y-4 text-gray-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              <p>
                The spider-sense is a precognitive ability that warns Spider-Man of impending danger. It's not just a feeling - it's a full sensory experience that manifests as a tingling sensation at the base of his skull.
              </p>
              <p>
                This ability operates on a subconscious level, detecting threats before they materialize. It can sense everything from incoming punches to hidden traps, gunfire to supervillain ambushes.
              </p>
              <p>
                Combined with his incredible reflexes, the spider-sense allows Spider-Man to dodge attacks he can't even see coming. It's his most valuable power - the one that's saved his life more times than any other.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'OMNIDIRECTIONAL', desc: 'Detects danger from all directions simultaneously' },
              { title: 'PRECOGNITIVE', desc: 'Warns of danger milliseconds before it strikes' },
              { title: 'AUTOMATIC', desc: 'Functions subconsciously without conscious thought' },
              { title: 'ENHANCED REFLEXES', desc: 'Works with superhuman speed to enable impossible dodges' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-blue-800 border-4 border-white p-6 hover:border-yellow-400 transition-colors"
              >
                <h3 
                  className="text-xl font-black text-white mb-2"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-blue-200" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 px-4 py-16 bg-red-700">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-4 border-yellow-400 p-8 bg-red-800"
          >
            <p 
              className="text-2xl md:text-4xl font-black text-yellow-400 italic"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              "MY SPIDER-SENSE IS TINGLING!"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 border-t-4 border-blue-800 bg-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/"
            className="inline-block bg-yellow-400 text-black px-8 py-4 font-black text-xl border-4 border-black hover:bg-yellow-300 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            RETURN TO SPIDER-MAN
          </Link>
        </div>
      </footer>
    </div>
  )
}

