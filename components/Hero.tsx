'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">Gateway de Emissão de NFS-e</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5">
              Emissão de NFS-e integrada ao seu software
            </h1>
            <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed">
              Conecte seu sistema às prefeituras com rapidez, segurança e conformidade fiscal, sem precisar criar um módulo próprio do zero.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="mailto:contato@support.com.br"
                className="flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Fale conosco
              </a>
              <a
                href="#beneficios"
                className="flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Ver benefícios
                <ChevronDown size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right column - Product image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex justify-center md:justify-end mt-4 md:mt-0"
          >
            <Image
              src="/hero-dashboard.png"
              alt="Dashboard NF Support"
              width={720}
              height={540}
              className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white/40" />
        </motion.div>
      </div>
    </section>
  )
}
