<template>
    <div class="container w-1/2 mx-auto py-8 capitalize">
        <ul v-if="error.length > 0" class="mb-4 list-disc list-inside text-sm text-red-600">
            <li v-for="err, index in error" :key="index">
                <span class="text-red-500"> {{ err.message }} </span>
            </li>
        </ul>
        <h2 class="text-2xl">edit post</h2>
        <form v-if="post" ref="formPost" class="w-full">
            <div class="flex flex-col mt-3 mb-6">
                <label class="flex flex-col">
                    <span class="font-semibold mb-2">Title</span>
                    <input type="text" v-model="post.title" name="title" class="capitalize shadow rounded p-1.5 w-full">
                </label>
                <label class="flex flex-col mt-6">
                    <span class="font-semibold mb-2">Body</span>
                    <textarea v-model="post.body" name="body" class="shadow rounded p-1 w-full" rows="9"></textarea>
                </label>
            </div>
            <div class="flex items-center justify-between my-4 ">
                <button @click="editPost($event)"
                    class="px-4 py-2 inline-block rounded bg-blue-600 hover:bg-blue-700 text-white capitalize">edit
                    Post</button>
                <button @click="removePost($event)"
                    class="px-4 py-2 rounded text-white bg-red-500 capitalize">delete</button>
            </div>
            <span v-show="isLoading">Loading...</span>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth']
});

const isLoading = ref(false);
const post = ref(null);
const error = ref([]);
const route = useRoute();
const { getUser } = useUser();

async function editPost(e) {
    e.preventDefault();
    try {
        isLoading.value = true;
        console.log(post.value);
        useNuxtApp().$apiFetch(`/post/${post.value._id}`, {
            // headers: {
            //     Authorization: getUser('token'),
            // },
            method: 'PUT',
            body: {
                body: post.value.body,
                title: post.value.title,
                author: getUser('user')._id,
                postAuthor: post.value.author._id
            },
        }).then(() => {
            isLoading.value = false;
            alert('Your post updated');
            useRouter().push('/myinfo');
        }).catch(({ data }) => {
            alert('Your post not updated')
            console.log(data);
            // for (let key in data.error) {
            //     error.value.push(data.error[key])
            // }
            // console.log(error.value);
        });

    } catch (e) {
        console.log(e)
        isLoading.value = false;
        // error.value = Object.values(e.data.errors).flat();
    }
}

async function removePost(e) {
    e.preventDefault();
    await useNuxtApp().$apiFetch(`/post/${post.value._id}`, {
        method: 'DELETE',
        body: {
            author: getUser('user')._id,
        }
    });
    alert('Your post is deleted')
    useRouter().push('/');
}

onMounted(async () => {
    post.value = await useNuxtApp().$apiFetch(`post/${route.params.id}`);
    console.log(post.value);
});
</script>