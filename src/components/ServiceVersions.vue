<template>
  <div class="service-versions">
    {{ versionsCount }} {{ formatPlural(versionsCount) }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{ versionsCount: number }>()

function formatPlural(count: number): string {
  return count === 1 ? 'version' : 'versions'
}
</script>

<style lang="scss" scoped>
.service-versions {
    background-color: #f2f6fe;
    border-radius: 14px;
    color: #5888db;
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    padding: 8px 16px;
    text-align: center;
}
</style>
