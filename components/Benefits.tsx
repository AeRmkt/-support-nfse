'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, MessageCircle } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Integração rápida',
    description: 'Em poucos dias seu sistema já pode emitir notas, sem criar módulo fiscal interno e sem ampliar equipe técnica.',
  },
  {
    icon: Shield,
    title: 'Conformidade contínua',
    description: 'Regras fiscais, mudanças de layout e exigências técnicas são atualizadas no gateway para reduzir risco operacional.',
  },
  {
    icon: TrendingUp,
    title: 'Receita recorrente',
    description: 'Monetize por volume de emissão, aumente ticket médio e fortaleça retenção ao centralizar a jornada fiscal no seu sistema.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Benefícios para software houses e plataformas SaaS
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Integre emissão de NFS-e com escala, reduza custos operacionais e gere novas fontes de receita recorrente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mb-4">
                <benefit.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:contato@support.com.br"
            className="flex items-center justify-center gradient-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Falar com especialista
          </a>
          <a
            href="https://wa.me/55XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-gray-400 transition-colors"
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
