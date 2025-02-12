<template>
  <button
    :disabled="disabled"
    @click="paginationStore.setPage(paginationStore.currentPage + 1)"
  >
    <svg
      fill="none"
      height="44"
      viewBox="0 0 44 44"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="22"
        cy="22"
        r="21.5"
        :stroke="activeColor"
      />
      <path
        d="M29.1543 22.4961L25.3574 18.6992V21.8457H15.0566V23.1465H25.3574V26.293L29.1543 22.4961Z"
        :fill="activeColor"
      />
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { usePaginationStore } from '@/stores/pagination'

const paginationStore = usePaginationStore()

const props = defineProps<{
  disabled: boolean
}>()

const activeColor = ref<string>('#A6C6FF')

if (props.disabled) {
  activeColor.value = 'black'
} else {
  activeColor.value = '#A6C6FF'
}
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
}
</style>
