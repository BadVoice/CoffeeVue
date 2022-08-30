<template>
  <div class="navigation">
    <nav class="">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-start sm:justify-between h-20 min-h-full">
      <div class="inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button  @click.prevent="toggleBurger" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2D635E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x
        
            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="sm:flex-1 flex flex-col md:flex-row   md:h-[38px]   md:p-0  items-center justify-between">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden w-11 h-8  mx-2 md:w-auto md:h-8 md:px-2" src="@/assets/images/logos/logo.svg" alt="logo">

          <RouterLink to="/"
              class="text-black font-cedarville  h-8 text-2xl md:text-[38px]  rounded-md  font-medium" aria-current="page"
            >Samwayle</RouterLink>
        </div>
        
        <div class="hidden sm:flex w-full ">
          <div class="flex space-x-4  w-full content-around items-center justify-around md:justify-end gap-10">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

            <RouterLink 
              to=""
              class="
              text-black   font-josenfin leading-3 align-middle px-3 py-2  rounded-md text-[16px] font-bold cursor-pointer"
            >About Us</RouterLink>

            <RouterLink to=""
              class="text-black font-josenfin align-middle   px-3 py-2 rounded-md text-sm font-bold"
            >Build</RouterLink>

            <RouterLink to="/shop"
              class="text-black font-josenfin align-middle   px-3 py-2 rounded-md text-sm font-bold"
            >Shop</RouterLink>

            <RouterLink to=""
              class="text-black font-josenfin align-middle  px-3 py-2 rounded-md text-sm font-bold"
            >Contacts</RouterLink>
            
            <RouterLink to="/authorization"
              class="bg-[#2D635E] font-josenfin transition duration-300 hover:text-white hover:bg-[#2d7e65] text-white px-3 py-2 rounded-md text-sm font-bold" aria-current="page"
            >Sign in</RouterLink>



          </div>
        </div>
      </div>
    
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden  flex-col" id="mobile-menu"
      v-show="burgerActive">
    <div 
    ref="burgerRef"
    class="px-2 pt-2 pb-3 space-y-2 flex-col flex">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <RouterLink to="/"
              class="text-black font-josenfin transition duration-300 text-center align-middle w-[60%] m-auto hover:bg-[#2D635E] hover:text-white px-3 py-1 rounded-md text-xl font-medium" aria-current="page"
            >Home</RouterLink>

            <RouterLink 
              to=""
              class="
              
              text-black font-josenfin transition duration-300 text-center align-middle w-[60%] m-auto hover:bg-[#2D635E] hover:text-white px-3 py-1 rounded-md text-xl font-medium"
            >About Us</RouterLink>

            <RouterLink to=""
              class="text-black font-josenfin transition duration-300 text-center w-[60%] m-auto align-middle hover:bg-[#2D635E] hover:text-white px-3 py-1 rounded-md text-xl font-medium"
            >Build</RouterLink>

            <RouterLink to="/shop"
              class="text-black font-josenfin transition duration-300 text-center align-middle w-[60%] m-auto hover:bg-[#2D635E] hover:text-white px-3 py-1 rounded-md text-xl font-medium"
            >Shop</RouterLink>

            <RouterLink to=""
              class="bg-[#2D635E] font-josenfin   text-center align-middle w-[60%] m-auto hover:text-white  text-white px-3 py-1 rounded-md text-xl font-medium" aria-current="page"
            >Contact Us</RouterLink>

    </div>
  </div>
</nav>
  </div>
</template>

<script setup>
    import { RouterLink } from "vue-router";
    import { ref } from "vue";
    import { onClickOutside } from '@vueuse/core'

    const modalActive = ref(null)
    const burgerActive = ref(null)
    const burgerRef = ref(null)

    const toggleModal = () => {
    modalActive.value = !modalActive.value
    console.log('here')
    }
    
    const toggleBurger = () => {
    burgerActive.value = !burgerActive.value 
    console.log('here2')
    }


</script>

<style>

</style>