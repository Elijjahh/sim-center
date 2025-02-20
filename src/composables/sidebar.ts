import { reactive, ref } from 'vue';

const sidebarClosed = ref(false);

function useSidebarStore() {
  function toggleSidebar() {
    sidebarClosed.value = !sidebarClosed.value;
  }

  return reactive({ sidebarClosed, toggleSidebar });
}

export default useSidebarStore;
