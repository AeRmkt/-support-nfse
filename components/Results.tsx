'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { IconBarRevenue, IconUsers, IconRocket } from '@/components/icons/CustomIcons'

const results = [
  {
    icon: IconBarRevenue,
    title: 'Nova receita mensal',
    description: 'Crie planos por volume de emissão e aumente o ticket médio da sua base ativa.',
  },
  {
    icon: IconUsers,
    title: 'Maior retenção',
    description: 'Quando o cliente emite NFS-e no seu sistema, a dependência positiva aumenta e o churn tende a cair.',
  },
  {
    icon: IconRocket,
    title: 'Escala com segurança',
    description: 'Expanda para mais municípios sem sobrecarregar sua equipe técnica com burocracia fiscal.',
  },
]

export default function Results() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Resultado para seu negócio
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Adicione emissão fiscal no seu produto e transforme uma obrigação operacional em diferencial competitivo e receita recorrente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {results.map((result, i) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-colors"
            >
              <result.icon size={52} className="mb-4" />
              <h3 className="font-bold text-white text-lg mb-2">{result.title}</h3>
              <p className="text-slate-400 leading-relaxed">{result.description}</p>
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
            className="flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Falar com especialista
          </a>
          <a
            href="https://wa.me/55XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
