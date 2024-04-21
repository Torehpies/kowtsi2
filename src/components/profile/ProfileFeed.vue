<script setup>

import { ref } from 'vue';
const state = ref(0); // 0: Thread, 1: Replies, 2: Reposts
const options=['Thread','Replies','Repost'];
const selectOption = (index) => {
  state.value = index;
};

</script>

<template>
  <div class="rounded-3xl mx-6 my-1 col-start-2 col-span-2 row-span-3 bg-[#232b2b]">
    
    <!-- para sa name at username yung may @ from here-->
    <div class="relative bg-transparent top-[.5rem] w-[25rem] p-0 m-0 text-[#FFFFFF]">
      <label class="relative text-3xl font-mono left-[1rem]">Crappy Bara</label>
      <br>
      <label class="relative text-base p-0 m-0 left-[1rem]">@Crap_Ibarra29</label>
    </div>
    <!-- to here-->

      <!--bio holder from here-->
    <div class="text-center bg-[#FFFFFF] bg-transparent mt-3">
      <label class="italic text-[#FFFFFF]">hindi ka kayang wasakin ng hindi mo kayang ibigin</label>
    </div>
    <!-- to here -->


    <!-- Toggle switch of thread, posts, replies goes here -->
    <div class="flex justify-center bg-white text-[#000000] w-[25rem] relative left-[5rem] m-10 mt-3 mb-2 rounded-full">
    <button v-for="(option, index) in options" :key="index" @click="selectOption(index)" class="relative inline-block px-8 text-xl">
      {{ option }}
    </button>
  </div>
    <!-- ends here -->

    <!-- div for the content like repost, posts-->
    <div class="relative w-[90%] h-80 opacity-25 bg-white mt-0 left-[5%] rounded-t-[20px]">
    </div>
    <!-- ends here -->

  </div>
  
</template>

<style scoped>
  
</style>
