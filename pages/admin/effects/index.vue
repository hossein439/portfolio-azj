<script setup>

definePageMeta({
    layout: "admin-layout",
    middleware: ['auth'],
    meta: {
        requiresAuth: true,
    },
});
const { deleteAlert, successAlert, loadingAlert, closeAlert } = useAlert();
const effects = ref([]);

const getAllEffects = async () => {
    loadingAlert()
    const data = await $fetch('/api/effects/getAll', {
        method: 'GET'
    })
    effects.value = data;
    closeAlert()
}
getAllEffects();

const deleteEffect = async (id, image, gif) => {
    deleteAlert('Are you sure you want to remove this effect?')
        .then(async (result) => {
            if (result.isConfirmed) {
                loadingAlert()
                await $fetch('/api/effects/delete', {
                    method: 'POST',
                    body: {
                        id,
                        image,
                        gif
                    }
                })
                successAlert('', 'You deleted effect successfully');
                getAllEffects();
            }
        })
}

</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <AdminViewTableHeader title="effects" btn-text="add effect" link="effects/create">
        </AdminViewTableHeader>
        <div v-if="effects.length" class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <AdminViewTheadTable :thead="['id', 'name', 'link', 'category', 'actions']">
                            </AdminViewTheadTable>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="effect in effects" :key="effect.id">
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {{ effect.id }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ effect.name }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ effect.link }}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {{ effect.categories?.name }}
                                    </td>
                                    <td class="relative whitespace-nowrap px-3 py-4 text-right text-sm font-medium">
                                        <NuxtLink :to="`/admin/effects/${effect.id}/edit`"
                                            class="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </NuxtLink>
                                        <button @click="deleteEffect(effect.id, effect.image, effect.gif)"
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
