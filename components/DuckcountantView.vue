<template>
  <div class="home-main">
    <div class="home-main__left-card" style="height: 297px">
      <div class="video-wrapper"></div>
      <div class="info-side">
        <div class="title-section">
          <img src="~~/assets/fluxo-de-caixa.png" />
          <span class="title">Fluxo de Caixa</span>
        </div>
        <span class="subtitle"
          >Conecte-se ao Futuro Financeiro: Nosso SaaS simplifica o fluxo de
          caixa com inteligência artificial, enquanto se integra perfeitamente
          ao seu ERP. Visualize seu histórico financeiro, previsões de saldo e
          padrões de dados com facilidade. Gerencie inadimplências e antecipe-se
          aos desafios financeiros com nossa solução intuitiva.
        </span>
        <div class="base-button" @click="openPage('fluxo-de-caixa')">
          <span>Conheça</span>
        </div>
      </div>
    </div>

    <div class="home-main__left-card" style="height: 297px">
      <div class="info-side">
        <div class="title-section">
          <img src="~~/assets/resumo-contabil.png" />
          <span class="title">Resumo Contábil</span>
        </div>
        <span class="subtitle"
          >Alavanque sua Gestão Contábil: Conecte-se ao Futuro da Contabilidade
          com Nosso SaaS. Integração perfeita com seu ERP, acesso instantâneo
          aos principais indicadores contábeis - DRE, índices contábeis e DMPL.
          Utilize a IA para desvendar padrões nos seus dados contábeis e obtenha
          insights personalizados para impulsionar o crescimento do seu negócio.
        </span>
        <div class="base-button" @click="openPage('resumo-contabil')">
          <span>Conheça</span>
        </div>
      </div>
      <div class="video-wrapper"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
function openPage(name: string) {
  useRouter().push(`/${name}`);
}
</script>

<style scoped>
.title-section {
  display: flex;
  gap: 16px;
  align-items: center;
}
.home-main {
  flex-direction: column;
  justify-content: space-between;
}

.home-main__left-card {
  width: auto;
  gap: 64px;
  flex-direction: row-reverse !important;
}

.info-side {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 620px;
}
</style>
