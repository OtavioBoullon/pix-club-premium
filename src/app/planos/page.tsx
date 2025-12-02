"use client";

import Link from "next/link";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import {
  Check,
  Zap,
  Crown,
  Sparkles,
  TrendingUp,
  Gift,
  Star,
} from "lucide-react";

export default function Planos() {
  const plans = [
    {
      name: "Mensal",
      price: "14,90",
      period: "/mês",
      badge: null,
      icon: Zap,
      features: [
        "1 cupom por dia",
        "Acesso total aos sorteios",
        "Participa de todos sorteios diários",
        "Participa dos sorteios semanais",
        "Participa dos sorteios mensais",
        "Suporte via WhatsApp",
        "Painel completo",
        "Sem fidelidade",
      ],
      cta: "Assinar Mensal",
      href: "/checkout?plan=mensal",
      popular: false,
    },
    {
      name: "Trimestral",
      price: "79,00",
      period: "/3 meses",
      badge: "MELHOR CUSTO-BENEFÍCIO",
      icon: Crown,
      features: [
        "4 cupons por dia",
        "Acesso prioritário",
        "1 sorteio extra por mês",
        "Participa de todos sorteios",
        "Notificações em tempo real",
        "Suporte prioritário",
        "Painel completo",
        "Economia de 47%",
      ],
      cta: "Assinar Trimestral",
      href: "/checkout?plan=trimestral",
      popular: true,
    },
    {
      name: "Anual",
      price: "149,00",
      period: "/ano",
      badge: "MÁXIMO DE CUPONS",
      icon: Sparkles,
      features: [
        "6 cupons por dia",
        "12 sorteios especiais exclusivos",
        "Acesso VIP prioritário",
        "Participa de todos sorteios",
        "Notificações em tempo real",
        "Suporte VIP 24/7",
        "Painel completo",
        "Pagamento único - Economia de 75%",
      ],
      cta: "Assinar Anual",
      href: "/checkout?plan=anual",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#10b981]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#fbbf24]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-sm font-medium text-[#10b981]">
                Escolha o plano ideal para você
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Planos que
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
                Cabem no seu Bolso
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quanto mais cupons, maiores suas chances de ganhar PIX todo dia
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-b from-white/5 to-transparent border rounded-2xl p-8 hover:scale-105 transition-all ${
                  plan.popular
                    ? "border-[#fbbf24] shadow-2xl shadow-[#fbbf24]/20 lg:-mt-4 lg:mb-4"
                    : "border-[#10b981]/20"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full text-xs font-bold text-black">
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    plan.popular
                      ? "bg-gradient-to-br from-[#fbbf24]/20 to-[#f59e0b]/20"
                      : "bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20"
                  }`}
                >
                  <plan.icon
                    className={`w-8 h-8 ${
                      plan.popular ? "text-[#fbbf24]" : "text-[#10b981]"
                    }`}
                  />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-lg">R$</span>
                    <span
                      className={`text-5xl font-bold ${
                        plan.popular ? "text-[#fbbf24]" : "text-[#10b981]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-[#fbbf24]" : "text-[#10b981]"
                        }`}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.href}
                  className={`block w-full px-6 py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-black hover:shadow-2xl hover:shadow-[#fbbf24]/50"
                      : "bg-gradient-to-r from-[#10b981] to-[#059669] text-white hover:shadow-2xl hover:shadow-[#10b981]/50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white/5 backdrop-blur-sm border border-[#10b981]/20 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Compare os Planos
              </span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#10b981]/20">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">
                      Benefício
                    </th>
                    <th className="text-center py-4 px-4 text-white font-bold">
                      Mensal
                    </th>
                    <th className="text-center py-4 px-4 text-[#fbbf24] font-bold">
                      Trimestral
                    </th>
                    <th className="text-center py-4 px-4 text-white font-bold">
                      Anual
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Cupons por dia",
                      mensal: "1",
                      trimestral: "4",
                      anual: "6",
                    },
                    {
                      feature: "Sorteios diários",
                      mensal: "✓",
                      trimestral: "✓",
                      anual: "✓",
                    },
                    {
                      feature: "Sorteios semanais",
                      mensal: "✓",
                      trimestral: "✓",
                      anual: "✓",
                    },
                    {
                      feature: "Sorteios mensais",
                      mensal: "✓",
                      trimestral: "✓",
                      anual: "✓",
                    },
                    {
                      feature: "Sorteios extras",
                      mensal: "-",
                      trimestral: "1/mês",
                      anual: "12/ano",
                    },
                    {
                      feature: "Suporte",
                      mensal: "Padrão",
                      trimestral: "Prioritário",
                      anual: "VIP 24/7",
                    },
                    {
                      feature: "Economia",
                      mensal: "-",
                      trimestral: "47%",
                      anual: "75%",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#10b981]/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-300">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-center text-white">
                        {row.mensal}
                      </td>
                      <td className="py-4 px-4 text-center text-[#fbbf24] font-semibold">
                        {row.trimestral}
                      </td>
                      <td className="py-4 px-4 text-center text-white">
                        {row.anual}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Perguntas Frequentes
              </span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Posso cancelar a qualquer momento?",
                  a: "Sim! Todos os planos são sem fidelidade. Você pode cancelar quando quiser sem multas.",
                },
                {
                  q: "Como recebo meus cupons?",
                  a: "Os cupons são gerados automaticamente todos os dias no seu painel. Você não precisa fazer nada.",
                },
                {
                  q: "Quando recebo o PIX se ganhar?",
                  a: "O pagamento é feito em até 24 horas após o sorteio, direto na sua conta.",
                },
                {
                  q: "Posso mudar de plano depois?",
                  a: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6"
                >
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Ainda tem dúvidas? Experimente grátis primeiro!
            </p>
            <Link
              href="/sorteio-gratis"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-[#10b981]/30 rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              <Gift className="w-5 h-5" />
              Participar do Sorteio Grátis
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
