<template>
  <nav>
    <router-link to="/">
      Home
    </router-link>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
nav {
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
