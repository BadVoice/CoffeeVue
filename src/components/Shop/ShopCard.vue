<template>
    <div 
    class="methods h-[100%] w-[100%] bg-white p-2 flex justify-around ">
        
        <div class="w-20% h-full flex flex-col justify-between text-center"
        v-for="method in  objMethods" :key="method">
            
            <img :src="method.image"  
                :class="method.imageSize"> 
            
            <a class="cursor-pointer"> {{ method.title }} </a>
            
        </div>
        

    


    </div>
</template>

<script setup>
    import { reactive, ref } from 'vue'

    const objMethods = reactive({
        aeropress: {
            imageSize: "bg-no-repeat w-[100%] h-[80%] bg-contain bg-center cursor-pointer",
            
            title: 'Aeropress'
        },
        V60: {
            imageSize: "bg-no-repeat w-[100%] h-[80%] bg-contain bg-center cursor-pointer",
        
            title: 'V60'
        }
    })

</script>

<style  scoped>

</style>