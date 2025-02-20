<script setup lang="ts">
import { ref, type Component } from 'vue';
import { OnClickOutside } from '@vueuse/components';

import { IconArrowDown } from '@/components/Icon';
import useSidebarStore from '@/composables/sidebar';

const sidebar = useSidebarStore();

type Option = {
  icon: Component;
  label: string;
  value: string;
};

const { options } = defineProps<{
  options: Option[];
}>();

const modelValue = defineModel<Option>();
const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
function selectOption(option: Option) {
  modelValue.value = option;
  isOpen.value = false;
}
</script>

<template>
  <OnClickOutside @trigger="isOpen = false">
    <div class="sidebar-select" :class="{ 'sidebar-select_closed': sidebar.sidebarClosed }">
      <div
        class="sidebar-select__wrapper"
        @click="toggleDropdown"
        :class="{ 'sidebar-select__wrapper_active': isOpen }"
      >
        <div class="sidebar-select__selected">
          <div class="sidebar-select__icon">
            <component :is="modelValue?.icon" />
          </div>
          <Transition name="sidebar-select">
            <div v-if="!sidebar.sidebarClosed" class="sidebar-select__label">
              {{ modelValue?.label }}
            </div>
          </Transition>
        </div>

        <Transition name="sidebar-select">
          <div v-if="!sidebar.sidebarClosed" class="sidebar-select__arrow">
            <IconArrowDown></IconArrowDown>
          </div>
        </Transition>
      </div>

      <Transition name="select-options">
        <div v-if="isOpen" class="sidebar-select__options">
          <div
            class="sidebar-select__option"
            v-for="option in options"
            :key="option.value"
            :class="{ 'sidebar-select__option_selected': option.value === modelValue?.value }"
            @click="selectOption(option)"
          >
            <div class="sidebar-select__selected">
              <div class="sidebar-select__icon">
                <component :is="option.icon" />
              </div>
              <div class="sidebar-select__label">{{ option.label }}</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </OnClickOutside>
</template>

<style scoped lang="scss">
.sidebar-select {
  position: relative;
  cursor: pointer;

  &_closed {
  }

  &__wrapper {
    padding: 12px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 12px;
    background: rgb(255, 255, 255);

    &:hover {
      border: 1px solid rgb(201, 201, 201);
    }
  }

  &:has(.sidebar-select__options) &__wrapper {
    border: 1px solid rgb(201, 201, 201);
  }

  &__selected {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border: 1px solid rgb(219, 225, 232);
    border-radius: 4px;

    overflow: hidden;

    svg {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__label {
    color: rgb(47, 49, 68);

    font-size: 15px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0px;
  }

  &_closed &__label {
    opacity: 0;
  }

  .sidebar-select-enter-from,
  .sidebar-select-leave-to {
    opacity: 0;
  }

  .sidebar-select-enter-active,
  .sidebar-select-leave-active {
    overflow: hidden;
    transition: all 0.2s;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    height: 24px;
  }

  &_closed &__arrow {
    opacity: 0;
  }

  &__wrapper_active &__arrow {
    transform: translateY(-50%) rotate(180deg);
  }

  .select-options-enter-from {
    opacity: 0;
    transform: translateY(5px);
  }

  .select-options-enter-active,
  .select-options-leave-active {
    transition: all 0.2s;
  }

  .select-options-leave-to {
    opacity: 0;
  }

  &__options {
    position: absolute;
    bottom: calc(100% + 4px);
    left: 0;
    right: 0;
    padding: 4px;
    border: 1px solid rgb(224, 224, 224);
    border-radius: 12px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 10;
  }

  &_closed &__options {
    padding: 0;
  }

  &__wrapper_active &__options {
    display: block;
  }

  &__option {
    padding: 12px;
    border-radius: 12px;
    transition: all 0.3s;

    &_selected {
      font-weight: bold;
    }
  }

  &__option:hover {
    background: rgb(244, 244, 244);
  }
}
</style>
