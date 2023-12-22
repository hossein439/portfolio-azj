<script setup>

definePageMeta({
    layout: "adminlayout",
});

const { deleteAlert, successAlert } = useAlert();

const settings = ref([]);

const getAllsetting = async () => {
    const data = await $fetch('/api/settings/getAll', { method: 'GET' })
    settings.value = data;
}

getAllsetting();


const deletesetting = (id, image) => {

    deleteAlert('Are you sure you want to remove this category?')
        .then(async (result) => {
            if (result.isConfirmed) {
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
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">id
                                    </th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">meta
                                    </th>
                                    <th scope="col" class="px-12 py-3.5 text-right text-sm font-semibold text-gray-900">
                                        actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="setting in settings" :key="setting.id">
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                        {{ setting.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ setting.meta }}
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <NuxtLink :to="`/admin/settings/${setting.id}/edit`"
                                            class="text-indigo-600 hover:text-indigo-900">
                                            <span>Edit</span>
                                        </NuxtLink>
                                        <button @click="deletesetting(setting.id, setting.image)"
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