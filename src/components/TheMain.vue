<script setup lang="ts">
import { IconFilter, IconSearch, IconSort } from '@/components/Icon';
</script>

<template>
  <main class="main">
    <div class="main__header">
      <h1 class="main__title">Учебные сессий</h1>

      <div class="main__header-right">
        <div class="main__search">
          <div class="main__search-icon">
            <IconSearch />
          </div>
          <input type="text" class="main__search-input" placeholder="Поиск" />
        </div>

        <button class="main__filter">
          <IconFilter />
        </button>
        <button class="main__sort">
          <IconSort />
        </button>
        <button class="main__btn">Создать</button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 8px 8px 8px 0;
  padding: 16px 24px 24px;
  width: 100%;
  border-radius: 12px;
  background: rgb(255, 255, 255);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header-right {
    display: flex;
    gap: 14px;
  }

  &__title {
    color: rgb(47, 49, 68);
    font-size: 24px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0px;
  }

  &__search {
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    border: 1px solid rgb(224, 224, 224);
    border-radius: 12px;
    background: rgb(255, 255, 255);

    &:hover,
    &:has(:focus) {
      border: 1px solid rgb(201, 201, 201);
    }
  }

  &__search-icon {
    width: 24px;
    height: 24px;

    svg {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &__search-input,
  &__search-input::placeholder {
    border: none;

    color: rgb(47, 49, 68);

    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
  }

  &__filter,
  &__sort {
    aspect-ratio: 1;
    padding: 10px;
    border-radius: 12px;
    background: rgb(244, 244, 244);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: rgb(227, 227, 227);
    }

    svg {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }

  &__btn {
    padding: 10px 24px;
    border-radius: 12px;
    background: rgb(55, 97, 243);

    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: rgb(43, 78, 197);
    }
  }
}
</style>
