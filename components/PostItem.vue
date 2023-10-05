<template>
    <div class="post-container py-8 capitalize">
        <h3 class="text-3xl font-bold"><NuxtLink :to="`/posts/${props.post._id}`">{{ props.post.title }}</NuxtLink></h3>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>{{ format( new Date(props.post.createdAt), 'MMMM dd, yyyy' )  }}</div>
            <div>.</div>
            <div> {{ props.post.author.name }} </div>
        </div>  
        <div class="post-view leading-relaxed mt-4 line-clamp-2">
            {{ props.post.body }}
        </div>
        <div class="mt-4">
            <NuxtLink :to="`/posts/${props.post._id}`" class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">Read More</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { format } from 'date-fns'
const props = defineProps(['post']);
</script>