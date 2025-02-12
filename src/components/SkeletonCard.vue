<template>
  <section class="card">
    <header>
      <div class="skeleton skeleton-status" />
      <div class="skeleton skeleton-versions" />
    </header>

    <main>
      <div class="skeleton skeleton-heading" />
      <div class="skeleton skeleton-subheading" />
    </main>

    <footer>
      <div class="skeleton skeleton-metrics" />
      <div class="skeleton skeleton-avatars" />
    </footer>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
// TODO: share styles with ServiceCard
.card {
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

footer {
    align-items: flex-end;
    display: flex;
    flex: auto;
    flex-direction: row;
    justify-content: space-between;
}

/* Skeleton styles */
.skeleton {
    animation: pulse 1.5s infinite ease-in-out;
    background-color: #e0e0e0;
    border-radius: 4px;
    display: inline-block;
    height: 16px;
    width: 100%;
}

.skeleton-status {
    height: 24px;
    width: 80px;
}

.skeleton-versions {
    height: 24px;
    width: 40px;
}

.skeleton-heading {
    height: 24px;
    margin-bottom: 8px;
    width: 60%;
}

.skeleton-subheading {
    height: 16px;
    width: 80%;
}

.skeleton-metrics {
    height: 48px;
    margin-top: auto;
    width: 100%;
}

.skeleton-avatars {
    height: 32px;
    width: 100px;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
}
</style>
