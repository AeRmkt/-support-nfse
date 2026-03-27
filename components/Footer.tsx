'use client'

import { Headphones, Globe, Share2, Link2 } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Col 1 */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-support.png"
                alt="NF Support Soluções Inteligentes"
                width={160}
                height={45}
                className="h-11 w-auto brightness-0 invert opacity-80"
              />
            </div>
            <h4 className="text-slate-400 font-semibold text-sm mb-3 uppercase tracking-wide">Acesso Rápido</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Suporte</a></li>
              <li><a href="#beneficios" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Soluções</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Empresa</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-slate-400 font-semibold text-sm mb-3 uppercase tracking-wide">Fale Conosco</h4>
            <div className="flex items-center gap-3 text-slate-400">
              <Headphones size={18} />
              <div>
                <div className="text-xs text-slate-500 mb-0.5">Comercial</div>
                <a href="tel:+55XXXXXXXXXXX" className="text-sm hover:text-slate-200 transition-colors">(XX) XXXX-XXXX</a>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs text-slate-500 mb-1">E-mail</div>
              <a href="mailto:contato@support.com.br" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">contato@support.com.br</a>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-slate-400 font-semibold text-sm mb-3 uppercase tracking-wide">Redes Sociais</h4>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: '#', label: 'Facebook' },
                { icon: Share2, href: '#', label: 'Instagram' },
                { icon: Link2, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-600 text-sm">
            © 2025 Support Soluções Inteligentes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
