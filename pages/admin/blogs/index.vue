<script setup>

definePageMeta({
    layout: "adminlayout",
    middleware: ['auth'],
    meta: {
        requiresAuth: true, 
    },
});


const { deleteAlert, successAlert, loadingAlert, closeAlert } = useAlert();

const blogs = ref([]);

const getAllBlog = async () => {
    loadingAlert()
    const data = await $fetch('/api/blogs/getAll', {
        method: 'GET'
    })
    blogs.value = data;
    closeAlert()
}
getAllBlog();

const deleteBlog = (id, image) => {

    deleteAlert('Are you sure you want to remove this category?')
        .then(async (result) => {
            if (result.isConfirmed) {
                loadingAlert()
                await $fetch('/api/blogs/delete', {
                    method: 'POST',
                    body: {
                        id,
                        image
                    }
                })

                successAlert('', 'You deleted blog successfully');
                getAllBlog()
            }
        })

}

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <AdminViewTableHeader title="blogs" btn-text="add blog" link="blogs/create">
        </AdminViewTableHeader>
        <div v-if="blogs.length" class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <AdminViewTHeadTable :thead="['id', 'title', 'actions']"></AdminViewTHeadTable>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="blog in blogs" :key="blog.id">
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {{ blog.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ blog.title }}
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap px-3 py-4 text-right text-sm font-medium">
                                        <NuxtLink :to="`/admin/blogs/${blog.id}/edit`"
                                            class="text-indigo-600 hover:text-indigo-900">
                                            <span>Edit</span>
                                        </NuxtLink>
                                        <button @click="deleteBlog(blog.id, blog.image)"
                                            class="text-red-600 px-2 hover:text-red-900 cursor-pointer">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <AdminViewDataNotExist v-else></AdminViewDataNotExist>
    </div>
</template>