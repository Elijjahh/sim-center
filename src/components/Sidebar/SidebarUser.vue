<script setup lang="ts">
import useSidebarStore from '@/composables/sidebar';

const sidebar = useSidebarStore();
</script>

<template>
  <a href="#" class="sidebar-user" :class="{ 'sidebar-user_closed': sidebar.sidebarClosed }">
    <Transition name="sidebar-user">
      <div v-if="!sidebar.sidebarClosed" class="sidebar-user__info">
        <div class="sidebar-user__name">Барнаби Мармадюк</div>
        <div class="sidebar-user__role">Преподаватель</div>
      </div>
    </Transition>

    <div class="sidebar-user__img">БМ</div>
  </a>
</template>

<style scoped lang="scss">
.sidebar-user {
  cursor: pointer;
  display: flex;
  gap: 12px;

  border-radius: 16px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  background: rgb(255, 255, 255);
  padding: 12px;

  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.22);
  }

  &_closed,
  &:has(.sidebar-user-enter-from, .sidebar-user-leave-to) {
    padding: 0;
    box-shadow: none;
  }

  &_closed {
    border-radius: 100%;
  }

  &__info {
    flex-grow: 1;
  }

  .sidebar-user-enter-from,
  .sidebar-user-leave-to {
    opacity: 0;
  }

  .sidebar-user-enter-active,
  .sidebar-user-leave-active {
    overflow: hidden;
    transition: all 0.2s;
  }

  &__name {
    color: rgb(47, 49, 68);
    font-size: 15px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0px;
    text-wrap: nowrap;
  }

  &__role {
    color: rgba(47, 49, 68, 0.65);
    font-size: 13px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-wrap: nowrap;
  }

  &__img {
    flex-shrink: 0;
    flex-grow: 0;
    width: 48px;

    aspect-ratio: 1;
    border-radius: 100%;
    background: rgb(43, 78, 197);

    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
