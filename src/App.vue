<script setup>
import { ref } from 'vue';

const count = ref(0)
setInterval(function(){
  count.value += 1
}, 1000)
</script>

<template>

  <main>
tectite hello {{count}}
  </main>
</template>

<style scoped>
</style>
