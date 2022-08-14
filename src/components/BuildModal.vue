<template>
    <div class="build-modal">
        <div class="container flex mx-auto  p-10 min-h-full max-h-max	max-height: max-content; min-w-[75%]  ">
            <div class=" p-3  mx-auto flex h-[50rem] w-[100%] bg-slate-900">
                
                <div class="left-side  p-2 h-[100%] w-[20%] bg-white">
                
                </div>

                <div class="mid-content  p-2 mx-3 h-[100%] w-[60%] bg-white">
                
                </div>

                <div class="right-side  p-2 h-[100%] w-[20%] bg-white">
                
                </div>



            </div>
        </div>
    </div>
</template>

<script setup>


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


</style>