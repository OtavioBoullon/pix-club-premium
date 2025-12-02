"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import {
  CreditCard,
  Shield,
  CheckCircle,
  Lock,
  ArrowLeft,
  Zap,
} from "lucide-react";

export default function Checkout() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") || "mensal";

  const [selectedPlan, setSelectedPlan] = useState(planParam);
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [processing, setProcessing] = useState(false);

  const plans = {
    mensal: {
      name: "Plano Mensal",
      price: "14,90",
      cupons: "1 cupom por dia",
      features: ["Acesso total", "Todos os sorteios", "Sem fidelidade"],
    },
    trimestral: {
      name: "Plano Trimestral",
      price: "79,00",
      cupons: "4 cupons por dia",
      features: [
        "Acesso prioritário",
        "1 sorteio extra/mês",
        "Economia de 47%",
      ],
    },
    anual: {
      name: "Plano Anual",
      price: "149,00",
      cupons: "6 cupons por dia",
      features: [
        "12 sorteios especiais",
        "Suporte VIP",
        "Economia de 75%",
      ],
    },
  };

  const currentPlan =
    plans[selectedPlan as keyof typeof plans] || plans.mensal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Aqui você integraria com sua API de pagamento
    setTimeout(() => {
      window.location.href = "/painel";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/planos"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#10b981] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para planos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Order Summary */}
            <div>
              <h1 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Resumo do Pedido
                </span>
              </h1>

              {/* Plan Selection */}
              <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6 mb-6">
                <h2 className="font-semibold text-white mb-4">
                  Selecione seu plano:
                </h2>
                <div className="space-y-3">
                  {Object.entries(plans).map(([key, plan]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPlan(key)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        selectedPlan === key
                          ? "border-[#10b981] bg-[#10b981]/10"
                          : "border-[#10b981]/20 hover:border-[#10b981]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white">
                            {plan.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {plan.cupons}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#10b981]">
                            R$ {plan.price}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Plan Details */}
              <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-white mb-4">
                  O que está incluído:
                </h3>
                <ul className="space-y-3">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantee */}
              <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-[#10b981] flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">
                      Garantia de 7 dias
                    </h3>
                    <p className="text-sm text-gray-400">
                      Se não ficar satisfeito, devolvemos 100% do seu dinheiro
                      em até 7 dias. Sem perguntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Pagamento
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method Selection */}
                <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-4">
                    Método de pagamento:
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("pix")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === "pix"
                          ? "border-[#10b981] bg-[#10b981]/10"
                          : "border-[#10b981]/20 hover:border-[#10b981]/50"
                      }`}
                    >
                      <Zap className="w-8 h-8 text-[#10b981] mx-auto mb-2" />
                      <div className="font-semibold text-white text-sm">
                        PIX
                      </div>
                      <div className="text-xs text-gray-400">Instantâneo</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === "card"
                          ? "border-[#10b981] bg-[#10b981]/10"
                          : "border-[#10b981]/20 hover:border-[#10b981]/50"
                      }`}
                    >
                      <CreditCard className="w-8 h-8 text-[#10b981] mx-auto mb-2" />
                      <div className="font-semibold text-white text-sm">
                        Cartão
                      </div>
                      <div className="text-xs text-gray-400">Crédito</div>
                    </button>
                  </div>
                </div>

                {/* PIX Payment */}
                {paymentMethod === "pix" && (
                  <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
                    <div className="text-center">
                      <Zap className="w-16 h-16 text-[#10b981] mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">
                        Pagamento via PIX
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        Após confirmar, você receberá o QR Code para pagamento
                        instantâneo
                      </p>
                      <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-4">
                        <p className="text-sm text-[#10b981] font-semibold">
                          ✓ Aprovação instantânea
                        </p>
                        <p className="text-sm text-[#10b981] font-semibold">
                          ✓ Acesso imediato ao painel
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Payment */}
                {paymentMethod === "card" && (
                  <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nome no Cartão
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nome como está no cartão"
                        className="w-full px-4 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Validade
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/AA"
                          className="w-full px-4 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          className="w-full px-4 py-3 bg-black/50 border border-[#10b981]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-300">Subtotal:</span>
                    <span className="text-white font-semibold">
                      R$ {currentPlan.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#10b981]/30">
                    <span className="text-white font-bold text-lg">Total:</span>
                    <span className="text-[#10b981] font-bold text-2xl">
                      R$ {currentPlan.price}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {processing ? (
                    <>Processando...</>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Finalizar Pagamento Seguro
                    </>
                  )}
                </button>

                {/* Security Info */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-[#10b981]" />
                  <span>Pagamento 100% seguro e criptografado</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
