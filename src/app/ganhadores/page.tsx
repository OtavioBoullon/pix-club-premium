"use client";

import { useState } from "react";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import { Trophy, Calendar, CheckCircle, Image as ImageIcon } from "lucide-react";

export default function Ganhadores() {
  const [filter, setFilter] = useState<"todos" | "diario" | "semanal" | "mensal">("todos");

  const winners = [
    {
      name: "Maria S.",
      amount: "R$ 5.000,00",
      date: "15/05/2024",
      type: "Mensal",
      cupom: "#123456",
      proof: true,
    },
    {
      name: "João P.",
      amount: "R$ 500,00",
      date: "14/05/2024",
      type: "Semanal",
      cupom: "#789012",
      proof: true,
    },
    {
      name: "Ana L.",
      amount: "R$ 200,00",
      date: "13/05/2024",
      type: "Semanal",
      cupom: "#345678",
      proof: true,
    },
    {
      name: "Carlos M.",
      amount: "R$ 150,00",
      date: "13/05/2024",
      type: "Diário",
      cupom: "#901234",
      proof: true,
    },
    {
      name: "Fernanda R.",
      amount: "R$ 50,00",
      date: "12/05/2024",
      type: "Diário",
      cupom: "#567890",
      proof: true,
    },
    {
      name: "Roberto S.",
      amount: "R$ 50,00",
      date: "12/05/2024",
      type: "Diário",
      cupom: "#234567",
      proof: true,
    },
    {
      name: "Juliana F.",
      amount: "R$ 500,00",
      date: "11/05/2024",
      type: "Semanal",
      cupom: "#890123",
      proof: true,
    },
    {
      name: "Pedro H.",
      amount: "R$ 50,00",
      date: "11/05/2024",
      type: "Diário",
      cupom: "#456789",
      proof: true,
    },
    {
      name: "Camila T.",
      amount: "R$ 150,00",
      date: "10/05/2024",
      type: "Diário",
      cupom: "#012345",
      proof: true,
    },
    {
      name: "Lucas B.",
      amount: "R$ 50,00",
      date: "10/05/2024",
      type: "Diário",
      cupom: "#678901",
      proof: true,
    },
    {
      name: "Patricia G.",
      amount: "R$ 500,00",
      date: "07/05/2024",
      type: "Semanal",
      cupom: "#234568",
      proof: true,
    },
    {
      name: "Ricardo N.",
      amount: "R$ 50,00",
      date: "06/05/2024",
      type: "Diário",
      cupom: "#890124",
      proof: true,
    },
  ];

  const filteredWinners = winners.filter((winner) => {
    if (filter === "todos") return true;
    return winner.type.toLowerCase() === filter;
  });

  const stats = {
    total: winners.length,
    totalPaid: "R$ 250.000+",
    thisMonth: 47,
    thisWeek: 12,
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-sm font-medium text-[#10b981]">
                Transparência Total
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Nossos
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
                Ganhadores
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Veja quem está ganhando PIX todo dia. Todos os resultados são
              públicos e verificáveis.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#10b981] mb-2">
                {stats.total}
              </div>
              <div className="text-sm text-gray-400">Ganhadores Totais</div>
            </div>
            <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#fbbf24] mb-2">
                {stats.totalPaid}
              </div>
              <div className="text-sm text-gray-400">PIX Pagos</div>
            </div>
            <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#10b981] mb-2">
                {stats.thisMonth}
              </div>
              <div className="text-sm text-gray-400">Este Mês</div>
            </div>
            <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-[#10b981] mb-2">
                {stats.thisWeek}
              </div>
              <div className="text-sm text-gray-400">Esta Semana</div>
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { key: "todos", label: "Todos" },
              { key: "mensal", label: "Mensal" },
              { key: "semanal", label: "Semanal" },
              { key: "diario", label: "Diário" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key as any)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  filter === item.key
                    ? "bg-gradient-to-r from-[#10b981] to-[#059669] text-white shadow-lg shadow-[#10b981]/50"
                    : "bg-white/5 border border-[#10b981]/20 text-gray-300 hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Winners List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWinners.map((winner, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white/5 to-transparent border border-[#10b981]/20 rounded-xl p-6 hover:border-[#10b981]/50 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-[#fbbf24]" />
                      <span className="font-bold text-white text-lg">
                        {winner.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {winner.date}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      winner.type === "Mensal"
                        ? "bg-[#fbbf24]/20 text-[#fbbf24]"
                        : winner.type === "Semanal"
                        ? "bg-[#10b981]/20 text-[#10b981]"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {winner.type}
                  </span>
                </div>

                {/* Amount */}
                <div className="bg-black/30 border border-[#10b981]/20 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-400 mb-1">Prêmio</div>
                  <div className="text-2xl font-bold text-[#10b981]">
                    {winner.amount}
                  </div>
                </div>

                {/* Cupom */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Cupom:</span>
                  <span className="font-mono text-white font-semibold">
                    {winner.cupom}
                  </span>
                </div>

                {/* Proof */}
                {winner.proof && (
                  <div className="flex items-center gap-2 p-3 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#10b981]">
                        Comprovante Verificado
                      </div>
                      <div className="text-xs text-gray-400">
                        Pagamento confirmado
                      </div>
                    </div>
                    <ImageIcon className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
              <Trophy className="w-16 h-16 text-[#fbbf24] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Seja o Próximo Ganhador!
              </h2>
              <p className="text-gray-300 mb-6">
                Junte-se a centenas de pessoas que já receberam PIX através do
                nosso clube
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/sorteio-gratis"
                  className="px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105"
                >
                  Participar Grátis Agora
                </a>
                <a
                  href="/planos"
                  className="px-8 py-4 bg-white/5 border border-[#10b981]/30 rounded-xl font-bold hover:bg-white/10 transition-all"
                >
                  Ver Planos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
