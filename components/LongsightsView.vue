<template>
  <div class="content-wrapper">
    <div class="home-main" style="height: 396px">
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

    <div id="features-anchor"></div>

    <div class="home-main" style="height: 643px">
      <div class="home-main__img-cards">
        <img src="~~/assets/screenshot_01_longsights.png" />
        <img src="~~/assets/screenshot_01_longsights.png" />
      </div>

      <div
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

    <div id="plans-and-prices-anchor"></div>

    <div class="home-main plans-and-prices">
      <div class="home-main__left-card" style="width: auto; height: auto">
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
                <span class="text-tile">Até 10 usuários</span>
              </div>
              <div class="list-content">
                <svg-icon
                  color="var(--primaryColor)"
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
            border: `1px solid var(--primaryColor)`,
            backgroundColor: `#F5FAFF`,
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
                >R$ 1400,00 <i class="text-light">/mês</i></span
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
                <span class="text-tile">Até 30 usuários</span>
              </div>
              <div class="list-content">
                <svg-icon
                  color="var(--primaryColor)"
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
          Transforme sua Estratégia em Resultados:
          <p class="subtitle">
            Planejamento Inteligente com Visão Completa e Insights Profundos
          </p>
        </span>
        <div
          class="base-button"
          @click="openPage"
          style="height: 48px; padding: 0"
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
</script>

<style scoped></style>
