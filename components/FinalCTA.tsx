'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-slate-800 rounded-3xl p-12 md:p-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Pronto para ativar emissão de NFS-e no seu produto?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Fale com nosso time e receba um plano de integração alinhado ao seu cenário técnico e comercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contato@support.com.br"
              className="flex items-center justify-center border border-white/40 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Falar com especialista
            </a>
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
