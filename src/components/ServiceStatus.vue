<template>
  <div class="service-status">
    <img
      alt="status icon"
      :src="statusContent[status].icon"
    >
    {{ statusContent[status].text }}
  </div>
</template>

<script lang="ts" setup>
import type { PUBLICATION_STATUS } from '@/types/service'

defineProps<{
  status: PUBLICATION_STATUS;
}>()

const statusContent = {
  published: {
    icon: '/public/icon-check.svg',
    text: 'Published to portal',
  },
  in_progress: {
    icon: '/public/icon-spinner.svg',
    text: 'In progress',
  },
  unpublished: {
    icon: '/public/icon-x.svg',
    text: 'Unpublished',
  },
}
</script>

<style lang="scss" scoped>
.service-status {
    align-items: center;
    color: #3c4557;
    display: flex;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-top: 8px;

    img {
        height: 16px;
        margin-right: 8px;
        width: 16px;
    }
}
</style>
