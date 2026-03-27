'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MessageCircle, FileText, CheckCircle2, Clock, XCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">Gateway de Emissão de NFS-e</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Emissão de NFS-e integrada ao seu software
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Conecte seu sistema às prefeituras com rapidez, segurança e conformidade fiscal, sem precisar criar um módulo próprio do zero.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right column - Dashboard mockup */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex justify-center md:justify-end"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-gray-800 text-sm">Notas Fiscais</span>
                <span className="text-xs text-gray-400">Hoje, 14:32</span>
              </div>

              {/* Status badges */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="bg-green-50 border border-green-100 rounded-xl p-2.5 text-center">
                  <CheckCircle2 size={16} className="text-green-500 mx-auto mb-1" />
                  <div className="font-bold text-green-700 text-sm">425</div>
                  <div className="text-xs text-green-600">Emitido</div>
                </div>
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-2.5 text-center">
                  <Clock size={16} className="text-yellow-500 mx-auto mb-1" />
                  <div className="font-bold text-yellow-700 text-sm">230</div>
                  <div className="text-xs text-yellow-600">Pendente</div>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-xl p-2.5 text-center">
                  <XCircle size={16} className="text-red-400 mx-auto mb-1" />
                  <div className="font-bold text-red-600 text-sm">145</div>
                  <div className="text-xs text-red-500">Cancelado</div>
                </div>
              </div>

              {/* List items */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-blue-500" />
                    <div>
                      <div className="text-xs font-medium text-gray-800">NFS-e #001245</div>
                      <div className="text-[10px] text-gray-400">Consultor Digital Ltda</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Emitido</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-blue-500" />
                    <div>
                      <div className="text-xs font-medium text-gray-800">NFS-e #001246</div>
                      <div className="text-[10px] text-gray-400">Tech Solutions ME</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">Pendente</span>
                </div>
              </div>

              <button className="w-full gradient-primary text-white text-xs font-medium py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                Exportar XML selecionados
              </button>
            </div>
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
