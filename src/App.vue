<template>
  <header>
    <div class="nav">
      <router-link to="/">
        Home
      </router-link>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss" scoped>
.nav {
    border-bottom: 1px solid #333;
    margin-bottom: 4rem;
    padding: 16px;

    a {
        color: blue;
        font-weight: 700;

        &.router-link-exact-active {
            color: green;
        }
    }
}
</style>
