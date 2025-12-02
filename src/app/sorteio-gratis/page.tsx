"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import { Gift, Clock, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function SorteioGratis() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Aqui você integraria com sua API
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
                Parabéns! Você está participando!
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Seu cupom grátis foi gerado com sucesso. O sorteio acontece hoje
              às 20h.
            </p>
            <div className="bg-white/5 border border-[#10b981]/30 rounded-xl p-6 mb-8">
              <div className="text-sm text-gray-400 mb-2">Seu cupom:</div>
              <div className="text-3xl font-bold text-[#10b981] font-mono">
                #{Math.floor(Math.random() * 1000000)
                  .toString()
                  .padStart(6, "0")}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Para receber cupons diários e aumentar suas chances de ganhar,
                escolha um plano:
              </p>
              <Link
                href="/planos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105"
              >
                Ver Planos e Aumentar Minhas Chances
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#10b981]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-sm font-medium text-[#10b981]">
                100% Grátis - Sem Compromisso
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ganhe seu
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
                Cupom Grátis
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Participe do sorteio diário sem pagar nada. Seu primeiro cupom é
              totalmente grátis!
            </p>
          </div>

          {/* Countdown */}
          <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Clock className="w-6 h-6 text-[#fbbf24]" />
              <h3 className="text-xl font-bold text-white">
                Sorteio de Hoje em:
              </h3>
            </div>
            <div className="flex justify-center gap-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 min-w-[70px]">
                <div className="text-3xl font-bold text-[#10b981]">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400 mt-1">Horas</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 min-w-[70px]">
                <div className="text-3xl font-bold text-[#10b981]">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400 mt-1">Min</div>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 min-w-[70px]">
                <div className="text-3xl font-bold text-[#10b981]">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400 mt-1">Seg</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#10b981]/20 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Gift className="w-8 h-8 text-[#10b981]" />
              <h2 className="text-2xl font-bold text-white">
                Preencha seus dados
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl p-4">
                <p className="text-sm text-gray-300 text-center">
                  ✨ Seu primeiro cupom é{" "}
                  <span className="text-[#10b981] font-bold">
                    totalmente grátis
                  </span>
                  . Sem taxas, sem compromisso.
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Gift className="w-5 h-5" />
                Garantir Meu Cupom Grátis Agora
              </button>

              <p className="text-xs text-gray-400 text-center">
                Ao continuar, você concorda com nossos{" "}
                <Link href="/regras" className="text-[#10b981] hover:underline">
                  Termos de Uso
                </Link>
              </p>
            </form>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: Gift,
                title: "100% Grátis",
                description: "Sem custos ocultos",
              },
              {
                icon: CheckCircle,
                title: "Sem Compromisso",
                description: "Cancele quando quiser",
              },
              {
                icon: Clock,
                title: "Sorteio Hoje",
                description: "Resultado às 20h",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 border border-[#10b981]/20 rounded-xl p-4 text-center"
              >
                <benefit.icon className="w-8 h-8 text-[#10b981] mx-auto mb-2" />
                <div className="font-semibold text-white mb-1">
                  {benefit.title}
                </div>
                <div className="text-sm text-gray-400">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
