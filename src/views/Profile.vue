<template>

  <div class = "grid grid-cols-4 grid-rows-4 size-full">

   <Profilebackground/>
   <ProfileFeed/>
   
  </div>
</template>

<script setup>
import Profilebackground from '@/components/profile/Profilebackground.vue'
import ProfileFeed from '@/components/profile/ProfileFeed.vue'
</script>