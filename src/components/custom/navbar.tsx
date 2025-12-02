"use client";

import Link from "next/link";
import { Menu, X, Trophy, Users, FileText, LogIn } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#10b981]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
              PIX CLUB PREMIUM
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/ganhadores"
              className="flex items-center gap-2 text-gray-300 hover:text-[#10b981] transition-colors"
            >
              <Trophy className="w-4 h-4" />
              Ganhadores
            </Link>
            <Link
              href="/regras"
              className="flex items-center gap-2 text-gray-300 hover:text-[#10b981] transition-colors"
            >
              <FileText className="w-4 h-4" />
              Regras
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 text-gray-300 hover:text-[#10b981] transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Entrar
            </Link>
            <Link
              href="/sorteio-gratis"
              className="px-6 py-2.5 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#10b981]/50 transition-all transform hover:scale-105"
            >
              Sorteio Grátis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-[#10b981]/20">
            <Link
              href="/ganhadores"
              className="flex items-center gap-2 text-gray-300 hover:text-[#10b981] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <Trophy className="w-4 h-4" />
              Ganhadores
            </Link>
            <Link
              href="/regras"
              className="flex items-center gap-2 text-gray-300 hover:text-[#10b981] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-4 h-4" />
              Regras
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 text-gray-300 hover:text-[#10b981] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="w-4 h-4" />
              Entrar
            </Link>
            <Link
              href="/sorteio-gratis"
              className="block text-center px-6 py-2.5 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Sorteio Grátis
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
