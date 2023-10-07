<script setup>
import axios from 'axios';

definePageMeta({
    layout: "adminlayout",
});
const effects = ref();

const getAllCollaboration = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/effect',
    });
    effects.value = data.data;
    console.log(effects.value)
}

getAllCollaboration();

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <LayoutComponentAdminTableHeader title="effects" btn-text="add effect" link="effects/create">
        </LayoutComponentAdminTableHeader>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">id
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">link
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">alt
                                    </th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="effect in effects" :key="effect.id">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {{ effect.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ effect.url }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ effect.alt }}
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span
                                                class="sr-only">, Lindsay Walton</span></a>
                                    </td>
                                </tr>

                                <!-- More people... -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
