<template>
  <div class="content-wrapper">
    <div class="home-main">
      <div class="home-main__left-card">
        <span class="title">O Caminho para Colaboradores Mais Felizes.</span>
        <span class="subtitle"
          >Automatize Pesquisas de Satisfação, Capacite Líderes com Insights
          Personalizados e Acompanhe a Evolução do Bem-Estar dos Colaboradores
          ao Longo do Tempo.
        </span>
        <div class="base-button" @click="openPage">
          <span>Testar grátis</span>
        </div>
      </div>
      <div class="video-wrapper"></div>
    </div>
    <div class="home-main" style="height: 621px">
      <div class="home-main__img-cards">
        <img src="~~/assets/tela 1.png" />
        <img src="~~/assets/tela 2.png" />
      </div>
      <div
        style="display: flex; flex-direction: column; gap: 32px; width: 620px"
      >
        <div class="right-content__features">
          <img src="~~/assets/search.png" />
          <span class="title">Pesquisas Simplificadas</span>
          <span class="text"
            >Simplificamos o processo de coleta de dados de satisfação dos
            colaboradores com nossa plataforma intuitiva. Configure e envie
            pesquisas facilmente para toda a equipe, garantindo uma visão
            abrangente do clima organizacional em questão de minutos.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/insights.png" />
          <span class="title">Capacite seus Líderes</span>
          <span class="text"
            >Capacite seus líderes com insights personalizados sobre a
            satisfação de suas equipes. Após a coleta dos dados, nossa
            plataforma gera resumos detalhados e relevantes, permitindo que os
            líderes conduzam reuniões one on one mais eficazes e orientadas para
            o desenvolvimento.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/hearth.png" />
          <span class="title">Gerenciamento Contínuo do Bem-Estar</span>
          <span class="text"
            >Mantenha-se atualizado sobre o bem-estar dos seus colaboradores ao
            longo do tempo com nosso sistema de BI abrangente. Acompanhe as
            tendências e evoluções nos níveis de satisfação, identificando áreas
            de melhoria e promovendo uma cultura organizacional mais saudável e
            produtiva.</span
          >
        </div>
      </div>
    </div>
    <div class="home-main plans-and-prices">
      <div class="home-main__left-card" style="width: auto; height: auto">
        <span class="title">Planos e Preços</span>
        <span class="banner"
          >Preços competitivos para sua transformação de RH</span
        >
      </div>
      <div class="cards-wrapper">
        <div class="plan-card">
          <div
            class="light-border-b"
            style="
              display: flex;
              flex-direction: column;
              gap: 32px;
              padding-bottom: 42px;
              width: 100%;
            "
          >
            <span class="text-medium">Lite</span>
            <div>
              <span class="text-xl"
                >R$ 200,00 <i class="text-light">/mês</i></span
              >
              <p class="text-light">30 dias de teste</p>
            </div>
          </div>
          <div class="base-button" style="width: 100%">
            <span>Começar agora</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <span class="text-subtitle">O Lite inclui:</span>
            <div>
              <div class="list-content">
                <img src="~~/assets/check.png" />
                <span class="text-tile">Até 3 usuários</span>
              </div>
              <div class="list-content">
                <img src="~~/assets/check.png" />
                <span class="text-tile">Até 1mi registros</span>
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card">
          <div
            class="light-border-b"
            style="
              display: flex;
              flex-direction: column;
              gap: 32px;
              padding-bottom: 42px;
              width: 100%;
            "
          >
            <span class="text-medium">Lite</span>
            <div>
              <span class="text-xl"
                >R$ 200,00 <i class="text-light">/mês</i></span
              >
              <p class="text-light">30 dias de teste</p>
            </div>
          </div>
          <div class="base-button" style="width: 100%">
            <span>Começar agora</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <span class="text-subtitle">O Lite inclui:</span>
            <div>
              <div class="list-content">
                <img src="~~/assets/check.png" />
                <span class="text-tile">Até 3 usuários</span>
              </div>
              <div class="list-content">
                <img src="~~/assets/check.png" />
                <span class="text-tile">Até 1mi registros</span>
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card">
          <div
            class="light-border-b"
            style="
              display: flex;
              flex-direction: column;
              gap: 32px;
              padding-bottom: 42px;
              width: 100%;
            "
          >
            <span class="text-medium">Lite</span>
            <div>
              <span class="text-xl"
                >R$ 200,00 <i class="text-light">/mês</i></span
              >
              <p class="text-light">30 dias de teste</p>
            </div>
          </div>
          <div class="base-button" style="width: 100%">
            <span>Começar agora</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <span class="text-subtitle">O Lite inclui:</span>
            <div>
              <div class="list-content">
                <img src="~~/assets/check.png" />
                <span class="text-tile">Até 3 usuários</span>
              </div>
              <div class="list-content">
                <img src="~~/assets/check.png" />
                <span class="text-tile">Até 1mi registros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-card">
        <span>
          Simplifique Pesquisas de Satisfação e Capacite sua Equipe com
          <b>Insights Inteligentes</b>
        </span>
        <div class="base-button"><span>Experimente Já!</span></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function openPage() {
  window.open("https://app.rhitos.com", "_blank");
}
</script>

<style scoped>
.home-main__left-card {
  width: 620px;
  height: 297px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  .title {
    color: var(--gray-20800, #1b2139);
    font-family: Nunito;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .subtitle {
    color: var(--gray-20700, #313854);
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.banner-card {
  border-radius: 16px;
  background: #536eee;
  display: flex;
  padding: 0 48px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  height: 144px;
  span {
    font-family: Nunito;
    font-size: 24px;
    line-height: normal;
    color: var(--Base-White, #fff);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .base-button {
    width: 164px;
    border-radius: 8px;
    border: 1px solid #536eee;
    background: #fff;

    /* Shadow/xs */
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    span {
      color: #536eee;

      /* Text md/Medium */
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
    }
  }
}

.plans-and-prices {
  flex-direction: column;
  .title {
    color: #536eee;
    text-align: center;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .banner {
    color: var(--gray-20800, #1b2139);
    text-align: center;
    font-family: Nunito;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .list-content {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cards-wrapper {
    display: flex;
    gap: 32px;
  }
  .plan-card {
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    height: 398px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--gray-20200, #e7e8f0);
    background: #fff;

    /* Shadow/sm */
    box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1),
      0px 1px 2px 0px rgba(16, 24, 40, 0.06);
  }
}

.right-content__features {
  display: flex;
  flex-direction: column;
  gap: 16px;
  img {
    width: 48px;
    height: 48px;
  }
  .title {
    color: var(--gray-20800, #1b2139);
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .text {
    color: var(--gray-20700, #313854);
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

.home-main__img-cards {
  display: flex;
  gap: 24px;
  flex-direction: column;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.home-main {
  display: flex;
  gap: 64px;
  width: 100%;
}

.video-wrapper {
  width: 528px;
  height: 297px;
  flex-shrink: 0;
  background-color: grey;
}
</style>
