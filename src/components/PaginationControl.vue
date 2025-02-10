<template>
  <div class="pagination">
    <button
      :disabled="paginationStore.currentPage <= 1"
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
          stroke="black"
          stroke-opacity="0.1"
        />
        <path
          d="M14.8457 22.4961L18.6426 18.6992V21.8457H28.9434V23.1465H18.6426V26.293L14.8457 22.4961Z"
          fill="black"
          fill-opacity="0.25"
        />
      </svg>
    </button>

    <div class="pagination-words">
      <span class="emphasis">{{ resultsRange.start }} to {{ resultsRange.end }}</span> of {{ totalPages * 9 }} services
    </div>

    <button
      :disabled="paginationStore.currentPage >= totalPages"
      @click="paginationStore.setPage(paginationStore.currentPage + 1)"
    >
      <img
        alt="right arrow"
        src="/public/icon-forward-arrow.svg"
      >
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { usePaginationStore } from '@/stores/pagination'

const props = defineProps<{
  itemsOnCurrentPage: number,
  totalPages: number
}>()

const paginationStore = usePaginationStore()

const resultsRange = computed(() => {
  return {
    start: (paginationStore.currentPage * 9) - 8,
    end: paginationStore.currentPage + props.itemsOnCurrentPage,
  }
})
</script>

<style lang="scss" scoped>
.pagination {
  align-items: center;
  color: #707888;
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.emphasis {
  color: #3C4557;
}

button {
  background-color: none;
  border: none;
}
</style>
