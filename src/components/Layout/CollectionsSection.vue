<template>
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4  lg:px-8">
        <div class="mx-auto  py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 class="text-2xl font-bold text-gray-900">Collections</h2>
  
          <div class="mt-6 gap-10 md:gap-5 justify-around   flex flex-col  md:flex-row  lg:gap-x-6 lg:space-y-0">

            <div v-for="callout in callouts" :key="callout.name" class="group my-0 relative">
              <div class="relative  h-80  w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1">
                <img :src="callout.imageSrc" :alt="callout.imageAlt" class="h-full w-full object-cover object-center" />
              </div>
              <h3 class="mt-6 text-sm text-gray-500">
                <a :href="callout.href">
                  <span class="" />
                  {{ callout.name }}
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  </script>