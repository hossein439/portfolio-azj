<template>
    <thead class="bg-gray-50">
        <tr>
            <th v-for="(item, index) in thead" :key="index" scope="col" :class="[setClass(item)]">{{ item }}
            </th>
        </tr>
    </thead>
</template>

<script setup>
defineProps({
    thead: {
        type: Array,
        required: true
    }
})

const idClass = 'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 capitalize'

const defaultClass = 'px-3 text-left py-3.5 text-sm font-semibold text-gray-900 capitalize';

const actionClass = 'px-12 text-right py-3.5 text-sm font-semibold text-gray-900 capitalize';

const setClass = (item) => {
    return item.includes('actions') ? actionClass : defaultClass
}

</script>