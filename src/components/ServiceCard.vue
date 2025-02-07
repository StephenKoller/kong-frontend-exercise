<!-- eslint-disable vue/require-default-prop -->
<template>
  <div class="card">
    <div class="header-block">
      <ServiceStatus :status="status" />
      <div v-if="versions.length">
        <ServiceVersions :versions-count="versions.length" />
      </div>
    </div>
    <h2 class="heading">
      {{ name }}
    </h2>
    <p class="subheading">
      {{ description }}
    </p>
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
        <span class="emphasis">{{ round(metrics.requests) }}k</span>
        requests &nbsp;·&nbsp;
        <span class="emphasis">{{
          formatPercentage(metrics.errors)
        }}</span>
        errors
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ServiceStatus from './ServiceStatus.vue'
import ServiceVersions from './ServiceVersions.vue'
import type { Version, Metrics } from '@/types/service'
import { PUBLICATION_STATUS } from '@/types/service'

function hasValue(obj: Record<string, any>): boolean {
  return Object.values(obj).some((value) => !!value)
}

function round(num: number, unit?: 'M' | 'k'): number {
  if (unit) {
    return Math.round(num / (unit === 'M' ? 1000000 : 1000))
  }
  return Math.round(num / 1000)
}

function formatPercentage(num: number): string {
  const floatToPercentage = (num: number) => num * 100
  const formattedPercentage = floatToPercentage(num).toFixed(2)
  return `${formattedPercentage}%`
}

const props = defineProps<{
  name: string;
  description: string;
  versions: Version[];
  published: boolean;
  configured: boolean;
  metrics: Metrics;
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
</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    border-radius: 2px;
    margin: 6px;
    min-height: 200px;
    padding: 20px;

    /* p:first-of-type {
        color: #333;
        font-weight: 700;
    } */

    p {
        color: #707888;
    }
}

.header-block {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.heading {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
}

.subheading {
    color: #707888;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
}

.metrics {
    color: #707888;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    margin: 0;
    text-align: left;

    div {
        margin-top: 4px;
    }
}

.emphasis {
    color: #3c4557;
}

.dot {
    margin-right: 6px;
}
</style>
