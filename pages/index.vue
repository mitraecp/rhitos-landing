<template>
  <div class="content-wrapper">
    <div v-if="$isRhitos" class="home-main">
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
    <div v-if="isLongsights" class="home-main">
      <div class="home-main__left-card">
        <span class="title"
          >Planejamento Estratégico com Visão Completa, Gestão de Metas e
          Inteligência Artificial.</span
        >
        <span class="subtitle"
          >Maximize sua Estratégia Corporativa: Simplifique o Planejamento com
          Metodologias Reconhecidas, Metas Hierarquizadas e Análise Avançada de
          Dados. Alcance seus Objetivos com Planos de Ação Direcionados e
          Insights Profundos de IA.
        </span>
        <div class="base-button" @click="openPage">
          <span>Testar grátis</span>
        </div>
      </div>
      <div class="video-wrapper"></div>
    </div>
    <div class="home-main" style="height: 643px">
      <div class="home-main__img-cards" v-if="isLongsights">
        <img src="`~~/assets/screenshot_01_longsights.png`" />
        <img src="`~~/assets/screenshot_01_longsights.png`" />
      </div>
      <div class="home-main__img-cards" v-if="isRhitos">
        <img src="`~~/assets/screenshot_01_rhitos.png`" />
        <img src="`~~/assets/screenshot_01_rhitos.png`" />
      </div>
      <div
        v-if="isRhitos"
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
      <div
        v-if="isLongsights"
        style="display: flex; flex-direction: column; gap: 32px; width: 620px"
      >
        <div class="right-content__features">
          <img src="~~/assets/verified.png" />
          <span class="title">Metodologias Comprovadas</span>
          <span class="text"
            >Nosso SaaS é projetado para empresas que adotam metodologias de
            planejamento estratégico como OKR (Objectives and Key Results) ou
            BSC (Balanced Scorecard). Com a capacidade de cadastrar metas
            hierarquizadas e definir setores responsáveis, oferecemos uma
            abordagem robusta para transformar sua visão em ação.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/insights_orange.png" />
          <span class="title">Insights Inteligentes</span>
          <span class="text"
            >Obtenha uma visão abrangente do desempenho das suas metas em
            relação aos resultados reais, tanto no mês de referência quanto no
            acumulado do ano. Nossa plataforma oferece análises detalhadas para
            que você possa identificar áreas de oportunidade e tomar decisões
            informadas para o sucesso do seu negócio.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/strategy.png" />
          <span class="title">Ação Estratégica</span>
          <span class="text"
            >Simplifique a criação e gestão de planos de ação alinhados às suas
            metas estratégicas. Além disso, nossa integração com IA permite uma
            investigação profunda dos dados, fornecendo insights valiosos para
            otimizar suas estratégias e impulsionar o crescimento empresarial de
            forma inteligente.</span
          >
        </div>
      </div>
    </div>
    <div class="home-main plans-and-prices" v-if="isRhitos">
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
              height: 142px;
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
        <div
          class="plan-card"
          style="border: 1px solid #536eee; position: relative"
        >
          <div class="recommended-tag"><span>Recomendado</span></div>
          <div
            class="light-border-b"
            style="
              display: flex;
              height: 142px;
              flex-direction: column;
              gap: 32px;
              padding-bottom: 42px;
              width: 100%;
            "
          >
            <span class="text-medium">Enterprise</span>
            <div>
              <span class="text-xl"
                >R$ 400,00 <i class="text-light">/mês</i></span
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
              height: 142px;
              flex-direction: column;
              gap: 32px;
              padding-bottom: 42px;
              width: 100%;
            "
          >
            <span class="text-medium">Pro</span>
            <div>
              <img src="~~/assets/shiny.svg" alt="" />
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
    <div class="home-main plans-and-prices" v-if="isLongsights">
      <div class="home-main__left-card" style="width: auto; height: auto;">
        <span class="title">Planos e Preços</span>
        <span class="banner"
          >Preços competitivos para sua transformação de Planejamento
          Estratégico</span
        >
      </div>
      <div class="cards-wrapper">
        <div class="plan-card">
          <div
            class="light-border-b"
            style="
              display: flex;
              height: 142px;
              flex-direction: column;
              gap: 32px;
              padding-bottom: 42px;
              width: 100%;
            "
          >
            <span class="text-medium">Lite</span>
            <div>
              <span class="text-xl"
                >R$ 700,00 <i class="text-light">/mês</i></span
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
                <svg-icon
                  :color="primaryColor"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Até 10 usuários</span>
              </div>
              <div class="list-content">
                <svg-icon
                  :color="primaryColor"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Até 10 departamentos</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="plan-card"
          :style="{
            border: `1px solid ${primaryColor}`,
          }"
          style="position: relative"
        >
          <div
            class="recommended-tag"
            :style="{
              backgroundColor: primaryColor,
            }"
          >
            <span>Recomendado</span>
          </div>
          <div
            class="light-border-b"
            style="
              display: flex;
              height: 142px;
              flex-direction: column;
              gap: 32px;
              padding-bottom: 42px;
              width: 100%;
            "
          >
            <span class="text-medium">Pro</span>
            <div>
              <span class="text-xl"
                >R$ 1400,00 <i class="text-light">/mês</i></span
              >
              <p class="text-light">30 dias de teste</p>
            </div>
          </div>
          <div class="base-button" style="width: 100%">
            <span>Começar agora</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <span class="text-subtitle">O Pro inclui:</span>
            <div>
              <div class="list-content">
                <svg-icon
                  :color="primaryColor"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Até 30 usuários</span>
              </div>
              <div class="list-content">
                <svg-icon
                  :color="primaryColor"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Até 30 departamentos</span>
              </div>
            </div>
          </div>
        </div>
        <div class="plan-card">
          <div
            class="light-border-b"
            style="
              display: flex;
              height: 142px;
              flex-direction: column;
              gap: 32px;
              padding-bottom: 42px;
              width: 100%;
            "
          >
            <span class="text-medium">Enterprise</span>
            <div>
              <svg-icon
                :color="primaryColor"
                :path="mdiCreation"
                type="mdi"
                size="82px"
              ></svg-icon>
            </div>
          </div>
          <div class="base-button" style="width: 100%">
            <span>Começar agora</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <div>
              <div class="list-content">
                <svg-icon
                  :color="primaryColor"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Adaptamos os requisitos para você</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-card" v-if="isRhitos">
        <span>
          Simplifique Pesquisas de Satisfação e Capacite sua Equipe com
          <b>Insights Inteligentes</b>
        </span>
        <div class="base-button"><span>Experimente Já!</span></div>
      </div>
      <div class="banner-card banner-card--longsights" v-if="isLongsights">
        <span class="text">
          Transforme sua Estratégia em Resultados:
          <p class="subtitle">
            Planejamento Inteligente com Visão Completa e Insights Profundos
          </p>
        </span>
        <div
          class="base-button"
          style="height: 48px; padding: 0; border: 1px solid #fb275d"
        >
          <span style="color: #fb275d">Experimente Já!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiCreation, mdiCheck } from "@mdi/js";

