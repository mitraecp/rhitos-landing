<template>
  <div class="main">
    <NuxtLoadingIndicator
      color="
				red
			"
    />
    <div class="header">
      <img
        :src="`https://raw.githubusercontent.com/mitraecp/frontend-resoucers/gc/assets/mitra_sheet/${hostname}_horizontal.png`"
        height="41"
      />
      <div class="header-menu">
        <span>Home</span>
        <span>Funcionalidades</span>
        <span>Planos e Preços</span>
      </div>
      <div class="base-button" @click="openPage">
        <span>Testar grátis</span>
      </div>
    </div>
    <NuxtPage
      :is-longsights="hostname === `longsights`"
      :is-rhitos="hostname === `rhitos`"
      :is-duckcoutant="hostname === `duckcoutant`"
      :is-billabletrack="hostname === `billabletrack`"
      :primary-color="color"
      :hostname="hostname"
    />
    <div class="footer">
      <img
      :src="`https://raw.githubusercontent.com/mitraecp/frontend-resoucers/gc/assets/mitra_sheet/${hostname}_horizontal.png`"
        height="41"
      />
      <span
        >Copyright © {{ new Date().getFullYear() }} - All right reserved</span
      >
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
// const domain = window.location.hostname.split(".")[0];
const { hostname } = useRequestURL();
// const hostname = "longsights";

function openPage() {
  window.open("https://app.rhitos.com", "_blank");
}

const color = computed(() => {
  const hostname = "longsights";
  if (hostname === "longsights") {
    return "#00CA72";
  } else if (hostname === "duckcoutant") {
    return "#54BF4C";
  } else if (hostname === "billabletrack") {
    return "#117388";
  } else if (hostname === "rhitos") {
    return "#536EEE";
  }
});
</script>

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

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  span {
    color: var(--gray-20700, #313854);
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>

<style>
body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-button {
  border-radius: 8px;
  border: 1px solid v-bind(color);
  background: v-bind(color);
  display: flex;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  width: 137px;
  cursor: pointer;
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

.text-medium {
  color: var(--gray-20900, #0e1428);
  /* Text xl/Semibold */
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
}

.text-xl {
  color: var(--gray-20900, #0e1428);

  /* Display md/Bold */
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;
}

.text-light {
  color: var(--gray-20600, #424967);

  /* Text xs/Normal */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  margin: 0;
}

p {
  margin: 0;
}

.light-border-b {
  border-bottom: 1px solid #e7e8f0;
}

.text-subtitle {
  color: var(--gray-20700, #313854);

  /* Text md/Normal */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

.text-tile {
  color: var(--gray-20700, #313854);

  /* Text md/Normal */
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
</style>
