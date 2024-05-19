<script setup>
import { ref } from 'vue';

const count = ref(0)
setInterval(function(){
  count.value += 1
}, 1000)
const links = ref([
  {
    name: "1",
    content: "first",
  },
  {
    name: "2",
    content: "second",
  },
  {
    name: "3",
    content: "third",
  },
])
function selectlink(link, e){
  content.value = link.content
  e.preventDefault()
}
const content = ref("")
content.value = links.value[0].content
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/videos">Go to Videos</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  width: 100px;
}
nav a {
  margin: 4px 0;
}
main { 
  display: flex;
  flex-direction: column;
  width: 600px;
}
content {
  padding: 5px;
}
</style>
