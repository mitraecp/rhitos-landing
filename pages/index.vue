<template>
  <div class="home-main">
    <div class="home-main__left-card">
      <span class="title">O Caminho para Colaboradores Mais Felizes.</span>
      <span class="subtitle"
        >Automatize Pesquisas de Satisfação, Capacite Líderes com Insights
        Personalizados e Acompanhe a Evolução do Bem-Estar dos Colaboradores ao
        Longo do Tempo.
      </span>
      <div class="base-button">
        <span>Testar grátis</span>
      </div>
    </div>
    <div class="video-wrapper"></div>
  </div>
</template>

<script setup lang="ts"></script>

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

.home-main {
  display: flex;
  gap: 64px;
}
.video-wrapper {
  width: 528px;
  height: 297px;
  flex-shrink: 0;
  background-color: grey;
}
</style>
