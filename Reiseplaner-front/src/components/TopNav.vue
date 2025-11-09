<template>
  <div class="q-pa-md">
    <q-toolbar style="background-color: #FAF0DC" class="text-black shadow-2 rounded-borders">
      <img :src="logo" alt="Logo" height="80" class="q-rm-sm" />
      <q-btn flat label="Home" @click="goTo('/')"/>
      <q-space />
      <q-tabs v-model="tab" shrink>
        <q-tab
          v-for="item in tabs"
          :key="item.name"
          :name="item.name"
          :label="item.label"
          @click="goTo(item.path)"
          />
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import {useRouter} from 'vue-router'
import logo from '@/assets/logo.png';

export default {
  data() {
    return {
      tab: 'buchen',
      logo,
      tabs: [
        { name: 'buchen', label: 'Reise buchen', path: '/buchen' },
        { name: 'login', label: 'Login', path: '/login' },
        { name: 'registrieren', label: 'Registriere dich', path: '/registrieren' },
      ]
    }
  },
  setup() {
    const router = useRouter()
    const goTo = (path: string) => router.push(path)
    return{ goTo }
  }
}
</script>

