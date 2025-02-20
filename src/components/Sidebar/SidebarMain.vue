<script setup lang="ts">
import { markRaw, ref } from 'vue';

import { IconArrowLeft, IconFlagRu, IconFlagEn } from '@/components/Icon';
import useSidebarStore from '@/composables/sidebar.ts';

import SidebarLogout from '@/components/Sidebar/SidebarLogout.vue';
import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue';
import SidebarSelect from '@/components/Sidebar/SidebarSelect.vue';
import SidebarUser from '@/components/Sidebar/SidebarUser.vue';

const sidebar = useSidebarStore();

const options = ref([
  {
    label: 'Русский',
    icon: markRaw(IconFlagRu),
    value: 'ru',
  },
  {
    label: 'Английский',
    icon: markRaw(IconFlagEn),
    value: 'en',
  },
]);

const selectedOption = ref(options.value[0]);
</script>

<template>
  <aside class="sidebar" :class="{ sidebar_closed: sidebar.sidebarClosed }">
    <button class="sidebar__toggle" @click="sidebar.toggleSidebar">
      <div class="sidebar__toggle-icon">
        <IconArrowLeft />
      </div>
    </button>

    <div class="sidebar__logo">
      <div class="sidebar__logo-icon">
        <img src="@/assets/images/logo.svg" alt="" />
      </div>
      <Transition name="logo-text">
        <div v-if="!sidebar.sidebarClosed" class="sidebar__logo-text">Сим Центр</div>
      </Transition>
    </div>

    <SidebarMenu class="sidebar__menu" />

    <div class="sidebar__lower-part">
      <SidebarUser class="sidebar__user" />
      <SidebarLogout class="sidebar__logout" />
      <SidebarSelect v-model="selectedOption" :options="options" class="sidebar__select" />

      <Transition name="logo-text" mode="out-in">
        <div v-if="sidebar.sidebarClosed" class="sidebar__version sidebar__version_centered">
          v1.02
        </div>
        <div v-else class="sidebar__version">Версия 1.02</div>
      </Transition>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 274px;
  padding: 19px 12px;
  background: rgb(255, 255, 255);
  transition: all 0.3s;

  &_closed {
    width: 71px;
  }

  &__toggle {
    position: absolute;
    top: 30px;
    right: -12px;

    width: 24px;
    height: 24px;
    padding: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;
    background: rgb(47, 49, 68);
    cursor: pointer;

    transition: all 0.3s;
  }

  &_closed &__toggle {
    right: -17px;
  }

  &__toggle-icon {
    height: 16px;
    width: 16px;
    transition: all 0.3s;
    svg {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &_closed &__toggle-icon {
    transform: rotateY(180deg);
  }

  &__logo {
    width: fit-content;
    margin-inline: 28px;
    display: flex;
    align-items: center;
    gap: 14px;
    transition: all 0.3s;

    &:has(.logo-text-enter-from, .logo-text-leave-to) {
      margin: 0;
      gap: 0px;
    }
  }

  &_closed &__logo {
    margin: 0;
  }

  &__logo-icon {
    flex-shrink: 0;
  }

  &__logo-text {
    color: rgb(47, 49, 68);
    font-size: 24px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0px;
    text-wrap: nowrap;
  }

  .logo-text-enter-from,
  .logo-text-leave-to {
    opacity: 0;
  }

  .logo-text-enter-active,
  .logo-text-leave-active {
    overflow: hidden;
    transition: all 0.2s;
  }

  &__menu {
    margin-top: 43px;
  }

  &__lower-part {
    margin-top: auto;
  }

  &__user {
    margin-top: 18px;
  }

  &__logout {
    margin-top: 18px;
  }

  &__select {
    margin-top: 4px;
  }

  &__version {
    margin-top: 18px;
    color: rgba(47, 49, 68, 0.65);
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
    text-wrap: nowrap;

    &_centered {
      text-align: center;
    }
  }
}
</style>
