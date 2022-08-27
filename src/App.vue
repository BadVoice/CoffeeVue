<template>
    
      <Navigation />
    
      <RouterView></RouterView>
      
    
  
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from '@/components/Layout/Navigation.vue'
  import HomeView from './views/HomeView.vue';

</script>

<style scoped>

</style>
