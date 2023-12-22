<script setup>

definePageMeta({
    layout: "adminlayout",
});

const categories = ref([]);
const { deleteAlert, successAlert } = useAlert();

const getAllcategories = async () => {

    const data = await $fetch('/api/categories/getAll', {
        method: 'GET'
    })

    categories.value = data;
}

getAllcategories();

const deleteCategory = async (id, image) => {
    deleteAlert('Are you sure you want to remove this category?')
        .then(async (result) => {
            if (result.isConfirmed) {

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
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Id
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">name
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">

                                <tr v-for="category in categories" :key="category.id">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {{ category.id }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ category.name }}
                                    </td>

                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
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

                                <!-- More people... -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <AdminViewDataNotExist v-else></AdminViewDataNotExist>
    </div>
</template>