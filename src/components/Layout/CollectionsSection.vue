<template>
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-12">
        <div class="mx-auto px-4  py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 class="text-2xl font-bold text-gray-900">Collections</h2>
  
          <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4  lg:gap-x-6 lg:space-y-0">

            <div v-for="callout in callouts" :key="callout.name" class="group my-0 relative">
              <div class="relative  h-80  w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1">
                <img :src="callout.imageSrc" :alt="callout.imageAlt" class="h-full w-full object-cover object-center cursor-pointer" />
              </div>
              <h3 class="mt-6 text-sm font-alegreya  text-gray-500">
                <a :href="callout.href">
                  <span class="" />
                  {{ callout.name }}
                </a>
              </h3>
              <p class="text-lg font-josenfin  font-semibold text-gray-900">{{ callout.description }}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { reactive } from 'vue';


  const callouts = reactive([
    {
      name: 'Drips',
      description: "Drip coffee is that it's very easy to prepare",
      imageSrc: './src/assets/images/collectionDrip.jpg',
      imageAlt: 'Collection of coffee drips puring methods',
      href: '#',
    },
    {
      name: 'The V60 Coffee Dripper',
      description: "Simple, clean, accessible. Drip brewing is a great place to start.",
      imageSrc: './src/assets/images/collectionV60.jpg',
      imageAlt: 'Collection of coffee V60 puring methods',
      href: '#',
    },
    {
      name: 'Aeropress',
      description: 'Easy to prepare, tasty and travel-friendly',
      imageSrc: './src/assets/images/collectionAeropress.jpg',
      imageAlt: 'Collection of coffee aeropress puring methods',
      href: '#',
    },
  ])

  
  </script>


<style scoped>
  

</style>