function openPage() {
  window.open("https://app.rhitos.com", "_blank");
}
const props = defineProps({
  isLongsights: Boolean,
  isRhitos: Boolean,
  isDuckcoutant: Boolean,
  isBillabletrack: Boolean,
  hostname: String,
  primaryColor: String,
});
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

.banner-card--longsights {
  background-color: #fb275d;
}

.banner-card {
  border-radius: 16px;
  display: flex;
  padding: 48px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  justify-content: space-between;
  span {
    font-family: Nunito;
    font-size: 24px;
    line-height: normal;
    color: var(--Base-White, #fff);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .text {
    color: var(--Base-White, #fff);
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .subtitle {
    color: var(--Base-White, #fff);
    font-family: Nunito;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .base-button {
    width: 164px;
    border-radius: 8px;
    border: 1px solid v-bind(primaryColor);
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
    background: #fff;

    /* Shadow/sm */
    box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1),
      0px 1px 2px 0px rgba(16, 24, 40, 0.06);
  }
}

.recommended-tag {
  display: flex;
  padding: 4px 2px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px 0px 0px 4px;
  background: #536eee;
  position: absolute;
  right: -0.333px;
  width: 109px;
  top: 25px;
  > span {
    color: var(--Base-White, #fff);
    text-align: center;

    /* Text xs / Bold */
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 150% */
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
