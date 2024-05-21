<script setup>
import { ref, onMounted, computed } from 'vue'
import supabase, { getUser } from './db'
import { useRouter } from 'vue-router'

const router = useRouter()

const messages = ref([])
const newmessage  = ref('')
async function getMessages() {
    const user = await getUser()
    if (!user) {
        router.replace("/login")
        return
    }
    const { data } = await supabase.from('Messages').select()
    messages.value = data
}

async function postMessage(){
    await supabase.from('Messages').insert({message:newmessage.value})
    newmessage.value = ''
    await getMessages()
}

const messagesReversed = computed(() => {
    return messages.value.reverse()
})

onMounted(() => {
    getMessages()
})
</script>

<template>
    <input type="text" v-model="newmessage">
    <button type="button" @click="postMessage">Post</button>
    <div>
        <div v-for="msg in messagesReversed" :key="msg.id">
            {{msg.id}}: {{ msg.message }}
        </div>
    </div>
</template>
