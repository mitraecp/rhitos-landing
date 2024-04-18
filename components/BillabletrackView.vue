<template>
  <div class="content-wrapper">
    <div class="home-main" style="height: 396px">
      <div class="home-main__left-card">
        <span class="title"
          >Alcance Eficiência em Projetos Complexos: SaaS para Gestão com
          Faturamento por Hora e Indicadores Estratégicos.</span
        >
        <span class="subtitle"
          >Desbloqueie o Potencial dos seus Projetos: Simplifique a Gestão com
          Controle de Horas Faturáveis e Indicadores Estratégicos. Otimize o
          Desempenho e Antecipe Desafios em Projetos Complexos com Nossa
          Plataforma Integrada.
        </span>
        <div class="base-button" @click="openPage">
          <span>Testar grátis</span>
        </div>
      </div>
      <img src="~~/assets/billabletrack_home_01.png" width="512" height="288" />
    </div>

    <div id="features-anchor"></div>

    <div class="home-main" style="height: 665px">
      <div class="home-main__img-cards">
        <img src="~~/assets/billabletrack_sample_01.png" />
        <img src="~~/assets/billabletrack_sample_02.png" />
      </div>

      <div
        style="display: flex; flex-direction: column; gap: 32px; width: 620px"
      >
        <div class="right-content__features">
          <img src="~~/assets/time.png" />
          <span class="title">Gestão de Horas Eficiente</span>
          <span class="text"
            >Nosso SaaS oferece uma maneira eficaz de acompanhar e gerenciar as
            horas faturáveis dos projetos. Com recursos avançados de controle de
            tempo, você pode registrar e monitorar o tempo dedicado a cada
            tarefa, garantindo uma faturação precisa e transparente para seus
            clientes.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/insights_green.png" />
          <span class="title">Insights Estratégicos</span>
          <span class="text"
            >Nossa plataforma fornece uma ampla gama de indicadores estratégicos
            para ajudá-lo a entender e otimizar o desempenho dos seus projetos.
            Desde métricas de produtividade até análises de rentabilidade, você
            terá acesso às informações necessárias para tomar decisões
            informadas e impulsionar o sucesso dos seus projetos.</span
          >
        </div>
        <div class="right-content__features">
          <img src="~~/assets/thropy.png" />
          <span class="title">Previsão e Otimização</span>
          <span class="text"
            >Utilize nossos recursos avançados para antecipar desafios e
            otimizar o desempenho dos seus projetos. Com uma análise detalhada
            dos dados e padrões de projeto, nossa plataforma permite que você
            identifique áreas de melhoria e tome medidas proativas para garantir
            o sucesso e a eficiência em projetos complexos.</span
          >
        </div>
      </div>
    </div>

    <div id="plans-and-prices-anchor"></div>

    <div class="home-main plans-and-prices">
      <div class="home-main__left-card" style="width: auto; height: auto">
        <span class="title">Planos e Preços</span>
        <span class="banner"
          >Preços competitivos para sua transformação de Gestão de
          Projetos</span
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
                >R$ 600,00 <i class="text-light">/mês</i></span
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
      <div class="banner-card">
        <span class="text">
          Potencialize seus Projetos:
          <p class="text">
            Simplifique a Gestão com Controle de Horas Faturáveis e Insights
            Estratégicos
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
