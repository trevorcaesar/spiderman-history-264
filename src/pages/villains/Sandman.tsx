import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Wind, Mountain, Clock } from 'lucide-react'

export default function Sandman() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-orange-100 to-yellow-200 overflow-x-hidden">
      {/* Sand Texture Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="sand" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#d4a574" />
              <circle cx="12" cy="8" r="0.8" fill="#c49a6c" />
              <circle cx="8" cy="15" r="1.2" fill="#b8956a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sand)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-yellow-800 font-bold hover:text-yellow-600 transition-colors"
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
              <div className="bg-yellow-400 border-4 border-orange-600 px-8 py-4 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]">
                <h1 
                  className="text-5xl md:text-8xl font-black tracking-tighter text-orange-800"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  SANDMAN
                </h1>
              </div>
            </div>

            <p className="text-yellow-800 text-lg md:text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Flint Marko - The Shifting Menace. A man made of sand, impossible to catch, impossible to hold.
            </p>
          </motion.div>

          {/* Character Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative max-w-lg mx-auto mb-16"
          >
            <div className="aspect-[3/4] bg-gradient-to-b from-yellow-300 to-orange-400 border-4 border-orange-600 rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]">
              <img 
                src="/images/sandman.png" 
                alt="Sandman"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center">
                      <div class="text-center">
                        <div class="text-8xl mb-4">🏖️</div>
                        <p class="text-orange-800 font-bold">Sandman Image</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
            {/* Comic burst */}
            <motion.div 
              className="absolute -top-4 -right-4 w-28 h-28 bg-green-400 rounded-full flex items-center justify-center border-4 border-black"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-black font-black text-center text-sm" style={{ fontFamily: 'Impact, sans-serif' }}>
                SHAPE<br/>SHIFTER!
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 px-4 py-8 bg-orange-500 border-y-4 border-orange-700">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Wind, label: 'THREAT LEVEL', value: 'HIGH', color: 'text-yellow-200' },
              { icon: Mountain, label: 'ELEMENT', value: 'SAND', color: 'text-white' },
              { icon: Clock, label: 'FIRST APPEARANCE', value: '1963', color: 'text-yellow-100' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-orange-900 text-xs font-bold" style={{ fontFamily: 'Impact, sans-serif' }}>{stat.label}</p>
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
            className="bg-yellow-300 border-4 border-orange-600 p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(234,88,12,1)]"
          >
            <h2 
              className="text-3xl md:text-4xl font-black text-orange-800 mb-6"
              style={{ fontFamily: 'Impact, sans-serif' }}>
              FROM FLESH TO SAND
            </h2>
            <div className="space-y-4 text-orange-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              <p>
                William Baker, also known as Flint Marko, was a small-time crook who stumbled into a nuclear testing site while fleeing from prison. Caught in the blast, his molecules fused with the surrounding sand, transforming him into the incredible Sandman!
              </p>
              <p>
                Now he can transform his body into any shape, harden his fists into weapons, or slip through the smallest cracks. He can grow to giant size or scatter into a million grains to escape.
              </p>
              <p>
                Unlike many villains, Sandman isn't truly evil - he's just a guy trying to make a buck who keeps running into that wall-crawler!
              </p>
            </div>
          </motion.div>

          {/* Powers Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'SAND FORM', desc: 'Body composed of animated sand particles' },
              { title: 'SIZE SHIFTING', desc: 'Can grow to enormous heights or compress to sand grain size' },
              { title: 'SHAPE MORPHING', desc: 'Forms fists, hammers, maces, and any weapon from his body' },
              { title: 'SAND BLAST', desc: 'Fires high-velocity sand particles as projectiles' },
            ].map((power, i) => (
              <motion.div
                key={power.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-orange-100 border-4 border-orange-400 p-6 hover:border-orange-600 transition-colors shadow-[4px_4px_0px_0px_rgba(234,88,12,0.5)]"
              >
                <h3 
                  className="text-xl font-black text-orange-800 mb-2"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  {power.title}
                </h3>
                <p className="text-orange-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  {power.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 px-4 py-16 bg-orange-600">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-4 border-yellow-300 p-8 bg-orange-700"
          >
            <p 
              className="text-2xl md:text-4xl font-black text-yellow-300 italic"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              "I AIN'T NO MONSTER! I'M JUST A GUY WHO WANTS TO GET PAID!"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8 border-t-4 border-orange-400 bg-yellow-200">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/"
            className="inline-block bg-orange-500 text-white px-8 py-4 font-black text-xl border-4 border-orange-700 hover:bg-orange-600 transition-colors shadow-[4px_4px_0px_0px_rgba(234,88,12,1)]"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            RETURN TO SPIDER-MAN
          </Link>
        </div>
      </footer>
    </div>
  )
}

