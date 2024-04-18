<template>
  <div
    class="content-wrapper"
    :style="{
      '--primaryColor': '#FFB800',
    }"
  >
    <div class="home-main" style="height: 369px">
      <div class="home-main__left-card">
        <span class="title"
          >Contabilidade Inteligente ao seu Alcance: Resumo Contábil e Análise
          de Dados com IA.</span
        >
        <span class="subtitle"
          >Alavanque sua Gestão Contábil: Conecte-se ao Futuro da Contabilidade
          com Nosso SaaS. Integração perfeita com seu ERP, acesso instantâneo
          aos principais indicadores contábeis - DRE, índices contábeis e DMPL.
          Utilize a IA para desvendar padrões nos seus dados contábeis e obtenha
          insights personalizados para impulsionar o crescimento do seu negócio.
        </span>
        <div class="base-button" @click="openPage">
          <span>Testar grátis</span>
        </div>
      </div>
      <img src="~~/assets/duckcountant_home_01.png" width="512" height="288" />
    </div>

    <div id="features-anchor"></div>

    <div class="home-main" style="height: 643px">
      <div class="home-main__img-cards">
        <img src="~~/assets/resumo_contabil_01.png" />
        <img src="~~/assets/resumo_contabil_02.png" />
      </div>

      <div
        style="display: flex; flex-direction: column; gap: 32px; width: 620px"
      >
        <div class="right-content__features">
          <img src="~~/assets/connection_orange.png" />
          <span class="title">Integração Completa com seu ERP</span>
          <span class="text"
            >Simplificamos o processo de coleta de dados de satisfação dos
            colaboradores com nossa plataforma intuitiva. Configure e envie
            pesquisas facilmente para toda a equipe, garantindo uma visão
            abrangente do clima organizacional em questão de minutos.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/insights_orange.png" />
          <span class="title"
            >Análise Avançada com Inteligência Artificial</span
          >
          <span class="text"
            >Capacite seus líderes com insights personalizados sobre a
            satisfação de suas equipes. Após a coleta dos dados, nossa
            plataforma gera resumos detalhados e relevantes, permitindo que os
            líderes conduzam reuniões one on one mais eficazes e orientadas para
            o desenvolvimento.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/hearth_orange.png" />
          <span class="title">Contabilidade Simplificada</span>
          <span class="text"
            >Nossa plataforma foi projetada para ser intuitiva e fácil de usar.
            Mesmo com recursos avançados como integração com ERP e análise de
            IA, você encontrará uma experiência de usuário simples e acessível.
            Simplifique sua contabilidade e libere tempo para se concentrar no
            que realmente importa: fazer seu negócio prosperar.</span
          >
        </div>
      </div>
    </div>

    <div id="plans-and-prices-anchor"></div>

    <div class="home-main plans-and-prices">
      <div class="home-main__left-card" style="width: auto; height: auto">
        <span class="title">Planos e Preços</span>
        <span class="banner"
          >Preços competitivos para sua transformação de Fluxo de Caixa</span
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
                >R$ 500,00 <i class="text-light">/mês</i></span
              >
              <p class="text-light">30 dias de teste</p>
            </div>
          </div>
          <div class="base-button" @click="openPage" style="width: 100%">
            <span>Começar agora</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <span class="text-subtitle">O Lite inclui:</span>
            <div>
              <div class="list-content">
                <svg-icon
                  color="var(--primaryColor)"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Até 3 usuários</span>
              </div>
              <div class="list-content">
                <svg-icon
                  color="var(--primaryColor)"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Até 1mi registros</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="plan-card"
          :style="{
            border: `1px solid var(--primaryColor)`,
            backgroundColor: `#FFFCF5`,
          }"
          style="position: relative"
        >
          <div
            class="recommended-tag"
            :style="{
              backgroundColor: 'var(--primaryColor)',
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
                >R$ 1000,00 <i class="text-light">/mês</i></span
              >
              <p class="text-light">30 dias de teste</p>
            </div>
          </div>
          <div class="base-button" @click="openPage" style="width: 100%">
            <span>Começar agora</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <span class="text-subtitle">O Pro inclui:</span>
            <div>
              <div class="list-content">
                <svg-icon
                  color="var(--primaryColor)"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Até 10 usuários</span>
              </div>
              <div class="list-content">
                <svg-icon
                  color="var(--primaryColor)"
                  :path="mdiCheck"
                  type="mdi"
                  size="20px"
                ></svg-icon>
                <span class="text-tile">Até 5mi registros</span>
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
                color="var(--primaryColor)"
                :path="mdiCreation"
                type="mdi"
                size="82px"
              ></svg-icon>
            </div>
          </div>
          <div class="base-button" @click="openPage" style="width: 100%">
            <span>Começar agora</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px">
            <div>
              <div class="list-content">
                <svg-icon
                  color="var(--primaryColor)"
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
      <div class="banner-card banner-card--longsights">
        <span class="text">
          Conecte-se ao Futuro da Contabilidade com
          <span class="subtitle">IA Integrada</span>
        </span>
        <div
          class="base-button"
          @click="openPage"
          style="height: 48px; padding: 0; background-color: #fff"
        >
          <span>Experimente Já!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiCreation, mdiCheck } from "@mdi/js";

const emit = defineEmits(["open-page"]);

function openPage() {
  emit("open-page");
}

definePageMeta({
  middleware: (_from, to) => {
    if (to.fullPath === "/resumo-contabil") {
      return "/";
    }
  },
});
</script>

<style scoped>
.base-button {
  background-color: var(--primaryColor);
  border: none !important;
}
</style>
