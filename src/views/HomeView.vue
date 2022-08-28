
<template>
  <div class="home">
    
    <Header /> 
    <AboutUs /> 

  </div>
</template>

<script setup>
import Header from '../components/Layout/Header.vue';
import AboutUs from '../components/Layout/AboutUs.vue';


</script>

<style lang="css">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>