'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-primary rounded-2xl p-8 text-white"
          >
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Emissão automática, sem complicação técnica
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Seu cliente emite no próprio sistema. O gateway processa, valida e envia para os padrões municipais com rastreabilidade e segurança.
            </p>
            <div className="space-y-4">
              {[
                'Integração pronta para escalar',
                'Homologações e mudanças sob gestão contínua',
                'Maior valor percebido para o seu produto',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-white/90 flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Flow illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <h3 className="text-gray-600 text-sm font-medium tracking-wide uppercase mb-2">Fluxo de emissão</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              {/* Step 1 */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center w-full">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="font-semibold text-gray-800 text-sm mb-1">Seu Sistema</div>
                <div className="text-xs text-gray-500">Solicita emissão de NFS-e</div>
              </div>

              <ArrowRight size={24} className="text-gray-300 flex-shrink-0 rotate-90 sm:rotate-0" />

              {/* Step 2 */}
              <div className="flex-1 bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 rounded-2xl p-5 shadow-sm text-center w-full">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="font-semibold text-gray-800 text-sm mb-1">Support Gateway</div>
                <div className="text-xs text-gray-500">Processa e valida os dados</div>
              </div>

              <ArrowRight size={24} className="text-gray-300 flex-shrink-0 rotate-90 sm:rotate-0" />

              {/* Step 3 */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center w-full">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="font-semibold text-gray-800 text-sm mb-1">Prefeitura</div>
                <div className="text-xs text-gray-500">Recebe e autoriza a nota</div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-4">
              Rastreabilidade completa em cada etapa da emissão
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
