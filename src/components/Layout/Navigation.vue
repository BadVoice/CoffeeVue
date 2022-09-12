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
          <div class="flex  w-full content-around items-center justify-around md:justify-end gap-10">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

            <RouterLink 
              to=""
              class="
              text-black   font-josenfin leading-3 align-middle px-3 py-2  rounded-md text-[16px] font-bold cursor-pointer"
            >About Us</RouterLink>

            

            <RouterLink to="/shop"
              class="text-black font-josenfin align-middle   px-3 py-2 rounded-md text-sm font-bold"
            >Shop</RouterLink>

            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-bold font-josenfin text-black shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#2d7e65] focus:ring-offset-2 focus:ring-offset-gray-100">
                  More
                </MenuButton>
              </div>
          
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-george-round  font-bold">
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <RouterLink to="/authorization" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Auth</RouterLink>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Text</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Text</a>
                    </MenuItem>
                    <form method="POST" action="#">
                      <MenuItem v-slot="{ active }">
                        <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Text</button>
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            
            <RouterLink to="/authorization"
              class="bg-[#2D635E] font-josenfin transition duration-300 hover:text-white hover:bg-[#2d7e65] text-white px-3 py-2 rounded-md text-sm font-bold" aria-current="page"
            >Sign in</RouterLink>

              <!-- Search -->
              <div class="flex ">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  
                </a>
              </div>

              <!-- Cart -->
              <div class=" flow-root">
                <a ref="#"  class="group -m-2 flex items-center p-2 cursor-pointer hover:text-gray-500"
                @click="openCart = !openCart "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  
                  
                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>

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
              class="text-black font-josenfin transition duration-300  text-center align-middle w-[60%] m-auto hover:bg-[#2D635E] hover:text-white px-3 py-1 rounded-md text-xl font-medium" aria-current="page"
            >Contact Us</RouterLink>

            <RouterLink to="/authorization"
              class="text-black font-josenfin transition duration-300  text-center align-middle w-[60%] m-auto hover:bg-[#2D635E] hover:text-white px-3 py-1 rounded-md text-xl font-medium" aria-current="page"
            >Sign in</RouterLink>

    </div>
  </div>
</nav>
  </div>
</template>

<script setup>
    import { RouterLink } from "vue-router";
    import { ref } from "vue";
    import { onClickOutside } from '@vueuse/core'
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'



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

    defineProps({
      openCart: Boolean,
    })


</script>

<style>
</style>