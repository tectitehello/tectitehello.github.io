<script setup>
import { ref } from 'vue'
import supabase from './db'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const isSigningUp = ref(false)
const err = ref("")

async function onSubmit(e) {
    if (isSigningUp.value) {
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
                emailRedirectTo: 'https://example.com/welcome',
            },
        })
        err.value = error.message
    } else {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })
        if (error) {
            err.value = error.message
        } else {
            router.replace("/")
        }

    }
}
</script>


<template>
    <form @submit.prevent="onSubmit">
        <div v-if="err">
            {{ err }}
        </div>
        <div>
            <label>
                Email: <input type="text" v-model="email">
            </label>
        </div>
        <div>
            <label>
                Password: <input type="password" v-model="password">
            </label>
        </div>
        <button type="submit">
            <span v-if="isSigningUp">
                Sign up
            </span>
            <span v-else>
                Login
            </span>
        </button>
        <!-- <a @click.prevent="isSigningUp = true" v-if="!isSigningUp">Sign up here!</a> -->
        <a @click.prevent="isSigningUp = false" v-if="isSigningUp">Login here!</a>
    </form>
</template>