"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import {
  Trophy,
  Calendar,
  TrendingUp,
  Clock,
  Zap,
  Crown,
  LogOut,
  Settings,
  Gift,
  ArrowUpCircle,
} from "lucide-react";

export default function Painel() {
  const [user] = useState({
    name: "João Silva",
    plan: "Trimestral",
    cuponsPerDay: 4,
    validUntil: "15/06/2024",
    activeCupons: 12,
    totalWins: 2,
    totalEarned: "R$ 350,00",
  });

  const [nextDraws] = useState([
    {
      type: "Diário",
      prize: "R$ 50,00",
      time: "20:00",
      date: "Hoje",
      cupons: 4,
    },
    {
      type: "Semanal",
      prize: "R$ 500,00",
      time: "21:00",
      date: "Sábado",
      cupons: 4,
    },
    {
      type: "Mensal",
      prize: "R$ 5.000,00",
      time: "20:00",
      date: "30/05",
      cupons: 4,
    },
  ]);

  const [history] = useState([
    {
      date: "10/05/2024",
      type: "Sorteio Semanal",
      result: "Ganhou",
      amount: "R$ 200,00",
      status: "Pago",
    },
    {
      date: "05/05/2024",
      type: "Sorteio Diário",
      result: "Ganhou",
      amount: "R$ 150,00",
      status: "Pago",
    },
    {
      date: "03/05/2024",
      type: "Sorteio Diário",
      result: "Não ganhou",
      amount: "-",
      status: "-",
    },
    {
      date: "01/05/2024",
      type: "Sorteio Mensal",
      result: "Não ganhou",
      amount: "-",
      status: "-",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Olá, {user.name}!
                </span>
              </h1>
              <p className="text-gray-400">
                Bem-vindo ao seu painel de controle
              </p>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-white/5 border border-[#10b981]/20 rounded-xl hover:bg-white/10 transition-colors">
                <Settings className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-3 bg-white/5 border border-[#10b981]/20 rounded-xl hover:bg-white/10 transition-colors">
                <LogOut className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Crown className="w-8 h-8 text-[#fbbf24]" />
                <span className="px-3 py-1 bg-[#fbbf24]/20 text-[#fbbf24] text-xs font-bold rounded-full">
                  ATIVO
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {user.plan}
              </div>
              <div className="text-sm text-gray-400">Plano Atual</div>
            </div>

            <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
              <Zap className="w-8 h-8 text-[#10b981] mb-4" />
              <div className="text-2xl font-bold text-white mb-1">
                {user.cuponsPerDay}
              </div>
              <div className="text-sm text-gray-400">Cupons por Dia</div>
            </div>

            <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
              <Trophy className="w-8 h-8 text-[#10b981] mb-4" />
              <div className="text-2xl font-bold text-white mb-1">
                {user.totalWins}
              </div>
              <div className="text-sm text-gray-400">Vitórias</div>
            </div>

            <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-[#10b981] mb-4" />
              <div className="text-2xl font-bold text-[#10b981] mb-1">
                {user.totalEarned}
              </div>
              <div className="text-sm text-gray-400">Total Ganho</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active Cupons */}
              <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Cupons Ativos
                  </h2>
                  <span className="px-4 py-2 bg-[#10b981]/20 text-[#10b981] font-bold rounded-lg">
                    {user.activeCupons} cupons
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Array.from({ length: user.activeCupons }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-lg p-4 text-center"
                    >
                      <Gift className="w-6 h-6 text-[#10b981] mx-auto mb-2" />
                      <div className="text-sm font-mono text-white">
                        #{String(100000 + index).padStart(6, "0")}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                  <p className="text-sm text-gray-300 text-center">
                    ✨ Seus cupons são renovados automaticamente todos os dias
                    às 00h
                  </p>
                </div>
              </div>

              {/* History */}
              <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Histórico de Sorteios
                </h2>

                <div className="space-y-3">
                  {history.map((item, index) => (
                    <div
                      key={index}
                      className="bg-black/30 border border-[#10b981]/10 rounded-lg p-4 hover:bg-black/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="font-semibold text-white mb-1">
                            {item.type}
                          </div>
                          <div className="text-sm text-gray-400">
                            {item.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div
                              className={`font-semibold ${
                                item.result === "Ganhou"
                                  ? "text-[#10b981]"
                                  : "text-gray-400"
                              }`}
                            >
                              {item.result}
                            </div>
                            {item.amount !== "-" && (
                              <div className="text-sm text-gray-400">
                                {item.amount}
                              </div>
                            )}
                          </div>
                          {item.status === "Pago" && (
                            <span className="px-3 py-1 bg-[#10b981]/20 text-[#10b981] text-xs font-bold rounded-full">
                              PAGO
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Plan Info */}
              <div className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">Seu Plano</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Plano:</span>
                    <span className="text-white font-semibold">
                      {user.plan}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Válido até:</span>
                    <span className="text-white font-semibold">
                      {user.validUntil}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Cupons/dia:</span>
                    <span className="text-[#10b981] font-bold">
                      {user.cuponsPerDay}
                    </span>
                  </div>
                </div>
                <Link
                  href="/planos"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#10b981]/50 transition-all"
                >
                  <ArrowUpCircle className="w-5 h-5" />
                  Fazer Upgrade
                </Link>
              </div>

              {/* Next Draws */}
              <div className="bg-white/5 border border-[#10b981]/20 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">Próximos Sorteios</h3>
                <div className="space-y-3">
                  {nextDraws.map((draw, index) => (
                    <div
                      key={index}
                      className="bg-black/30 border border-[#10b981]/10 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold text-white">
                            {draw.type}
                          </div>
                          <div className="text-sm text-gray-400">
                            {draw.date}
                          </div>
                        </div>
                        <Clock className="w-5 h-5 text-[#10b981]" />
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-[#10b981]/10">
                        <span className="text-[#10b981] font-bold">
                          {draw.prize}
                        </span>
                        <span className="text-sm text-gray-400">
                          {draw.time}
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        Você tem {draw.cupons} cupons participando
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
