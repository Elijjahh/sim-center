<script setup lang="ts">
import useSidebarStore from '@/composables/sidebar';
import type { Component } from 'vue';

const { icon, text, isActive } = defineProps<{
  icon: Component;
  text: string;
  isActive: boolean;
}>();

const sidebar = useSidebarStore();
</script>

<template>
  <li class="sidebar-menu-item" :class="{ 'sidebar-menu-item__active': isActive }">
    <a href="#" class="sidebar-menu-item__link">
      <span class="sidebar-menu-item__icon">
        <component :is="icon" :color="isActive ? 'rgb(255, 255, 255)' : 'rgb(153, 153, 153)'" />
      </span>
      <Transition name="menu-text">
        <span v-if="!sidebar.sidebarClosed" class="sidebar-menu-item__text">{{ text }}</span>
      </Transition>
    </a>
  </li>
</template>

<style scoped lang="scss">
.sidebar-menu-item {
  &__link {
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 16px;
    transition: all 0.3s;

    &:hover {
      background: rgb(244, 244, 244);
    }

    &:has(.menu-text-enter-from, .menu-text-leave-to) {
      gap: 0px;
    }
  }

  &__active &__link {
    background: rgb(55, 97, 243);
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

  &__active &__text {
    color: white;
  }
}
</style>
