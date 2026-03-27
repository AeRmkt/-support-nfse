'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">Support</span>
              <span className="text-[10px] tracking-widest text-gray-500 font-medium -mt-0.5">SOLUÇÕES INTELIGENTES</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Soluções</a>
            <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium cursor-pointer transition-colors">
              Empresa <ChevronDown size={16} />
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-gray-400 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="mailto:contato@support.com.br"
              className="flex items-center gap-2 gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Falar com Especialistas
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <a href="#beneficios" className="block text-gray-600 font-medium py-2" onClick={() => setIsOpen(false)}>Soluções</a>
          <a href="#" className="block text-gray-600 font-medium py-2">Empresa</a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2.5 rounded-full text-sm font-medium"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="mailto:contato@support.com.br"
              className="flex items-center justify-center gap-2 gradient-primary text-white px-4 py-2.5 rounded-full text-sm font-medium"
            >
              Falar com Especialistas
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
