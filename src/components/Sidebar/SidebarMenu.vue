<script setup lang="ts">
import { ref } from 'vue';
import {
  IconSchedule,
  IconSessions,
  IconRooms,
  IconUsers,
  IconGroups,
  IconDevices,
  IconSettings,
  IconArchive,
} from '@/components/Icon';
import SidebarMenuItem from '@/components/Sidebar/SidebarMenuItem.vue';

const menu = ref([
  {
    icon: IconSchedule,
    name: 'schedule',
    text: 'Расписание',
  },
  {
    icon: IconSessions,
    name: 'sessions',
    text: 'Учебные сессии',
  },
  {
    icon: IconRooms,
    name: 'rooms',
    text: 'Список комнат',
  },
  {
    icon: IconUsers,
    name: 'users',
    text: 'Пользователи',
  },
  {
    icon: IconGroups,
    name: 'groups',
    text: 'Учебные группы',
  },
  {
    icon: IconDevices,
    name: 'devices',
    text: 'Список устройств',
  },
  {
    icon: IconSettings,
    name: 'settings',
    text: 'Настройки системы',
  },
  {
    icon: IconArchive,
    name: 'archive',
    text: 'Архив',
  },
]);
const activeMenuItem = ref('schedule');
</script>

<template>
  <ul class="sidebar-menu">
    <SidebarMenuItem
      v-for="item in menu"
      :key="item.text"
      :icon="item.icon"
      :text="item.text"
      :is-active="item.name === activeMenuItem"
    />
  </ul>
</template>

<style scoped lang="scss">
.sidebar-menu {
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
