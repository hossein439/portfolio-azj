<script setup>

definePageMeta({
    layout: "admin-layout",
    middleware: ['auth'],
    meta: {
        requiresAuth: true,
    },
});

const categories = ref([]);

const { deleteAlert, successAlert, loadingAlert, closeAlert } = useAlert();

const getAllcategories = async () => {
    try {
        loadingAlert()
        const data = await $fetch('/api/categories/getAll', {
            method: 'GET'
        })
        categories.value = data;
        closeAlert()
    } catch (error) {
        console.log(error.response)
    }
}

getAllcategories();

const deleteCategory = async (id, image) => {
    deleteAlert('Are you sure you want to remove this category?')
        .then(async (result) => {
            if (result.isConfirmed) {
                loadingAlert();
                await $fetch('/api/categories/delete', {
                    method: 'POST',
                    body: {
                        id,
                        image
                    }
                })

                successAlert('', 'You deleted category successfully');
                getAllcategories();
            }
        })
}

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <AdminViewTableHeader title="category" btn-text="add category" link="categories/create">
        </AdminViewTableHeader>
        <div v-if="categories.length" class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <AdminViewTheadTable :thead="['id', 'name', 'actions']"></AdminViewTheadTable>
                            <tbody class="divide-y divide-gray-200 bg-white">

                                <tr v-for="category in categories" :key="category.id">
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {{ category.id }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">
                                        {{ category.name }}
                                    </td>

                                    <td class="relative whitespace-nowrap px-3 py-4 text-right text-sm font-medium">
                                        <NuxtLink :to="`/admin/categories/${category.id}/edit`"
                                            class="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </NuxtLink>
                                        <button @click="deleteCategory(category.id, category.image)"
                                            class="text-red-600 px-2 hover:text-red-900 cursor-pointer">
                                            Delete
                                        </button>
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