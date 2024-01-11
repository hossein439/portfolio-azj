<template>
    <component :is="iconName" v-bind="$attrs" />
</template>

<script setup>

const props = defineProps({
    icon: {
        type: String,
        required: true
    }
});

const iconName = computed(() => defineAsyncComponent(() => import(`../../icons/${props.icon}.vue`)))

</script>