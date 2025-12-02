/**
 * AUTOMAÇÕES PIX CLUB PREMIUM
 * 
 * Este arquivo contém todas as mensagens automáticas para WhatsApp e E-mail
 * que devem ser configuradas no seu sistema de automação (ex: n8n, Make, Zapier)
 */

export const automations = {
  // ========================================
  // MENSAGEM 1: APÓS CADASTRO NO SORTEIO GRÁTIS
  // ========================================
  afterFreeSignup: {
    whatsapp: {
      trigger: "Imediatamente após cadastro no sorteio grátis",
      message: `🎉 *Parabéns! Você está participando!*

Seu cupom grátis foi gerado com sucesso: *#{{CUPOM_NUMBER}}*

📅 Sorteio hoje às 20h
🎁 Prêmio: R$ 50,00

Para receber cupons diários e aumentar suas chances de ganhar, assine a partir de *R$ 14,90/mês*:

👉 {{LINK_PLANOS}}

Boa sorte! 🍀`,
    },
    email: {
      subject: "🎉 Você está participando do sorteio!",
      html: `
        <h1>Parabéns! Você está participando!</h1>
        <p>Seu cupom grátis foi gerado com sucesso:</p>
        <div style="background: #10b981; color: white; padding: 20px; border-radius: 10px; text-align: center; font-size: 24px; font-weight: bold;">
          #{{CUPOM_NUMBER}}
        </div>
        <p><strong>Sorteio:</strong> Hoje às 20h</p>
        <p><strong>Prêmio:</strong> R$ 50,00</p>
        <p>Para receber cupons diários e aumentar suas chances de ganhar, assine a partir de R$ 14,90/mês:</p>
        <a href="{{LINK_PLANOS}}" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; display: inline-block;">Ver Planos</a>
      `,
    },
  },

  // ========================================
  // MENSAGEM 2: 1 HORA APÓS CADASTRO (UPSELL)
  // ========================================
  oneHourAfterSignup: {
    whatsapp: {
      trigger: "1 hora após cadastro no sorteio grátis",
      message: `👋 Olá {{NOME}}!

Seu cupom grátis está ativo e você já está concorrendo! 🎯

Mas que tal *aumentar suas chances*?

Com o *Plano Mensal* por apenas *R$ 14,90*, você recebe:
✅ 1 cupom por dia (30 cupons/mês)
✅ Participa de TODOS os sorteios
✅ Cancela quando quiser

Ou escolha o *Plano Trimestral* ou *Anual* e ganhe ainda mais cupons!

👉 {{LINK_PLANOS}}

Não perca essa chance! 🚀`,
    },
    email: {
      subject: "⏰ Aumente suas chances de ganhar!",
      html: `
        <h1>Olá {{NOME}}!</h1>
        <p>Seu cupom grátis está ativo e você já está concorrendo! 🎯</p>
        <p>Mas que tal <strong>aumentar suas chances</strong>?</p>
        
        <div style="background: #f0f0f0; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h2>Plano Mensal - R$ 14,90</h2>
          <ul>
            <li>✅ 1 cupom por dia (30 cupons/mês)</li>
            <li>✅ Participa de TODOS os sorteios</li>
            <li>✅ Cancela quando quiser</li>
          </ul>
        </div>
        
        <p>Ou escolha o <strong>Plano Trimestral</strong> ou <strong>Anual</strong> e ganhe ainda mais cupons!</p>
        
        <a href="{{LINK_PLANOS}}" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; display: inline-block;">Ver Todos os Planos</a>
      `,
    },
  },

  // ========================================
  // MENSAGEM 3: UPSELL PARA PLANO TRIMESTRAL
  // ========================================
  upsellTrimestral: {
    whatsapp: {
      trigger: "2 dias após assinar plano mensal",
      message: `🔥 *Oferta Especial para Você!*

Olá {{NOME}}, notamos que você está no Plano Mensal.

Que tal fazer um *UPGRADE* e economizar?

*Plano Trimestral - R$ 79,00*
✅ 4 cupons por dia (120 cupons/trimestre)
✅ 1 sorteio extra por mês
✅ Acesso prioritário
✅ *Economia de 47%*

Compare:
• Mensal: R$ 14,90 x 3 = R$ 44,70 (3 cupons/dia)
• Trimestral: R$ 79,00 (12 cupons/dia) 💰

👉 {{LINK_UPGRADE}}

Aproveite o melhor custo-benefício! 🚀`,
    },
    email: {
      subject: "🔥 Upgrade Especial: Economize 47%!",
      html: `
        <h1>Oferta Especial para Você!</h1>
        <p>Olá {{NOME}}, notamos que você está no Plano Mensal.</p>
        <p>Que tal fazer um <strong>UPGRADE</strong> e economizar?</p>
        
        <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 15px; margin: 20px 0;">
          <h2 style="color: white; margin: 0 0 15px 0;">Plano Trimestral - R$ 79,00</h2>
          <ul style="list-style: none; padding: 0;">
            <li>✅ 4 cupons por dia (120 cupons/trimestre)</li>
            <li>✅ 1 sorteio extra por mês</li>
            <li>✅ Acesso prioritário</li>
            <li>✅ <strong>Economia de 47%</strong></li>
          </ul>
        </div>
        
        <div style="background: #f0f0f0; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3>Compare:</h3>
          <p>• Mensal: R$ 14,90 x 3 = R$ 44,70 (3 cupons/dia)</p>
          <p>• Trimestral: R$ 79,00 (12 cupons/dia) 💰</p>
        </div>
        
        <a href="{{LINK_UPGRADE}}" style="background: #fbbf24; color: black; padding: 15px 30px; text-decoration: none; border-radius: 10px; display: inline-block; font-weight: bold;">Fazer Upgrade Agora</a>
      `,
    },
  },

  // ========================================
  // MENSAGEM 4: UPSELL PARA PLANO ANUAL
  // ========================================
  upsellAnual: {
    whatsapp: {
      trigger: "1 semana após assinar plano mensal ou trimestral",
      message: `👑 *Seja VIP com o Plano Anual!*

Olá {{NOME}}!

Você está gostando do PIX CLUB PREMIUM? 

Então vai AMAR o *Plano Anual*:

*R$ 149,00/ano* (apenas R$ 12,41/mês)

✅ 6 cupons por dia
✅ 12 sorteios especiais exclusivos
✅ Suporte VIP 24/7
✅ Acesso prioritário
✅ *Economia de 75%*

Compare:
• Mensal: R$ 14,90 x 12 = R$ 178,80
• Anual: R$ 149,00 💰

Economize R$ 29,80 e ganhe muito mais!

👉 {{LINK_UPGRADE_ANUAL}}

Aproveite! 🎯`,
    },
    email: {
      subject: "👑 Seja VIP: Plano Anual com 75% de economia!",
      html: `
        <h1>Seja VIP com o Plano Anual!</h1>
        <p>Olá {{NOME}}!</p>
        <p>Você está gostando do PIX CLUB PREMIUM?</p>
        <p>Então vai <strong>AMAR</strong> o Plano Anual:</p>
        
        <div style="background: linear-gradient(135deg, #fbbf24, #f59e0b); color: black; padding: 30px; border-radius: 15px; margin: 20px 0;">
          <h2 style="margin: 0 0 10px 0;">R$ 149,00/ano</h2>
          <p style="margin: 0 0 20px 0; font-size: 18px;">(apenas R$ 12,41/mês)</p>
          <ul style="list-style: none; padding: 0;">
            <li>✅ 6 cupons por dia</li>
            <li>✅ 12 sorteios especiais exclusivos</li>
            <li>✅ Suporte VIP 24/7</li>
            <li>✅ Acesso prioritário</li>
            <li>✅ <strong>Economia de 75%</strong></li>
          </ul>
        </div>
        
        <div style="background: #f0f0f0; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3>Compare e Economize:</h3>
          <p>• Mensal: R$ 14,90 x 12 = R$ 178,80</p>
          <p>• Anual: R$ 149,00 💰</p>
          <p><strong>Você economiza R$ 29,80!</strong></p>
        </div>
        
        <a href="{{LINK_UPGRADE_ANUAL}}" style="background: #fbbf24; color: black; padding: 15px 30px; text-decoration: none; border-radius: 10px; display: inline-block; font-weight: bold;">Fazer Upgrade para Anual</a>
      `,
    },
  },

  // ========================================
  // MENSAGEM 5: NOTIFICAÇÃO DE SORTEIO
  // ========================================
  drawNotification: {
    whatsapp: {
      trigger: "30 minutos antes do sorteio",
      message: `⏰ *Sorteio em 30 minutos!*

Olá {{NOME}}!

O sorteio {{TIPO_SORTEIO}} acontece em *30 minutos*!

🎁 Prêmio: *{{VALOR_PREMIO}}*
🎯 Seus cupons: *{{QUANTIDADE_CUPONS}}*
⏰ Horário: *{{HORARIO_SORTEIO}}*

Boa sorte! 🍀

Acompanhe ao vivo em:
👉 {{LINK_PAINEL}}`,
    },
    email: {
      subject: "⏰ Sorteio em 30 minutos!",
      html: `
        <h1>Sorteio em 30 minutos!</h1>
        <p>Olá {{NOME}}!</p>
        <p>O sorteio <strong>{{TIPO_SORTEIO}}</strong> acontece em <strong>30 minutos</strong>!</p>
        
        <div style="background: #10b981; color: white; padding: 30px; border-radius: 15px; margin: 20px 0; text-align: center;">
          <h2 style="color: white; margin: 0 0 10px 0;">Prêmio: {{VALOR_PREMIO}}</h2>
          <p style="margin: 0; font-size: 18px;">Seus cupons: {{QUANTIDADE_CUPONS}}</p>
          <p style="margin: 10px 0 0 0; font-size: 18px;">Horário: {{HORARIO_SORTEIO}}</p>
        </div>
        
        <p style="text-align: center;">Boa sorte! 🍀</p>
        
        <div style="text-align: center;">
          <a href="{{LINK_PAINEL}}" style="background: #fbbf24; color: black; padding: 15px 30px; text-decoration: none; border-radius: 10px; display: inline-block; font-weight: bold;">Acompanhar ao Vivo</a>
        </div>
      `,
    },
  },

  // ========================================
  // MENSAGEM 6: VOCÊ GANHOU!
  // ========================================
  winnerNotification: {
    whatsapp: {
      trigger: "Imediatamente após sorteio (se ganhou)",
      message: `🎉🎉🎉 *PARABÉNS! VOCÊ GANHOU!* 🎉🎉🎉

Olá {{NOME}}!

Você foi o *GANHADOR* do sorteio {{TIPO_SORTEIO}}!

💰 *Prêmio: {{VALOR_PREMIO}}*
🎫 Cupom sorteado: *{{CUPOM_GANHADOR}}*

O pagamento será realizado via PIX em até *24 horas* na chave cadastrada.

Você receberá uma nova mensagem assim que o pagamento for efetuado.

Parabéns novamente! 🎊

👉 {{LINK_PAINEL}}`,
    },
    email: {
      subject: "🎉 PARABÉNS! VOCÊ GANHOU!",
      html: `
        <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 50px 30px; border-radius: 15px; text-align: center;">
          <h1 style="color: white; font-size: 36px; margin: 0 0 20px 0;">🎉 PARABÉNS! 🎉</h1>
          <h2 style="color: white; font-size: 28px; margin: 0 0 30px 0;">VOCÊ GANHOU!</h2>
          
          <div style="background: rgba(255,255,255,0.2); padding: 30px; border-radius: 10px; margin: 20px 0;">
            <p style="color: white; font-size: 20px; margin: 0 0 10px 0;">Prêmio:</p>
            <p style="color: #fbbf24; font-size: 48px; font-weight: bold; margin: 0;">{{VALOR_PREMIO}}</p>
          </div>
          
          <p style="color: white; font-size: 18px;">Sorteio: {{TIPO_SORTEIO}}</p>
          <p style="color: white; font-size: 18px;">Cupom sorteado: <strong>{{CUPOM_GANHADOR}}</strong></p>
        </div>
        
        <div style="padding: 30px; text-align: center;">
          <p>O pagamento será realizado via PIX em até <strong>24 horas</strong> na chave cadastrada.</p>
          <p>Você receberá uma nova mensagem assim que o pagamento for efetuado.</p>
          
          <a href="{{LINK_PAINEL}}" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; display: inline-block; font-weight: bold; margin-top: 20px;">Ver no Painel</a>
        </div>
      `,
    },
  },

  // ========================================
  // MENSAGEM 7: PAGAMENTO REALIZADO
  // ========================================
  paymentConfirmation: {
    whatsapp: {
      trigger: "Após pagamento do prêmio",
      message: `✅ *Pagamento Realizado!*

Olá {{NOME}}!

Seu prêmio de *{{VALOR_PREMIO}}* foi pago com sucesso! 💰

📱 Chave PIX: {{CHAVE_PIX}}
📅 Data: {{DATA_PAGAMENTO}}
🆔 ID Transação: {{ID_TRANSACAO}}

Verifique sua conta bancária.

Parabéns novamente e continue participando! 🎉

👉 {{LINK_PAINEL}}`,
    },
    email: {
      subject: "✅ Pagamento Realizado com Sucesso!",
      html: `
        <h1>Pagamento Realizado!</h1>
        <p>Olá {{NOME}}!</p>
        <p>Seu prêmio de <strong>{{VALOR_PREMIO}}</strong> foi pago com sucesso! 💰</p>
        
        <div style="background: #f0f0f0; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3>Detalhes do Pagamento:</h3>
          <p><strong>Chave PIX:</strong> {{CHAVE_PIX}}</p>
          <p><strong>Data:</strong> {{DATA_PAGAMENTO}}</p>
          <p><strong>ID Transação:</strong> {{ID_TRANSACAO}}</p>
        </div>
        
        <p>Verifique sua conta bancária.</p>
        <p>Parabéns novamente e continue participando! 🎉</p>
        
        <a href="{{LINK_PAINEL}}" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; display: inline-block;">Acessar Painel</a>
      `,
    },
  },

  // ========================================
  // MENSAGEM 8: RENOVAÇÃO DE PLANO
  // ========================================
  planRenewal: {
    whatsapp: {
      trigger: "3 dias antes do vencimento",
      message: `⏰ *Seu plano vence em 3 dias!*

Olá {{NOME}}!

Seu *{{NOME_PLANO}}* vence em *{{DATA_VENCIMENTO}}*.

Para continuar participando dos sorteios, certifique-se de que o pagamento está em dia.

💳 Valor: *{{VALOR_PLANO}}*
📅 Vencimento: *{{DATA_VENCIMENTO}}*

Renovação automática ativada ✅

Dúvidas? Fale conosco!

👉 {{LINK_PAINEL}}`,
    },
    email: {
      subject: "⏰ Seu plano vence em 3 dias",
      html: `
        <h1>Seu plano vence em 3 dias!</h1>
        <p>Olá {{NOME}}!</p>
        <p>Seu <strong>{{NOME_PLANO}}</strong> vence em <strong>{{DATA_VENCIMENTO}}</strong>.</p>
        
        <div style="background: #fff3cd; border: 2px solid #fbbf24; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="margin: 0 0 10px 0;">Detalhes da Renovação:</h3>
          <p><strong>Valor:</strong> {{VALOR_PLANO}}</p>
          <p><strong>Vencimento:</strong> {{DATA_VENCIMENTO}}</p>
          <p><strong>Status:</strong> Renovação automática ativada ✅</p>
        </div>
        
        <p>Para continuar participando dos sorteios, certifique-se de que o pagamento está em dia.</p>
        
        <a href="{{LINK_PAINEL}}" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; display: inline-block;">Gerenciar Plano</a>
      `,
    },
  },
};

