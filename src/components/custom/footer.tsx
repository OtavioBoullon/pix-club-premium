"use client";

import Link from "next/link";
import { Trophy, Mail, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#10b981]/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
                PIX CLUB PREMIUM
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              O clube que paga PIX todo dia. Participe dos sorteios diários,
              semanais e mensais com total transparência e segurança.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#10b981]/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-[#10b981]/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/planos"
                  className="text-gray-400 hover:text-[#10b981] transition-colors text-sm"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="/ganhadores"
                  className="text-gray-400 hover:text-[#10b981] transition-colors text-sm"
                >
                  Ganhadores
                </Link>
              </li>
              <li>
                <Link
                  href="/regras"
                  className="text-gray-400 hover:text-[#10b981] transition-colors text-sm"
                >
                  Regras
                </Link>
              </li>
              <li>
                <Link
                  href="/painel"
                  className="text-gray-400 hover:text-[#10b981] transition-colors text-sm"
                >
                  Meu Painel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#10b981]" />
                contato@pixclubpremium.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#10b981]" />
                (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#10b981]/20 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © 2024 PIX CLUB PREMIUM. Todos os direitos reservados. | CNPJ:
            00.000.000/0001-00
          </p>
          <p className="mt-2 text-xs">
            Este site utiliza cookies para melhorar sua experiência. Ao
            continuar navegando, você concorda com nossa política de
            privacidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
