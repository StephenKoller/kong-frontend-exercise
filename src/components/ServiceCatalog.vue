<template>
  <div class="service-catalog">
    <header>
      <div class="left">
        <h1 class="header">
          Service Hub
        </h1>
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
        <button class="create-service">
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
        class="catalog"
      >
        <SkeletonCard
          v-for="i in 9"
          :key="i"
        />
      </div>
      <div
        v-if="!loading && services.length"
        class="catalog"
      >
        <ServiceCard
          v-for="service in services"
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
        v-else-if="!loading && !services.length"
        data-testid="no-results"
      >
        No services
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useServices from '@/composables/useServices'
import ServiceCard from './ServiceCard.vue'
import SkeletonCard from './SkeletonCard.vue'

// Import services from the composable
const { services, searchServices, loading } = useServices()

// Set the search string to a Vue ref
const searchQuery = ref('')

function handleSearch(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    searchServices(searchQuery.value)
  }
}

</script>

<style lang="scss" scoped>
.service-catalog {
    margin: 2rem auto;
    max-width: 1366px;
    padding: 0 20px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .right {
      display: flex;
      flex-direction: row;
      gap: 20px;
  }
}

.catalog {
    display: grid;
    grid-gap: 40px 40px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin: 20px 0 0 0;
}

h1 {
    color: #3c4557;
    margin: 0;
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

    /* Base outline style (Chrome/Edge/Safari) */
    &:focus-within {
      outline: 2px solid rgb(0, 125, 250);
      outline-offset: 1px;
    }

    /* Firefox has a slightly different blue */
    @supports (-moz-appearance: none) {
      &:focus-within {
        outline: 2px solid rgb(0, 99, 220);
      }
    }

    /* Safari on macOS sometimes uses a darker blue */
    @media not all and (min-resolution:.001dpcm) {
      @supports (-webkit-appearance:none) {
        &:focus-within {
          outline: 2px solid rgb(0, 88, 208);
        }
      }
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

    &:hover {
        background: hsl(170, 92%, 29%);
    }
}

</style>
