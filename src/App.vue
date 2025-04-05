<script setup lang="ts">
import SidebarMain from '@/components/Sidebar/SidebarMain.vue';
import MainContent from '@/components/Main/MainContent.vue';
</script>

<template>
  <div class="main-grid">
    <SidebarMain />
    <MainContent />
  </div>
</template>

<style scoped lang="scss">
.main-grid {
  min-height: 100vh;
  display: flex;
  gap: 8px;

  background: rgb(244, 244, 248);
}
</style>
