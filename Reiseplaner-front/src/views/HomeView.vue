<template>
  <div class="home-page">
    <h1>Willkommen bei Trip`n</h1>
    <p>Plane deine nächste Reise</p>
    <p>{{ backendMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const backendMessage = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/hello')
    backendMessage.value = response.data.message
  } catch (error) {
    console.error(error)
    backendMessage.value = 'Fehler beim Laden der Nachricht'
  }
})
</script>

<style scoped>
.home-page {
  padding: 2rem;
  color: white;
  text-align: center;
  min-height: 100vh;
  background-image: url("@/assets/beach.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
}
</style>
