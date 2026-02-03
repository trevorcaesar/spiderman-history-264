import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Skull, Zap, AlertTriangle } from 'lucide-react'

export default function Venom() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-x-hidden">
      {/* Dark Web Pattern Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="web" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="#1a1a2e" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="2" fill="#16213e" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#web)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-white font-bold hover:text-white/80 transition-colors"
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
              <div className="bg-black border-4 border-white px-8 py-4 transform -rotate-2 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <h1 
                  className="text-5xl md:text-8xl font-black tracking-tighter text-white"
                  style={{ 
                    fontFamily: 'Impact, sans-serif',
                    textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)'
                  }}
                >
                  VENOM
                </h1>
              </div>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Eddie Brock bonded with an alien symbiote. Together they are Spider-Man's deadliest foe - and his darkest reflection.
            </p>
          </motion.div>

          {/* Character Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-lg mx-auto mb-16"
          >
            <div className="aspect-[3/4] bg-gradient-to-b from-gray-800 to-black border-4 border-white rounded-lg overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <img 
                src="/images/venom.png" 
                alt="Venom"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <div class="text-center text-white">
                        <div class="text-8xl mb-4">🕷️</div>
                        <p class="font-bold">Venom Image</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
            {/* Comic burst */}
            <motion.div 
              className="absolute -top-4 -right-4 w-28 h-28 bg-white rounded-full flex items-center justify-center border-4 border-black"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-black font-black text-center text-sm" style={{ fontFamily: 'Impact, sans-serif' }}>
                WE ARE<br/>VENOM!
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
              { icon: Skull, label: 'THREAT LEVEL', value: 'EXTREME', color: 'text-red-500' },
              { icon: Zap, label: 'ORIGIN', value: 'ALIEN', color: 'text-white' },
              { icon: AlertTriangle, label: 'FIRST APPEARANCE', value: '1988', color: 'text-gray-400' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-gray-500 text-xs font-bold" style={{ fontFamily: 'Impact, sans-serif' }}>{stat.label}</p>
                <p className={`text-lg md:text-2xl font-black ${stat.color}`} style={{ fontFamily: 'Impact, sans-serif' }}>{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 border-4 border-white p-8 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <h2 
              className="text-3xl md:text-4xl font-black text-white mb-6"
              style={{ fontFamily: 'Impact, sans-serif' }}>
              THE SYMBIOTE SAGA
            </h2>
            <div className="space-y-4 text-gray-300" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              <p>
                The alien symbiote first bonded with Spider-Man during the Secret Wars, enhancing his powers but slowly corrupting his mind. When Peter rejected it, the symbiote found a new host in Eddie Brock - a disgraced journalist who blamed Spider-Man for his ruined career.
              </p>
              <p>
                Together, they became Venom - bigger, stronger, and faster than Spider-Man. They know all his secrets, including his true identity. They hate him with a passion that burns hotter than any other enemy.
              </p>
              <p>
                Venom is not just a villain - he's a dark mirror showing what Spider-Man could become. A predator. A monster. A lethal protector with no limits.
              </p>
            </div>
          </motion.div>

          {/* Powers Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'SYMBIOTE SUIT', desc: 'Living costume that enhances all abilities' },
              { title: 'SHAPE SHIFTING', desc: 'Can form tendrils, blades, and any weapon from the symbiote' },
              { title: 'SPIDER-SENSE BLOCK', desc: 'Invisible to Spider-Man\'s danger sense' },
              { title: 'CAMOUFLAGE', desc: 'Can blend into shadows and become nearly invisible' },
            ].map((power, i) => (
              <motion.div
                key={power.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900 border-4 border-gray-700 p-6 hover:border-white transition-colors"
              >
                <h3 
                  className="text-xl font-black text-white mb-2"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  {power.title}
                </h3>
                <p className="text-gray-400" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {power.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 px-4 py-16 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-4 border-white p-8"
          >
            <p 
              className="text-2xl md:text-4xl font-black text-white italic"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              "WE ARE VENOM. YOU ARE OURS."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 border-t-4 border-gray-800 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/"
            className="inline-block bg-white text-black px-8 py-4 font-black text-xl border-4 border-gray-600 hover:bg-gray-200 transition-colors"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            RETURN TO SPIDER-MAN
          </Link>
        </div>
      </footer>
    </div>
  )
}

