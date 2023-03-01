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

  <main>
    <sidebar>
      <a v-for="link in links" @click="selectlink(link, $event)" href="#">{{ link.name }}</a>
    </sidebar>
    <content>{{ content }}</content>
  </main>

</template>

<style scoped>
sidebar {
  display: flex;
  flex-direction: column;
  width: 100px;
}
sidebar a {
  margin: 4px 0;
}
main {
  display: flex;
  width: 600px;
}
content {
  padding: 5px;
}
</style>
