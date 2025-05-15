<template>
  <div class="topnav">
    <RouterLink
      v-for="link in navLinks"
      :key="link.path"
      :to="link.path"
      class="nav-link"
    >
      {{ link.label }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq'}
]
</script>

<style scoped>
.topnav {
  background-color: #333;
  overflow: visible;
  padding: 0.5rem;
}

.nav-link {
  float: right;
  background-color: midnightblue;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-left: 5px;
}

.nav-link:hover {
  background-color: #ddd;
  color: black;
}

.nav-link.router-link-exact-active {
  background-color: #04AA6D;
  color: white;
}
</style>
