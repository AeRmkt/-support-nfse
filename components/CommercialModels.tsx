'use client'

import { motion } from 'framer-motion'
import { Package, Star, BarChart, MessageCircle, ArrowRight } from 'lucide-react'

const models = [
  {
    icon: Package,
    title: 'Plano por pacote',
    description: 'Venda lotes mensais de emissão (ex.: 100, 500, 2.000 notas) e escale receita com previsibilidade.',
  },
  {
    icon: Star,
    title: 'Plano premium',
    description: 'Inclua emissão de NFS-e em planos avançados para aumentar percepção de valor e margem.',
  },
  {
    icon: BarChart,
    title: 'Plano por uso',
    description: 'Cobrança por volume real emitido para equilibrar custo e valor entregue por cliente.',
  },
]

export default function CommercialModels() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Modelos para vender NFS-e no seu SaaS
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Escolha a estratégia comercial ideal para seu produto e acelere o go-to-market com apoio técnico especializado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 gradient-primary rounded-xl mb-4">
                <model.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{model.title}</h3>
              <p className="text-gray-500 leading-relaxed">{model.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="mailto:contato@support.com.br"
            className="flex items-center justify-center gradient-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Montar plano com especialista
          </a>
          <a
            href="https://wa.me/55XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Receber proposta no WhatsApp
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
