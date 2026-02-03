import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Skull, Bomb, Zap } from 'lucide-react'

// Green Goblin themed page - Green and purple color scheme
export default function GreenGoblin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-purple-900">
      {/* Villain Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 font-bold transition-colors"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              <ArrowLeft className="w-5 h-5" />
              BACK TO HOME
            </Link>
          </motion.div>

          {/* Villain Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-purple-600 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] px-6 py-2 mb-4">
              <span className="text-white font-black text-lg tracking-widest" style={{ fontFamily: 'Impact, sans-serif' }}>
                ARCH-NEMESIS #1
              </span>
            </div>
            <h1 
              className="text-6xl md:text-8xl font-black text-white mb-4"
              style={{ 
                fontFamily: 'Impact, sans-serif',
                textShadow: '4px 4px 0px #7C3AED, 8px 8px 0px rgba(0,0,0,0.5)'
              }}
            >
              GREEN GOBLIN
            </h1>
            <p className="text-green-300 text-xl font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              "The Goblin is here to stay!"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Villain Image */}
            <div className="bg-gradient-to-br from-green-700 to-purple-800 border-4 border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden transform -rotate-2">
              <img 
                src="/images/green-goblin.png" 
                alt="Green Goblin"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Stats Card */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#7C3AED] p-6">
              <h3 
                className="text-3xl font-black text-purple-700 mb-4 flex items-center gap-3"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                <Skull className="w-8 h-8" />
                VILLAIN STATS
              </h3>
              
              <div className="space-y-3">
                {[
                  { label: 'Real Name', value: 'Norman Osborn' },
                  { label: 'First Appearance', value: 'Amazing Spider-Man #14 (1964)' },
                  { label: 'Intelligence', value: '★★★★★' },
                  { label: 'Strength', value: '★★★★☆' },
                  { label: 'Speed', value: '★★★★☆' },
                  { label: 'Durability', value: '★★★★☆' },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center border-b-2 border-purple-100 pb-2">
                    <span className="font-bold text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      {stat.label}
                    </span>
                    <span className="font-black text-purple-700" style={{ fontFamily: 'Impact, sans-serif' }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio & Powers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Bio */}
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#16A34A] p-6 transform rotate-1">
              <h3 
                className="text-3xl font-black text-green-600 mb-4"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                ORIGIN STORY
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Norman Osborn, the ruthless industrialist and father of Peter Parker's best friend Harry Osborn, 
                exposed himself to an experimental formula that enhanced his strength and intellect but drove him insane. 
                Adopting the persona of the Green Goblin, he became obsessed with destroying Spider-Man and dominating 
                the criminal underworld of New York City.
              </p>
              <p className="text-gray-800 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                The Goblin knows Spider-Man's secret identity, making him the most dangerous enemy Peter Parker has ever faced. 
                Their battles have cost Peter dearly, including the life of his beloved Gwen Stacy.
              </p>
            </div>

            {/* Powers & Equipment */}
            <div className="bg-gradient-to-br from-purple-600 to-green-600 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] p-6">
              <h3 
                className="text-3xl font-black text-white mb-6 flex items-center gap-3"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                <Bomb className="w-8 h-8" />
                GOBLIN ARSENAL
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: 'Pumpkin Bombs', desc: 'Explosive Jack-o\'-lantern grenades' },
                  { icon: Skull, title: 'Goblin Glider', desc: 'High-tech flying weapon platform' },
                  { icon: Zap, title: 'Razor Bats', desc: 'Spinning bladed projectiles' },
                  { icon: Bomb, title: 'Super Strength', desc: 'Enhanced by Goblin serum' },
                ].map((power, index) => (
                  <motion.div
                    key={power.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white/90 border-2 border-black p-4 rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <power.icon className="w-5 h-5 text-purple-600" />
                      <h4 
                        className="font-black text-purple-700"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                      >
                        {power.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      {power.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Notable Storylines */}
            <div className="bg-yellow-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transform -rotate-1">
              <h3 
                className="text-2xl font-black text-black mb-4"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                ICONIC BATTLES
              </h3>
              <ul className="space-y-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                {[
                  'The Night Gwen Stacy Died (Amazing Spider-Man #121)',
                  'The Goblin Returns (Amazing Spider-Man #136-137)',
                  'The Gathering of Five',
                  'Siege of Asgard',
                  'Dark Reign Saga',
                ].map((story) => (
                  <li key={story} className="flex items-start gap-2">
                    <span className="text-black font-bold mt-1">★</span>
                    <span className="text-black font-bold">{story}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

