<script setup lang="ts">
import { IconLogout } from '@/components/Icon';
import useSidebarStore from '@/composables/sidebar';

const sidebar = useSidebarStore();
</script>

<template>
  <button class="sidebar-logout">
    <span class="sidebar-logout__icon">
      <IconLogout color="rgb(153, 153, 153)" />
    </span>
    <Transition name="menu-text">
      <span v-if="!sidebar.sidebarClosed" class="sidebar-logout__text">Выход</span>
    </Transition>
  </button>
</template>

<style scoped lang="scss">
.sidebar-logout {
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 16px;

  background: none;
  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    background: rgb(244, 244, 244);
  }

  &:has(.menu-text-enter-from, .menu-text-leave-to) {
    gap: 0px;
  }

  &__icon {
    flex-shrink: 0;
    height: 24px;
    width: 24px;

    svg {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &__text {
    color: rgb(47, 49, 68);

    font-size: 15px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0px;
    text-wrap: nowrap;

    transition: all 0.3s;
  }

  .menu-text-enter-from,
  .menu-text-leave-to {
    opacity: 0;
  }

  .menu-text-enter-active,
  .menu-text-leave-active {
    overflow: hidden;
    transition: all 0.2s;
  }
}
</style>
