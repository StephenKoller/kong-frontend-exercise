<template>
  <div class="pagination">
    <BackArrowButton :disabled="paginationStore.currentPage <= 1" />

    <div class="pagination-words">
      <span class="emphasis">{{ resultsRange.start }} to {{ resultsRange.end }}</span>
      <span> of {{ totalItems }} services</span>
    </div>

    <ForwardArrowButton :disabled="forwardButtonDisabled" />
  </div>
</template>

<script lang="ts" setup>

import { computed } from 'vue'
import { usePaginationStore } from '@/stores/pagination'
import BackArrowButton from './BackArrowButton.vue'
import ForwardArrowButton from './ForwardArrowButton.vue'

const props = defineProps<{
  itemsOnCurrentPage: number,
  totalItems: number
}>()

const paginationStore = usePaginationStore()

const resultsRange = computed(() => {
  const start = (paginationStore.currentPage * 9) + 1
  return {
    start,
    end: start + props.itemsOnCurrentPage - 1,
  }
})

const forwardButtonDisabled = computed(() => resultsRange.value.end >= props.totalItems)
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

.pagination-words {
  display: flex;
  justify-content: center;
  width: 200px;

  :nth-child(2) {
      margin-left: 6px;
  }
}

.emphasis {
  color: #3C4557;
}

button {
  background-color: transparent;
  border: none;
}
</style>
