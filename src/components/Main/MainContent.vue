<script setup lang="ts">
import MainHeader from './MainHeader.vue';
import MainTable from './MainTable.vue';
</script>

<template>
  <main class="main">
    <MainHeader />
    <MainTable class="main__table" />
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 8px 8px 8px 0;
  padding: 16px 24px 24px;
  width: 100%;
  border-radius: 12px;
  background: rgb(255, 255, 255);

  &__table {
    margin-top: 16px;
  }
}
</style>
