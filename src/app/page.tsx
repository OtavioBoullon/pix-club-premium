"use client";

import Link from "next/link";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import {
  Trophy,
  Zap,
  Shield,
  Users,
  CheckCircle,
  Clock,
  TrendingUp,
  Gift,
  Star,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
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

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#10b981]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#fbbf24]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full mb-6 animate-pulse">
              <Zap className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-sm font-medium text-[#10b981]">
                Mais de 10.000 membros ativos
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                O Clube que paga
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#10b981] via-[#059669] to-[#fbbf24] bg-clip-text text-transparent">
                PIX todo dia.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Participe dos sorteios diários, semanais e mensais com planos a
              partir de{" "}
              <span className="text-[#10b981] font-bold">R$ 14,90</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/sorteio-gratis"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Gift className="w-5 h-5" />
                Participar do Sorteio Grátis Agora
              </Link>
              <Link
                href="/planos"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-[#10b981]/30 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Ver Planos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-[#10b981]/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#10b981] mb-2">
                  10.000+
                </div>
                <div className="text-gray-400 text-sm">Membros Ativos</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-[#10b981]/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#fbbf24] mb-2">
                  R$ 250K+
                </div>
                <div className="text-gray-400 text-sm">PIX Pagos</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-[#10b981]/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#10b981] mb-2">
                  3x/dia
                </div>
                <div className="text-gray-400 text-sm">Sorteios Diários</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Como Funciona
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              4 passos simples para começar a ganhar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: Gift,
                title: "Cadastre-se Grátis",
                description:
                  "Faça seu cadastro e ganhe seu primeiro cupom gratuito para participar do sorteio",
              },
              {
                step: "2",
                icon: Trophy,
                title: "Escolha seu Plano",
                description:
                  "Selecione o plano ideal: Mensal, Trimestral ou Anual com mais cupons",
              },
              {
                step: "3",
                icon: Zap,
                title: "Receba Cupons Diários",
                description:
                  "Seus cupons são gerados automaticamente todos os dias no seu painel",
              },
              {
                step: "4",
                icon: TrendingUp,
                title: "Ganhe PIX",
                description:
                  "Acompanhe os sorteios e receba seu PIX direto na conta em minutos",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-b from-white/5 to-transparent border border-[#10b981]/20 rounded-2xl p-8 hover:border-[#10b981]/50 transition-all group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[#10b981]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Por que escolher o
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
                PIX CLUB PREMIUM?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Participação Diária",
                description:
                  "Cupons gerados automaticamente todos os dias. Você nunca perde um sorteio.",
              },
              {
                icon: Shield,
                title: "Sem Fidelidade",
                description:
                  "Cancele quando quiser. Sem taxas ocultas ou multas de cancelamento.",
              },
              {
                icon: CheckCircle,
                title: "Cupons Automáticos",
                description:
                  "Sistema inteligente gera seus cupons. Você só precisa acompanhar os resultados.",
              },
              {
                icon: Users,
                title: "Painel Completo",
                description:
                  "Acompanhe seus cupons, histórico de sorteios e ganhos em tempo real.",
              },
              {
                icon: Trophy,
                title: "Pagamento Seguro",
                description:
                  "PIX, cartão de crédito e boleto. Seus dados protegidos com criptografia.",
              },
              {
                icon: Star,
                title: "Suporte Dedicado",
                description:
                  "Equipe disponível via WhatsApp e e-mail para ajudar você sempre que precisar.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#10b981]/20 rounded-xl p-6 hover:bg-white/10 hover:border-[#10b981]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-[#10b981]" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                O que dizem nossos
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
                Ganhadores
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria S.",
                plan: "Plano Anual",
                amount: "R$ 500",
                text: "Ganhei R$ 500 no sorteio semanal! O pagamento caiu na hora. Recomendo demais!",
                rating: 5,
              },
              {
                name: "João P.",
                plan: "Plano Trimestral",
                amount: "R$ 150",
                text: "Já ganhei 3 vezes em 2 meses. O sistema é transparente e o suporte é excelente.",
                rating: 5,
              },
              {
                name: "Ana L.",
                plan: "Plano Mensal",
                amount: "R$ 50",
                text: "Comecei com o plano mensal e já ganhei! Vale muito a pena, é sério mesmo.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white/5 to-transparent border border-[#10b981]/20 rounded-xl p-6 hover:border-[#10b981]/50 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#10b981]/20">
                  <div>
                    <div className="font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.plan}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#10b981] font-bold text-lg">
                      {testimonial.amount}
                    </div>
                    <div className="text-xs text-gray-400">Ganhou</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contador Regressivo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/10 to-[#fbbf24]/10 animate-pulse pointer-events-none" />

            <div className="relative z-10">
              <Clock className="w-16 h-16 text-[#fbbf24] mx-auto mb-6" />
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Próximo Sorteio em:
              </h3>
              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                  <div className="text-4xl font-bold text-[#10b981]">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Horas</div>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                  <div className="text-4xl font-bold text-[#10b981]">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Minutos</div>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                  <div className="text-4xl font-bold text-[#10b981]">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Segundos</div>
                </div>
              </div>
              <Link
                href="/sorteio-gratis"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105"
              >
                <Gift className="w-5 h-5" />
                Garantir Minha Participação Grátis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pronto para começar a
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
              ganhar PIX todo dia?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Junte-se a mais de 10.000 membros que já estão ganhando
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sorteio-gratis"
              className="px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105"
            >
              Começar Agora Grátis
            </Link>
            <Link
              href="/planos"
              className="px-8 py-4 bg-white/5 border border-[#10b981]/30 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              Ver Todos os Planos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
