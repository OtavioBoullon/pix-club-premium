"use client";

import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import {
  FileText,
  CheckCircle,
  Shield,
  Users,
  AlertCircle,
  Clock,
  Trophy,
  XCircle,
} from "lucide-react";

export default function Regras() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#10b981]" />
              <span className="text-sm font-medium text-[#10b981]">
                Transparência e Segurança
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Regras e
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#10b981] to-[#fbbf24] bg-clip-text text-transparent">
                Funcionamento
              </span>
            </h1>

            <p className="text-xl text-gray-400">
              Tudo que você precisa saber sobre o PIX CLUB PREMIUM
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Como Funciona */}
            <section className="bg-white/5 border border-[#10b981]/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#10b981]" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Como Funciona
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  O PIX CLUB PREMIUM é um clube de sorteios online onde os
                  membros participam de sorteios diários, semanais e mensais
                  com chances reais de ganhar prêmios em PIX.
                </p>

                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3">
                    Tipos de Sorteios:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Sorteios Diários:</strong> Realizados todos os
                        dias às 20h com prêmios de R$ 50 a R$ 200
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Sorteios Semanais:</strong> Todo sábado às 21h
                        com prêmios de R$ 500 a R$ 1.000
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Sorteios Mensais:</strong> Último dia do mês às
                        20h com prêmios de R$ 5.000 a R$ 10.000
                      </span>
                    </li>
                  </ul>
                </div>

                <p>
                  Cada plano oferece uma quantidade específica de cupons por
                  dia. Quanto mais cupons você tiver, maiores são suas chances
                  de ganhar.
                </p>
              </div>
            </section>

            {/* Elegibilidade */}
            <section className="bg-white/5 border border-[#10b981]/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#10b981]" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Quem Pode Participar
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>Para participar do PIX CLUB PREMIUM, você deve:</p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>Ter 18 anos ou mais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>Possuir CPF válido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>Ter uma chave PIX ativa (CPF, e-mail ou telefone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>Concordar com os termos de uso e política de privacidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>Manter um plano ativo (exceto sorteio grátis inicial)</span>
                  </li>
                </ul>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-500 mb-1">
                        Importante:
                      </p>
                      <p className="text-sm text-gray-300">
                        É permitido apenas um cadastro por CPF. Cadastros
                        duplicados serão automaticamente cancelados sem
                        reembolso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Transparência */}
            <section className="bg-white/5 border border-[#10b981]/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#10b981]" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Transparência e Sorteios
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  Nosso compromisso é com a total transparência. Todos os
                  sorteios são realizados de forma justa e verificável:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Sistema Aleatório:</strong> Utilizamos algoritmo
                      certificado de geração de números aleatórios
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Resultados Públicos:</strong> Todos os ganhadores
                      são divulgados publicamente na página de ganhadores
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Comprovantes:</strong> Todos os pagamentos têm
                      comprovante verificável
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Horários Fixos:</strong> Sorteios sempre nos
                      mesmos horários divulgados
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Auditoria:</strong> Sistema auditado por empresa
                      independente
                    </span>
                  </li>
                </ul>

                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-[#10b981]">Garantia:</strong> Se
                    você ganhar, receberá o prêmio em até 24 horas via PIX. Sem
                    exceções.
                  </p>
                </div>
              </div>
            </section>

            {/* Pagamentos */}
            <section className="bg-white/5 border border-[#10b981]/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#10b981]" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Pagamentos e Prêmios
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  Quando você ganha um sorteio, o processo de pagamento é
                  simples e rápido:
                </p>

                <div className="space-y-3">
                  <div className="bg-black/30 border border-[#10b981]/10 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">
                      1. Notificação Imediata
                    </h3>
                    <p className="text-sm">
                      Você recebe notificação por e-mail e WhatsApp assim que o
                      sorteio é realizado
                    </p>
                  </div>

                  <div className="bg-black/30 border border-[#10b981]/10 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">
                      2. Verificação Automática
                    </h3>
                    <p className="text-sm">
                      Nosso sistema verifica automaticamente seus dados
                      cadastrais e chave PIX
                    </p>
                  </div>

                  <div className="bg-black/30 border border-[#10b981]/10 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">
                      3. Pagamento em até 24h
                    </h3>
                    <p className="text-sm">
                      O prêmio é transferido via PIX para sua chave cadastrada
                      em até 24 horas
                    </p>
                  </div>

                  <div className="bg-black/30 border border-[#10b981]/10 rounded-lg p-4">
                    <h3 className="font-semibold text-white mb-2">
                      4. Comprovante Público
                    </h3>
                    <p className="text-sm">
                      Seu nome (parcial) e comprovante são publicados na página
                      de ganhadores
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-500 mb-1">
                        Atenção:
                      </p>
                      <p className="text-sm text-gray-300">
                        Certifique-se de que sua chave PIX está correta e
                        ativa. Não nos responsabilizamos por erros em dados
                        cadastrais fornecidos pelo usuário.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Política de Cancelamento */}
            <section className="bg-white/5 border border-[#10b981]/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 rounded-lg flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-[#10b981]" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Política de Cancelamento
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  Você tem total liberdade para cancelar sua assinatura quando
                  quiser:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Sem Fidelidade:</strong> Cancele a qualquer
                      momento sem multas ou taxas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Garantia de 7 dias:</strong> Reembolso total se
                      cancelar nos primeiros 7 dias
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Acesso até o fim:</strong> Após cancelar, você
                      continua participando até o fim do período pago
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Reativação fácil:</strong> Pode reativar sua
                      conta a qualquer momento
                    </span>
                  </li>
                </ul>

                <div className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong className="text-[#10b981]">Como cancelar:</strong>{" "}
                    Acesse seu painel, vá em Configurações e clique em
                    "Cancelar Assinatura". O processo é instantâneo.
                  </p>
                </div>
              </div>
            </section>

            {/* Suporte */}
            <section className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/20 border border-[#10b981]/30 rounded-xl p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ainda tem dúvidas?
                </h2>
                <p className="text-gray-300 mb-6">
                  Nossa equipe está pronta para ajudar você
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-xl font-bold hover:shadow-2xl hover:shadow-[#10b981]/50 transition-all transform hover:scale-105"
                  >
                    Falar no WhatsApp
                  </a>
                  <a
                    href="mailto:contato@pixclubpremium.com"
                    className="px-8 py-4 bg-white/5 border border-[#10b981]/30 rounded-xl font-bold hover:bg-white/10 transition-all"
                  >
                    Enviar E-mail
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
