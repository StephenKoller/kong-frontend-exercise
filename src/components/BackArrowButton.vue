<template>
  <button
    :disabled="paginationStore.currentPage === 0"
    @click="paginationStore.setPage(paginationStore.currentPage - 1)"
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
        d="M14.8457 22.4961L18.6426 18.6992V21.8457H28.9434V23.1465H18.6426V26.293L14.8457 22.4961Z"
        :fill="activeColor"
        fill-opacity="0.25"
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