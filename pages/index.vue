<template>
  <div class="content-wrapper">
    <BillabletrackView v-if="isBillabletrack" />
    <LongsightsView v-if="isLongsights" />
    <RhitosView v-if="isRhitos" />
    <DuckcountantView v-if="isDuckcountant" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  isLongsights: Boolean,
  isRhitos: Boolean,
  isDuckcountant: Boolean,
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

.banner-card--rhitos {
  background-color: #536eee !important;
  .base-button {
    border: none !important;
  }
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
