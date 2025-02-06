<template>
  <div class="service-catalog">
    <h1>Service Catalog</h1>
    <input
      v-model="searchQuery"
      class="search-input"
      data-testid="search-input"
      placeholder="Search services"
    >
    <ul
      v-if="services.length"
      class="catalog"
    >
      <ServiceCard
        v-for="service in services"
        :key="service.id"
        :description="service.description"
        :name="service.name"
        :versions="service.versions"
      />
    </ul>
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
const { services /*, loading */ } = useServices()

// Set the search string to a Vue ref
const searchQuery = ref('')
</script>

<style lang="scss" scoped>
.service-catalog {
    margin: 2rem auto;
    max-width: 1366px;
    padding: 0 20px;
}

.catalog {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 20px 0 0 0;
}

input {
    padding: 8px 4px;
}
</style>
