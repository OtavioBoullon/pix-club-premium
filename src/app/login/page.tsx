"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import { LogIn, Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com sua API de autenticação
    window.location.href = "/painel";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#10b981]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {isLogin ? "Bem-vindo de volta!" : "Criar Conta"}
              </span>
            </h1>
            <p className="text-gray-400">
              {isLogin
                ? "Entre para acessar seu painel"
                : "Cadastre-se e comece a ganhar"}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#10b981]/20 rounded-2xl p-8">
            {/* Toggle Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-8 p-1 bg-black/30 rounded-xl">
              <button
                onClick={() => setIsLogin(true)}
                className={`py-3 rounded-lg font-semibold transition-all ${
                  isLogin
                    ? "bg-gradient-to-r from-[#10b981] to-[#059669] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`py-3 rounded-lg font-semibold transition-all ${
                  !isLogin
                    ? "bg-gradient-to-r from-[#10b981] to-[#059669] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Cadastrar
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome (apenas cadastro) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                    placeholder="Digite seu nome completo"
                  />
                </div>
              )}

              {/* WhatsApp (apenas cadastro) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full pl-12 pr-12 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password (apenas login) */}
              {isLogin && (
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-[#10b981] hover:underline"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              )}

              {/* Terms (apenas cadastro) */}
              {!isLogin && (
                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-4">
                  <p className="text-xs text-gray-300 text-center">
                    Ao criar uma conta, você concorda com nossos{" "}
                    <Link
                      href="/regras"
                      className="text-[#10b981] hover:underline"
                    >
                      Termos de Uso
                    </Link>{" "}
                    e{" "}
                    <a href="#" className="text-[#10b981] hover:underline">
                      Política de Privacidade
                    </a>
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {isLogin ? (
                  <>
                    <LogIn className="w-5 h-5" />
                    Entrar
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    Criar Conta
                  </>
                )}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#10b981]/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#0a0a0a] text-gray-400">
                    Ou continue com
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-[#10b981]/20 rounded-xl hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-sm font-medium">Google</span>
                </button>

                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-[#10b981]/20 rounded-xl hover:bg-white/10 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>
            </div>
          </div>

          {/* Free Trial CTA */}
          {!isLogin && (
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">
                Quer experimentar antes de criar conta?
              </p>
              <Link
                href="/sorteio-gratis"
                className="inline-flex items-center gap-2 text-[#10b981] hover:underline font-semibold"
              >
                Participar do Sorteio Grátis
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
