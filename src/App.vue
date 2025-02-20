<script setup lang="ts">
import SidebarMain from '@/components/Sidebar/SidebarMain.vue';
import TheMain from '@/components/TheMain.vue';
</script>

<template>
  <div class="main-grid">
    <SidebarMain />
    <TheMain />
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
