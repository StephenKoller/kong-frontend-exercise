<template>
  <div class="service-catalog">
    <h1 class="header">
      Service Hub
    </h1>
    <h3>
      Organize services, manage and track versioning and API service
      documentation. <a href="#">Learn more</a>
    </h3>
    <input
      v-model.trim="searchQuery"
      class="search-input"
      data-testid="search-input"
      placeholder="Search services"
      @keydown="handleSearch"
    >
    <div
      v-if="services.length"
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
      v-else
      data-testid="no-results"
    >
      No services
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useServices from '@/composables/useServices'
import ServiceCard from './ServiceCard.vue'

// Import services from the composable
const { services, searchServices /*, loading */ } = useServices()

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

.catalog {
    display: grid;
    grid-gap: 40px 40px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin: 20px 0 0 0;
}

.header {
    margin: 0;
}

input {
    padding: 8px 4px;
}
</style>
