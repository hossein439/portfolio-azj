<script setup>

definePageMeta({
    layout: "admin-layout",
    middleware: ['auth'],
    meta: {
        requiresAuth: true,
    },
});

const { deleteAlert, successAlert, loadingAlert, closeAlert } = useAlert();

const settings = ref([]);

const getAllsetting = async () => {
    loadingAlert()
    const data = await $fetch('/api/settings/getAll', { method: 'GET' })
    settings.value = data;
    closeAlert()
}

getAllsetting();


const deletesetting = (id, image) => {

    deleteAlert('Are you sure you want to remove this category?')
        .then(async (result) => {
            if (result.isConfirmed) {
                loadingAlert()
                await $fetch('/api/settings/delete', {
                    method: 'POST',
                    body: {
                        id,
                        image
                    }
                });
                successAlert('', 'You deleted setting successfully');
                getAllsetting()
            }
        })

}

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <AdminViewTableHeader title="settings" btn-text="add setting" link="settings/create">
        </AdminViewTableHeader>
        <div v-if="settings.length" class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <AdminViewTheadTable :thead="['id', 'meta', 'actions']"></AdminViewTheadTable>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="setting in settings" :key="setting.id">
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {{ setting.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ setting.meta }}
                                    </td>
                                    <td class="relative whitespace-nowrap px-3 py-4 text-right text-sm font-medium">
                                        <NuxtLink :to="`/admin/settings/${setting.id}/edit`"
                                            class="text-indigo-600 hover:text-indigo-900">
                                            <span>Edit</span>
                                        </NuxtLink>
                                        <button @click="deletesetting(setting.id, setting.image)"
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