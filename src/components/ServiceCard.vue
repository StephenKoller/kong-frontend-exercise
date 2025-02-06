<!-- eslint-disable vue/require-default-prop -->
<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
interface Version {
  id: string;
  name: string;
  description: string;
  updated_at: string;
}

defineProps({
  name: String,
  description: String,
  versions: Array<Version>,
})
</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 2px;
    margin: 6px;
    min-height: 200px;
    padding: 8px 16px;
    width: 200px;

    p:first-of-type {
        color: #333;
        font-weight: 700;
    }

    p {
        color: #666;
    }
}
</style>
