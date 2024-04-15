<template>
  <div class="content-wrapper">
    <div class="home-main" style="height: 297px">
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
    <div class="home-main" style="height: 643px">
      <div class="home-main__img-cards">
        <img src="~~/assets/screenshot_01_rhitos.png" />
        <img src="~~/assets/screenshot_02_rhitos.png" />
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
                >R$ 400,00 <i class="text-light">/mês</i></span
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
      <div class="banner-card banner-card--rhitos">
        <span class="text">
          Simplifique Pesquisas de Satisfação e Capacite sua Equipe com
          <p class="subtitle">Insights Inteligentes</p>
        </span>
        <div
          class="base-button"
          @click="openPage"
          style="height: 48px; padding: 0;"
        >
          <span>Experimente Já!</span>
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
</script>

<style scoped>

</style>
