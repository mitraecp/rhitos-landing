<template>
  <div class="content-wrapper">
    <div class="home-main" style="height: 298px">
      <div class="home-main__left-card">
        <span class="title"
          >Fluxo de caixa simplificado e intuitivo com Inteligência
          Artificial.</span
        >
        <span class="subtitle"
          >Conecte-se ao Futuro Financeiro: Nosso SaaS simplifica o fluxo de
          caixa com inteligência artificial, enquanto se integra perfeitamente
          ao seu ERP. Visualize seu histórico financeiro, previsões de saldo e
          padrões de dados com facilidade. Gerencie inadimplências e antecipe-se
          aos desafios financeiros com nossa solução intuitiva.
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
        <img src="~~/assets/fluxo_de_caixa_02.png" />
        <img src="~~/assets/fluxo_de_caixa_01.png" />
      </div>

      <div
        style="display: flex; flex-direction: column; gap: 32px; width: 620px"
      >
        <div class="right-content__features">
          <img src="~~/assets/connection.png" />
          <span class="title">Conexão perfeita com seu ERP</span>
          <span class="text"
            >Nosso SaaS é totalmente integrado ao seu sistema ERP, permitindo
            uma sincronização contínua e automática de dados financeiros. Isso
            proporciona uma visão unificada e em tempo real das suas operações
            financeiras, simplificando ainda mais sua gestão.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/insights_light_green.png" />
          <span class="title">Insights Financeiros em Tempo Real</span>
          <span class="text"
            >Tenha acesso instantâneo ao seu histórico financeiro e previsões de
            saldo para os próximos dias. Nossa plataforma oferece uma
            visualização clara e intuitiva dos seus dados, permitindo tomar
            decisões informadas e antecipar necessidades futuras com
            confiança.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/hearth_light_green.png" />
          <span class="title"
            >Inteligência Artificial para Sucesso Financeiro</span
          >
          <span class="text"
            >Explore o potencial da inteligência artificial em sua gestão
            financeira. Nossa IA permite que você faça perguntas detalhadas
            sobre seus dados financeiros, fornecendo insights valiosos e
            identificando padrões ocultos.</span
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
            backgroundColor: `#F6FEF9`,
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
          IA Financeira:
          <p class="subtitle">
            Descubra Insights Valiosos em seus Dados Financeiros
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

definePageMeta({
  middleware: (_from, to) => {
    if (to.fullPath === "/fluxo-de-caixa") {
      return "/";
    }
  },
});

const emit = defineEmits(["open-page"]);

function openPage() {
  emit("open-page");
}
</script>

<style scoped></style>
