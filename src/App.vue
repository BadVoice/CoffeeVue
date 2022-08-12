<template>
    <div class="flex flex-col min-h-screen font-Roboto">
      <Navigation />
  
      <RouterView></RouterView>
      
    </div>
  
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from '@/components/Layout/Navigation.vue'
import HomeView from './views/HomeView.vue';

</script>

<style scoped>

</style>
