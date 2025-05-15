<script setup lang="ts">
import TopNav from './components/topNav.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <TopNav />
    <RouterView />
  </div>
</template>

<style scoped>

div {
  font-family: Arial, sans-serif;
}
</style>
