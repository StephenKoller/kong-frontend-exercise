<template>
  <div class="service-avatars">
    <div
      v-for="(chip, index) in firstTwoChips"
      :key="chip.imageUrl"
      class="avatar-container"
      :style="{right: `${index * 20}px` }"
    >
      <div v-if="index < 2">
        <AvatarChip
          :image-url="chip.imageUrl"
          :name="chip.name"
        />
      </div>
      <div
        v-if="index === 2"
        class="chip"
      >
        +{{ chips.length - 2 }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import AvatarChip from './AvatarChip.vue'

export type Chip = {
  name: string
  imageUrl: string
}
const props = defineProps <{ chips: Array<Chip> }>()
const firstTwoChips = computed(() => props.chips.slice(0, 3))
</script>

<style lang="scss">
.service-avatars {
    position:relative;
}

.avatar-container {
    bottom: 10px;
    position: absolute;
}

.chip {
    align-items: center;
    background-color: #F1F1F8;
    border: 2px solid #FFF;
    border-radius: 50%;
    color: #777D8A;
    display: flex;
    font-size: 12px;
    font-weight: 600;
    height: 38px;
    justify-content: center;
    letter-spacing: 2px;
    line-height: 24px;
    width: 38px;
    margin-top: -2px;
}
</style>
