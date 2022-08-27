<template>
    <div class="max-w-7xl md:mx-auto h-[514px]  mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center  h-20 min-h-full sm:px-6 lg:px-8">

            <div class="flex w-full md:w-[45%] h-full items-center">
                <div class="flex flex-col gap-6 w-full h-[222px] items-center">
                    <p class="flex font-cedarville text-xl sm:text-2xl max-w-[380px]">
                        Drink coffee, enjoy with Samwyle
                    </p>
                    <h1 class="flex font-josenfin text-5xl sm:text-6xl font-medium tracking-wider sm:tracking-normal sm:font-bold max-w-[375px]">Coffee Shop</h1>
            <RouterLink
                to="/build"
                class="w-[235px] h-[54px] hidden sm:flex"
                
                >
                <button 
                    class=" bg-[#2D635E] hover:bg-[#2d7e65] w-full h-full transition duration-300 text-white py-2 px-4 rounded tracking-widest font-george-round font-normal"
                    >
                    Order here
                </button>
            </RouterLink>
            <!-- mobile router btn -->
            <RouterLink
                to="/build"
                class="w-[189px] h-[53px] flex sm:hidden "
                
                >
                <button 
                    class=" justify-between bg-[#2D635E] hover:bg-[#2d7e65] w-full h-full flex transition duration-300 text-white py-2 px-4 rounded tracking-widest font-normal items-center text-base font-josenfin"
                    >
                    Order Here   
                    <div class="flex w-[30%] h-[100%] items-center justify-center">
                        <img class="hover:ml-2  hover:w-[35px] hover:h-[8px] min-w-[25px] w-[25px] h-[6px] duration-200" src="@/assets/images/icons/mobileArrow.png" alt="mobileArrow">
                    </div>
                </button>
            </RouterLink>



                </div>
            </div>

            <div class="hidden md:flex min-w-[45%] ">
                
                    <div class="hidden md:flex relative items-end  w-full">
                            
                        <div class="absolute bottom-0 right-0">
                            <div class="bg-slate-500/[.06] relative flex  items-center justify-center w-[159px] h-[157px] ">
                            <RouterLink to="/build"

                                class="
                                p-4 " aria-current="page"
                                >
                                <img class="hover:ml-2  hover:w-[35px] hover:h-[8px] duration-200  md:block hidden min-w-[25px] w-[25px] h-[6px]" src="@/assets/images/icons/arrow.png" alt="arrow">
                            </RouterLink>
                        </div>   
                        </div>
                    </div>

                 
                        
                            <div class="flex items-end relative w-full h-full max-w-[344px] min-h-[373px]">
                                <div class="relative bg-[#E3EBE7] min-w-[410px] min-h-[466px]">
                                    <img class="md:block hidden absolute w-full bottom-[-50px] right-5 max-w-[344px] min-h-[373px]" src="@/assets/images/coffeeGrinder.svg" alt="coffeeGrinder">
                                </div>
                            </div>
                       
                    
                
            </div>

            <div class="hidden md:flex w-[10%] h-full ">
            
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

