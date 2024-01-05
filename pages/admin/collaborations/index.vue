<script setup>
definePageMeta({
    layout: "adminlayout",
    middleware: ['auth'],
    meta: {
        requiresAuth: true, 
    },
});

const { deleteAlert, successAlert, loadingAlert, closeAlert } = useAlert();

const collaborations = ref([]);

const getAllCollaboration = async () => {
    loadingAlert()
    const data = await $fetch('/api/collaborations/getAll', {
        method: 'GET'
    })
    collaborations.value = data;
    closeAlert()
}

getAllCollaboration();


const deleteCollaboration = (id, image) => {

    deleteAlert('Are you sure you want to remove this category?')
        .then(async (result) => {
            if (result.isConfirmed) {
                loadingAlert()
                await $fetch('/api/collaborations/delete', {
                    method: 'POST',
                    body: {
                        id,
                        image
                    }
                })

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
                            <AdminViewTHeadTable :thead="['id', 'link', 'actions']"></AdminViewTHeadTable>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="collaboration in collaborations" :key="collaboration.id">
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {{ collaboration.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ collaboration.link }}
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap px-3 py-4 text-right text-sm font-medium">
                                        <NuxtLink :to="`/admin/collaborations/${collaboration.id}/edit`"
                                            class="text-indigo-600 hover:text-indigo-900">
                                            <span>Edit</span>
                                        </NuxtLink>
                                        <button @click="deleteCollaboration(collaboration.id, collaboration.image)"
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