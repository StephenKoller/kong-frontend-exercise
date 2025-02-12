<template>
  <section class="service-catalog">
    <header>
      <div class="left">
        <h1>Service Hub</h1>
        <h3>
          Organize services, manage and track versioning and API service
          documentation. <a href="#">Learn more</a>
        </h3>
      </div>
      <div class="right">
        <div class="search-wrapper">
          <img
            alt="magnifying glass icon"
            class="search-icon"
            src="/public/icon-search.svg"
          >
          <input
            v-model.trim="searchQuery"
            class="search-input"
            data-testid="search-input"
            placeholder="Search"
            @keydown="handleSearch"
          >
        </div>
        <button
          class="create-service"
          @click="handleCreateService"
        >
          <img
            alt="plus icon"
            src="/public/icon-plus.svg"
          >
          Service Package
        </button>
      </div>
    </header>
    <main>
      <div
        v-if="loading"
        class="results"
      >
        <SkeletonCard
          v-for="i in 9"
          :key="i"
        />
      </div>
      <div v-else>
        <div
          v-if="servicesPage.length"
          class="results"
        >
          <ServiceCard
            v-for="service in servicesPage"
            :id="service.id"
            :key="service.id"
            :configured="service.configured"
            :description="service.description"
            :metrics="service.metrics"
            :name="service.name"
            :published="service.published"
            :versions="service.versions"
          />
        </div>
        <div
          v-else
          class="no-results"
          data-testid="no-results"
        >
          No services
        </div>
      </div>
    </main>
    <footer>
      <PaginationControl
        :items-on-current-page="servicesPage.length"
        :total-items="totalServices"
      />
    </footer>
  </section>
</template>

<script lang="ts" setup>
import { watchEffect, ref } from 'vue'
import { usePaginationStore } from '@/stores/pagination'
import useServices from '@/composables/useServices'

import PaginationControl from './PaginationControl.vue'
import ServiceCard from './ServiceCard.vue'
import SkeletonCard from './SkeletonCard.vue'

const paginationStore = usePaginationStore()

const { services, totalServices, searchServices, loading } = useServices()

const totalPages = ref(0)

const servicesPage = ref(services.value[paginationStore.currentPage])

watchEffect(() => {
  const currentPage = paginationStore.currentPage
  servicesPage.value = services.value[currentPage] || []
  totalPages.value = Math.ceil(Object.keys(services.value).length / 9)
})

const searchQuery = ref('')

function handleSearch(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    paginationStore.setPage(0)
    searchServices(searchQuery.value)
  }
}

function handleCreateService() {
  alert('create service package clicked!')
}
</script>

<style lang="scss" scoped>
.service-catalog {
    margin: 2rem;
    padding: 0 20px;
}

header {
  align-items: start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .right {
      display: flex;
      flex-direction: row;
      gap: 20px;

      @media (max-width: 768px) {
          flex-wrap: wrap;
      }
  }
}

.results {
    display: grid;
    grid-gap: 40px 40px;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    margin: 20px 0 0 0;

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }
}

input {
    padding: 8px 4px;
}
.search-wrapper {
    align-items: center;
    background-color: #FFF;
    border: 1px solid #E7E7EC;
    border-radius: 4px;
    display: flex;

    &:focus-within {
      outline: 2px solid rgb(0, 125, 250);
      outline-offset: 1px;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
}

.search-icon {
    height: 16px;
    margin: 0 8px;
    width: 16px;
}

.search-input {
    border: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

    padding: 8px 0;

    &:focus-visible {
        border: none;
        outline: none;
    }

    &::placeholder {
        color: #6F7787;
    }
}

.create-service {
    align-items: center;

    background: hsl(170, 92%, 34%);
    border: none;
    border-radius: 100px;
    color: #fff;
    display: flex;
    flex-direction: row;

    font-size: 16px;
    font-weight: 600;
    gap: 8px;
    height: 44px;
    line-height: 20px;
    padding: 12px 16px 12px 18px;
    text-align: center;

    width: 197px;

    /* HSL is nicer for handling color changes, esp. if you want to mimic real-world shadows */
    /* https://www.learnui.design/blog/color-in-ui-design-a-practical-framework.html#real-world-color-variations */
    &:hover {
        background: hsl(180, 100%, 25%);
    }
}

.no-results {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    text-align: center;
}

</style>
