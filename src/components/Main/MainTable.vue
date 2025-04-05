<script setup lang="ts">
import { computed, ref } from 'vue';

const items = ref<Record<string, string | number>[]>([
  {
    id: 1,
    datetime: '15.07.2023, 12:00 - 13:00',
    status: 'Запланировано',
    moduleName: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    type: 'Урок',
    room: 'Комната 5, Комната 6, Комната 7',
    group: 'ТП-31',
  },
  {
    id: 2,
    datetime: '15.07.2023, 12:00 - 13:00',
    status: 'Запланировано',
    moduleName: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    type: 'Урок',
    room: 'Комната 5, Комната 6, Комната 7',
    group: 'ТП-31',
  },
  {
    id: 3,
    datetime: '15.07.2023, 12:00 - 13:00',
    status: 'Запланировано',
    moduleName: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    type: 'Урок',
    room: 'Комната 5, Комната 6, Комната 7',
    group: 'ТП-31',
  },
  {
    id: 4,
    datetime: '15.07.2023, 12:00 - 13:00',
    status: 'Запланировано',
    moduleName: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    type: 'Урок',
    room: 'Комната 5, Комната 6, Комната 7',
    group: 'ТП-31',
  },
]);

function getRowWithoutId(row: Record<string, string | number>) {
  const newRow = { ...row };
  delete newRow.id;
  return newRow;
}

const sortKey = ref('');

function sortItems(key: string) {
  items.value.sort((a, b) => {
    return a[key] - b[key];
  });
}

const sortedItems = computed(() => {
  const newArray = [...items.value];

  return newArray.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
});
</script>

<template>
  <div class="main-table">
    <table class="main-table__table">
      <thead>
        <tr>
          <th>
            <div class="main-table__th-cell">Дата и время</div>
          </th>
          <th>
            <div class="main-table__th-cell">Статус</div>
          </th>
          <th>
            <div class="main-table__th-cell">Название учебного модуля</div>
          </th>
          <th>
            <div class="main-table__th-cell">Тип сессии</div>
          </th>
          <th>
            <div class="main-table__th-cell">Комната</div>
          </th>
          <th>
            <div class="main-table__th-cell">Группа</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in items" :key="row.id">
          <td v-for="cell in getRowWithoutId(row)" :key="cell">
            <div class="main-table__td-cell">
              {{ cell }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.main-table {
  &__table {
    border-collapse: collapse;
    width: 100%;

    border-radius: 12px;
    overflow: hidden;
  }

  td {
    border: none;
  }

  thead tr {
    background: rgb(245, 247, 249);
  }

  tbody tr:nth-child(2n) {
    background: rgb(245, 247, 249);
  }

  &__th-cell {
    color: rgb(47, 49, 68);
    font-size: 17px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0px;
    padding: 10px 16px;
  }

  &__td-cell {
    color: rgb(47, 49, 68);
    font-size: 15px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    padding: 10px 16px;
  }
}
</style>
