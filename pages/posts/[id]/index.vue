<template>
    <Title> {{ post.title }} | {{ title }} </Title>
    <div class="container mx-auto w-1/2 py-8 capitalize">
        <h3 class="text-3xl font-bold">
            {{ post.title }}
        </h3>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>{{ format(new Date(post.createdAt), 'MMMM dd, yyyy') }}</div>
            <div>.</div>
            <div>{{ post.author.name }}</div>
        </div>
        <div class="post-view leading-relaxed mt-4">
            {{ post.body }}
        </div>
        <button @click="router.back()"
            class="inline-block px-4 py-2 my-4 bg-gray-700 hover:bg-gray-800 text-white rounded">Back</button>
    </div>
</template>

<script setup>
import { format } from 'date-fns'
const title = useState('title');
const route = useRoute();
const post = await useNuxtApp().$apiFetch(`post/${route.params.id}`);
const router = useRouter();
</script>