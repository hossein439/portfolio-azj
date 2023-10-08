<script setup>
import axios from 'axios';

definePageMeta({
    layout: "adminlayout",
});

const filters = ref();

const getAllFilters = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/filter',
    });
    filters.value = data.data;
    console.log(filters.value)
}

getAllFilters();

const deleteFilter = async (id, image) => {
    console.log(image);
    const data = await axios({
        method: 'delete',
        url: `http://localhost:4000/filter/${id}/${image}`,
    });
    console.log(data);
}

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <LayoutComponentAdminTableHeader title="filters" btn-text="add filter" link="filters/create">
        </LayoutComponentAdminTableHeader>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Id
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Link
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Feature
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Category
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">

                                <tr v-for="filter in filters" :key="filter.id">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {{ filter.id }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ filter.link }}</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ filter.feature }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ filter.category }}</td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <NuxtLink :to="`/admin/filters/${filter.id}/edit`"
                                            class="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </NuxtLink>
                                        <button @click="deleteFilter(filter.id, filter.image)"
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
</div></template>