// ========================================
// VARIÁVEIS DISPONÍVEIS
// ========================================
export const availableVariables = {
  "{{NOME}}": "Nome do usuário",
  "{{CUPOM_NUMBER}}": "Número do cupom",
  "{{LINK_PLANOS}}": "Link para página de planos",
  "{{LINK_UPGRADE}}": "Link para upgrade de plano",
  "{{LINK_UPGRADE_ANUAL}}": "Link para upgrade anual",
  "{{LINK_PAINEL}}": "Link para painel do usuário",
  "{{TIPO_SORTEIO}}": "Tipo do sorteio (Diário, Semanal, Mensal)",
  "{{VALOR_PREMIO}}": "Valor do prêmio",
  "{{QUANTIDADE_CUPONS}}": "Quantidade de cupons do usuário",
  "{{HORARIO_SORTEIO}}": "Horário do sorteio",
  "{{CUPOM_GANHADOR}}": "Número do cupom ganhador",
  "{{CHAVE_PIX}}": "Chave PIX do usuário",
  "{{DATA_PAGAMENTO}}": "Data do pagamento",
  "{{ID_TRANSACAO}}": "ID da transação",
  "{{NOME_PLANO}}": "Nome do plano do usuário",
  "{{VALOR_PLANO}}": "Valor do plano",
  "{{DATA_VENCIMENTO}}": "Data de vencimento do plano",
};

export default automations;
