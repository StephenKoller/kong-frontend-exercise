import { defineStore } from 'pinia'

export const usePaginationStore = defineStore('pagination', {
  state: () => ({
    currentPage: 0,
  }),
  actions: {
    setPage(page: number) {
      this.currentPage = page
    },
  },
})
