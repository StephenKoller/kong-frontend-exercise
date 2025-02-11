<template>
  <div>
    <h1>Service Details</h1>
    <h2>Versions ({{ versionsCount }})</h2>
    <div class="versions-table">
      <div
        v-for="version in serviceDetails.versions"
        :key="version.id"
        class="version-details"
      >
        <div class="name">
          {{ version.name }}
        </div>
        <div class="description">
          {{ version.description }}
        </div>
        <div class="types">
          <div class="type">
            HTTP
          </div>
          <div class="type">
            REST
          </div>
        </div>

        <div class="developer">
          <img
            class="avatar"
            :src="version.developer.avatar"
          >
          {{ formatDeveloperName(version.developer.name) }}
          {{ version.updatedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useServiceDetails from '@/composables/useServiceDetails'

const { serviceDetails } = useServiceDetails()
const versionsCount = ref(2)

const formatDeveloperName = (name: string) => {
  const parts = name.split(' ')
  return `${parts[0]} ${parts[1][0]}.`
}

</script>

<style scoped>
.name {
    color: #262626;
    font-size: 13px;
    font-weight: 600;
    line-height: 24px;
}

.description {
    color: #8a8a8a;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
}

.version-details {
    border-radius: 4px;
    display: grid;
    grid-template-columns: 65px 248px 1fr auto;
    margin-top: 20px;
    padding: 20px;
}

.types {
    display: flex;
    gap: 10px;
}

.type {
    background-color: #BDD3F9;
    border-radius: 4px;
    color: #1155CB;
    font-size: 10px;

    font-weight: 500;
    line-height: 14px;
    padding: 3px 6px 0 6px;
}

.developer {
    justify-self: end;
}

.avatar {
    border-radius: 50%;
    height:20px;
    width:20px;
}
</style>
