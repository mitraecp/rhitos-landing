<template>
  <div
    class="main"
    :style="{
      '--primaryColor': color,
    }"
  >
    <NuxtLoadingIndicator
      color="
				red
			"
    />
    <div class="header">
      <img
        :src="`https://raw.githubusercontent.com/mitraecp/frontend-resoucers/gc/assets/mitra_sheet/${domain}_horizontal.png`"
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
      :is-longsights="domain === `longsights`"
      :is-rhitos="domain === `rhitos`"
      :is-duckcountant="domain === `duckcountant`"
      :is-billabletrack="domain === `billabletrack`"
      :primary-color="color"
      :domain="domain"
    />
    <div class="footer">
      <img
        :src="`https://raw.githubusercontent.com/mitraecp/frontend-resoucers/gc/assets/mitra_sheet/${domain}_horizontal.png`"
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
const domainRefs = ["longsights", "duckcountant", "billabletrack", "rhitos"];

const { hostname } = useRequestURL();
const domain = hostname === "localhost" ? domainRefs[0] : hostname.split(".")[1];

console.log("hostname", domain);
// const hostname = "longsights";

function openPage() {
  window.open(`https://app.${domain}.com`, "_blank");
}

const color = computed(() => {
  switch (domain) {
    case "longsights":
      return "#00CA72";
    case "duckcountant":
      return "#54BF4C";
    case "billabletrack":
      return "#117388";
    case "rhitos":
      return "#536EEE";
    default:
      return "";
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
  background-color: v-bind(color);
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
  background-color: var(--primaryColor);
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
    border: 1px solid var(--primaryColor);
    background: #fff;

    /* Shadow/xs */
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    span {
      color: var(--primaryColor);

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
    color: var(--primaryColor);
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
  background: var(--primaryColor);
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
