<!-- eslint-disable vue/require-default-prop -->
<template>
  <section
    class="card"
    @click="navigateToService"
  >
    <header>
      <ServiceStatus :status="status" />
      <div v-if="versions.length">
        <ServiceVersions :versions-count="versions.length" />
      </div>
    </header>

    <main>
      <h1>{{ $route.params.id }} </h1>
      <h2 class="heading">
        {{ name }}
      </h2>
      <p class="description">
        {{ description }}
      </p>
    </main>

    <footer>
      <div
        v-if="metrics && hasValue(metrics)"
        class="metrics"
      >
        <div v-if="metrics.latency">
          <img
            class="dot"
            src="/public/icon-dot.svg"
          >
          <span class="emphasis">{{ metrics.latency }}ms</span>
          latency
        </div>
        <div v-if="metrics.uptime">
          <img
            class="dot"
            src="/public/icon-dot.svg"
          >
          <span class="emphasis">{{
            formatPercentage(metrics.uptime)
          }}</span>
          uptime
        </div>
        <div v-if="metrics.requests && metrics.errors">
          <img
            class="dot"
            src="/public/icon-dot.svg"
          >
          <span class="emphasis">{{ formatLargeNumber(metrics.requests) }}</span>
          requests &nbsp;·&nbsp;
          <span class="emphasis">{{
            formatPercentage(metrics.errors)
          }}</span>
          errors
        </div>
      </div>
      <div class="avatars">
        <AvatarChips
          v-if="chips.length"
          :chips="chips"
        />
      </div>
    </footer>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ServiceStatus from './ServiceStatus.vue'
import ServiceVersions from './ServiceVersions.vue'
import AvatarChips from './AvatarChips.vue'
import type { Version, Metrics } from '@/types/service'
import { PUBLICATION_STATUS } from '@/types/service'
import { formatLargeNumber, formatPercentage } from '@/utils/formatters'
import { useRouter } from 'vue-router'

function hasValue(obj: Record<string, any>): boolean {
  return Object.values(obj).some((value) => !!value)
}

const router = useRouter()

function navigateToService() {
  router.push(`/service/${props.id}`)
}

const props = defineProps<{
  id: string,
  name: string;
  description: string;
  versions: Version[];
  published: boolean;
  configured: boolean;
  metrics?: Metrics;
}>()

const { published, configured } = props

const status = computed(() => {
  if (published && configured) {
    return PUBLICATION_STATUS.PUBLISHED
  } else if (published) {
    return PUBLICATION_STATUS.IN_PROGRESS
  } else {
    return PUBLICATION_STATUS.UNPUBLISHED
  }
})

const chips = computed(() => {
  if (!Array.isArray(props.versions)) {
    return []
  }
  return props.versions
    .filter(version => version.developer)
    .map(version =>
      ({
        imageUrl: version.developer?.avatar,
        name: version.developer?.name,
      }),
    )
})

</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    height: 232px;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        /* transform: translateY(-2px); */
    }

    p {
        color: #707888;
    }
}

header {
    align-items: baseline;
    display: flex;
    height: 32px;
    justify-content: space-between;
    margin-bottom: 10px;
}

.heading {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-top:0;
}

.description {
    -webkit-box-orient: vertical;
    color: #707888;
    display: -webkit-box;
    font-size: 13px;
    font-weight: 400;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.metrics {
    color: #707888;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    margin-top: auto;
    text-align: left;

    div {
        margin-top: 4px;
    }
}

.avatars {
    align-self: flex-end;
}

footer {
    align-items: flex-end;
    display: flex;
    flex: auto;
    flex-direction: row;
    justify-content: space-between;
}

.emphasis {
    color: #3c4557;
}

.dot {
    margin-right: 6px;
}
</style>
