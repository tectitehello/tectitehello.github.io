import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://nmtxvhxtlaoojopxdgjy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tdHh2aHh0bGFvb2pvcHhkZ2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwODA0MTMsImV4cCI6MjAzMTY1NjQxM30.h3xTkcJEBVUl6gXC7VtjAovFlDPX2LhTWB4x5A6Y5Mg')
export default supabase

export async function getUser() {
    const { data, error} = await supabase.auth.getUser()
    return data && data.user
}