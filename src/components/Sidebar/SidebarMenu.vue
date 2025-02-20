<script setup lang="ts">
import { ref, shallowRef } from 'vue';
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
    icon: shallowRef(IconSchedule),
    name: 'schedule',
    text: 'Расписание',
  },
  {
    icon: shallowRef(IconSessions),
    name: 'sessions',
    text: 'Учебные сессии',
  },
  {
    icon: shallowRef(IconRooms),
    name: 'rooms',
    text: 'Список комнат',
  },
  {
    icon: shallowRef(IconUsers),
    name: 'users',
    text: 'Пользователи',
  },
  {
    icon: shallowRef(IconGroups),
    name: 'groups',
    text: 'Учебные группы',
  },
  {
    icon: shallowRef(IconDevices),
    name: 'devices',
    text: 'Список устройств',
  },
  {
    icon: shallowRef(IconSettings),
    name: 'settings',
    text: 'Настройки системы',
  },
  {
    icon: shallowRef(IconArchive),
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
