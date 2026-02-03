import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Cog, Cpu, Shield } from 'lucide-react'

// Doctor Octopus themed page - Orange/amber industrial tech theme
export default function DoctorOctopus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-900 to-slate-800">
      {/* Villain Header */}
      <div className="relative overflow-hidden">
        {/* Mechanical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold transition-colors"
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
            <div className="inline-block bg-amber-600 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] px-6 py-2 mb-4">
              <span className="text-white font-black text-lg tracking-widest" style={{ fontFamily: 'Impact, sans-serif' }}>
                MASTER PLANNER
              </span>
            </div>
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-4"
              style={{ 
                fontFamily: 'Impact, sans-serif',
                textShadow: '4px 4px 0px #D97706, 8px 8px 0px rgba(0,0,0,0.5)'
              }}
            >
              DOCTOR OCTOPUS
            </h1>
            <p className="text-amber-400 text-xl font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              "I am the supreme intellect! I am Doctor Octopus!"
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Villain Image */}
            <div className="bg-gradient-to-br from-amber-800 to-slate-800 border-4 border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden">
              <img 
                src="/images/doctor-octopus.png" 
                alt="Doctor Octopus"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Stats Card */}
            <div className="bg-slate-800 border-4 border-amber-500 shadow-[8px_8px_0px_0px_#D97706] p-6">
              <h3 
                className="text-3xl font-black text-amber-500 mb-4 flex items-center gap-3"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                <Cpu className="w-8 h-8" />
                VILLAIN STATS
              </h3>
              
              <div className="space-y-3">
                {[
                  { label: 'Real Name', value: 'Dr. Otto Octavius' },
                  { label: 'First Appearance', value: 'Amazing Spider-Man #3 (1963)' },
                  { label: 'Intelligence', value: '★★★★★' },
                  { label: 'Strength', value: '★★★★☆' },
                  { label: 'Speed', value: '★★★☆☆' },
                  { label: 'Durability', value: '★★★☆☆' },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center border-b-2 border-slate-700 pb-2">
                    <span className="font-bold text-amber-200" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      {stat.label}
                    </span>
                    <span className="font-black text-amber-400" style={{ fontFamily: 'Impact, sans-serif' }}>
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
            <div className="bg-slate-800 border-4 border-amber-500 shadow-[8px_8px_0px_0px_#D97706] p-6">
              <h3 
                className="text-3xl font-black text-amber-500 mb-4"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                ORIGIN STORY
              </h3>
              <p className="text-slate-200 leading-relaxed mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Dr. Otto Octavius was a brilliant nuclear physicist who created a set of mechanical arms 
                to handle radioactive materials safely. During an experiment, an explosion fused the 
                mechanical arms to his body and damaged his brain, transforming him into the villainous 
                Doctor Octopus.
              </p>
              <p className="text-slate-200 leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Doc Ock is one of Spider-Man's most persistent foes, having formed the original Sinister 
                Six and even temporarily taken over Spider-Man's body as the Superior Spider-Man. His 
                genius-level intellect and mechanical arms make him a formidable adversary.
              </p>
            </div>

            {/* Powers & Equipment */}
            <div className="bg-gradient-to-br from-amber-600 to-slate-700 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] p-6">
              <h3 
                className="text-3xl font-black text-white mb-6 flex items-center gap-3"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                <Cog className="w-8 h-8" />
                MECHANICAL ARMS
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Super Strength', desc: 'Each arm can lift 8 tons' },
                  { title: 'Precision Control', desc: 'Neural interface allows perfect control' },
                  { title: 'Extendable Reach', desc: 'Arms extend up to 24 feet' },
                  { title: 'Adamantium Tips', desc: 'Nearly indestructible pincers' },
                  { title: '360° Mobility', desc: 'Arms move independently in all directions' },
                  { title: 'Genius Intellect', desc: 'Expert in nuclear physics & robotics' },
                ].map((power, index) => (
                  <motion.div
                    key={power.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-slate-900/90 border-2 border-amber-400 p-4 rounded-lg"
                  >
                    <h4 
                      className="font-black text-amber-400 mb-1"
                      style={{ fontFamily: 'Impact, sans-serif' }}
                    >
                      {power.title}
                    </h4>
                    <p className="text-sm text-slate-300" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      {power.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Notable Storylines */}
            <div className="bg-amber-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 
                className="text-2xl font-black text-black mb-4"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                GREATEST SCHEMES
              </h3>
              <ul className="space-y-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                {[
                  'The Sinister Six (Amazing Spider-Man Annual #1)',
                  'If This Be My Destiny... (Amazing Spider-Man #31-33)',
                  'The Superior Spider-Man Saga',
                  'Ends of the Earth',
                  'Spider-Verse',
                ].map((story) => (
                  <li key={story} className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
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

