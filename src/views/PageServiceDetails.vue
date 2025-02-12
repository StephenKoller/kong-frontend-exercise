<template>
  <section class="service-details">
    <header>
      <div class="left">
        <h1>Service Details</h1>
        <h2>Versions ({{ serviceDetails.versions.length }})</h2>
      </div>
      <div class="right">
        <RouterLink
          class="back-link"
          to="/services"
        >
          Back to Services
        </RouterLink>
      </div>
    </header>
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

        <div class="right">
          <div class="developer">
            <AvatarChip
              :image-url="version.developer.avatar"
              :name="formatDeveloperName(version.developer.name)"
              :size="20"
            />
            <div class="name-and-date">
              {{ formatDeveloperName(version.developer.name) }}
              <div class="updated-at">
                {{ formatDistanceToNow(version.updated_at) }} ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import useServiceDetails from '@/composables/useServiceDetails'
import { formatDistanceToNow } from 'date-fns'
import AvatarChip from '@/components/AvatarChip.vue'

const { serviceDetails } = useServiceDetails()

const formatDeveloperName = (name: string) => {
  const parts = name.split(' ')
  return `${parts[0]} ${parts[1][0]}.`
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

.service-details {
  margin: 2rem;
  padding: 0 20px;
}

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
  height: 18px;
}

.developer {
  display: flex;
  align-items: baseline;
  justify-self: end;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  color: #3C4557;
  gap: 5px;
}

.updated-at {
  color: #8a8a8a;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}

.version-details + .version-details {
  border-top: 1px solid #F1F1F5;
  margin-top: 0;
  padding-top: 20px;
}

</style>
