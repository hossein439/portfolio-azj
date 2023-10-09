<script setup>
import axios from 'axios';

definePageMeta({
    layout: "adminlayout",
});

const { deleteAlert, successAlert } = useAlert();

const collaborations = ref([]);

const getAllCollaboration = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:4000/collaboration',
    });
    collaborations.value = data.data;
}

getAllCollaboration();


const deleteCollaboration = (id, image) => {
    
    deleteAlert('Are you sure you want to remove this category?')
    .then(result => {
        if(result.isConfirmed) {
            axios({
                method: 'delete',
                url: `http://localhost:4000/collaboration/${id}/${image}`,
            });
            successAlert('', 'You deleted collaboration successfully');
            getAllCollaboration()
        }
    })

}

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <AdminViewTableHeader title="collaborations" btn-text="add collaboration" link="collaborations/create">
        </AdminViewTableHeader>
        <div v-if="collaborations.length" class="mt-8 flow-root">
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
                                    <th scope="col" class="px-12 py-3.5 text-right text-sm font-semibold text-gray-900">actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="collaboration in collaborations" :key="collaboration.id">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {{ collaboration.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ collaboration.link }}
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <NuxtLink :to="`/admin/collaborations/${collaboration.id}/edit`"
                                            class="text-indigo-600 hover:text-indigo-900">
                                            <span>Edit</span>
                                        </NuxtLink>
                                        <button @click="deleteCollaboration(collaboration.id, collaboration.image)"
                                            class="text-red-600 px-2 hover:text-red-900 cursor-pointer">Delete</button>
                                        <!-- <a href="#" >Edit<span
                                                class="sr-only">, Lindsay Walton</span></a> -->
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