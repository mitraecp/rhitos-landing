<template>
  <div class="main">
    <NuxtLoadingIndicator
      color="
				red
			"
    />
    <div class="header">
      <img
        src="https://raw.githubusercontent.com/mitraecp/frontend-resoucers/gc/assets/mitra_sheet/rhitos_horizontal.png"
        height="41"
      />
      <div class="header-menu">
        <span>Home</span>
        <span>Funcionalidades</span>
        <span>Planos e Preços</span>
      </div>
      <div class="base-button">
        <span>Testar grátis</span>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
}

.main {
  padding: 0 114px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.header-menu {
  display: flex;
  gap: 32px;
  cursor: pointer;
  span {
    color: var(--gray-20700, #313854);
    text-align: right;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>

<style>
body {
  margin: 0;
}

.base-button {
  border-radius: 8px;
  border: 1px solid #536eee;
  background: #536eee;
  display: flex;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  width: 137px;
  gap: 8px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  > span {
    color: var(--Base-White, #fff);

    /* Text md/Medium */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
}
</style>
