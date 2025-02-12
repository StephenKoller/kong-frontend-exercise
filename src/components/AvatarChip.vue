<template>
  <div class="avatar-chip">
    <img
      v-show="!imageLoadFailed"
      alt="Avatar for {{ name }}"
      :height="size ?? 36"
      :src="imageUrl"
      :width="size ?? 36"
      @error="handleImageError"
    >
    <div
      v-show="imageLoadFailed"
      class="chip"
    >
      {{ initials }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
const props = defineProps<{ imageUrl: string, name: string, size?: number }>()

// ex: "John Doe" -> "JD"
const initials = props.name
  .split(' ')
  .map(n => n[0])
  .join('')
  .toUpperCase()

const imageLoadFailed = ref(false)

function handleImageError() {
  imageLoadFailed.value = true
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 50%;
}

.chip {
  height: v-bind('size ? `${size}px` : "36px"');
  width: v-bind('size ? `${size}px` : "36px"');
}
</style>
