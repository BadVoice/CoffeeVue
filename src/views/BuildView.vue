<template>
    <div class="build">
        <div class="container flex mx-auto  p-10 min-h-full  max-w-[75%]  ">
            <div class=" p-1  mx-auto h-[12rem] w-[100%] bg-slate-900">


                <BuildMethods 
            
                >
                
                </BuildMethods >


            </div>
        </div>
    </div>
</template>

<script setup>
    import BuildMethods from '@/components/Build/BuildMethods.vue';
    import { reactive, ref } from 'vue'




</script>

<style  scoped>
    @media (max-width: 1400px){
        .container {
            min-width: 95%;
            padding: 2.5vh;
        }
    }

    


    @media (max-width: 900px){
        .container > .flex {
            flex-direction: column;
            }

        .left-side {
            width: 100%;
            height: 20%;
            padding: 2px;
        }

         .right-side {
            width: 100%;
            height: 20%;
        }

         .mid-content {
            width: 100%;
            height: 60%;
            margin: 0;
            margin: 5px 0px;
        }

    }

    @media (max-width: 700px){
        .container {
            min-width: 100%;
            padding: 2.5vw;
        }
    }

     @media (max-width: 900px){  
            .method-card {
                margin: 0;
                padding: 0;
                height: 100%;
                width: 30%;
            }
        }

        @media (max-width: 450px){  
            .method-card {
                margin: 0;
                padding: 0;
                height: 100%;
                width: 80%;
                margin:  0 auto;
            }
        }




</style>