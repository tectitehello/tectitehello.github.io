<script setup>
import { onMounted, ref } from 'vue';
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import supabase, { getUser } from './db';

const router = useRouter()
const route = useRoute()

const user = ref(null)

const count = ref(0)
setInterval(function () {
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
function selectlink(link, e) {
  content.value = link.content
  e.preventDefault()
}
const content = ref("")
content.value = links.value[0].content

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})

async function signOut() {
  await supabase.auth.signOut()
  router.replace('/login')
}

onMounted(async () => {
  user.value = await getUser()
})
</script>

<template>
  <div class="app">
    <label>
    Search: <input v-model.trim="search" maxlength="20">
  </label>
    <div class="content">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/videos">Videos</RouterLink>
      <a @click.prevent="signOut" v-if="user">Sign Out</a>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
  </div>
</template>

<style scoped>

.app label input {
  width: 100%;
}

.app label {
  display: flex;
  gap: .5rem;
  padding-bottom: 3rem;
  font-size: 1.5rem;
}


.app{
  display: flex;
  flex-direction: column;
}

.content{
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2rem;
}

nav {
  position: sticky;
  top: 5rem;
  max-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

nav a {
  margin: 4px 0;
  font-size: 1.25rem;
}

main {
  display: flex;
  flex-direction: column;
  width: 600px;
}
</style>
