<script setup>
const props = defineProps({
    btnType: {
        type: String,
        default: 'info'
    }
});
</script>

<template>
    <button
        :class="['block rounded-md px-3 py-2 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 capitalize', props.btnType]">
        <slot></slot>
    </button>
</template>

<style scoped>
.info {
    background-color: #4f46e5;
    outline-color: #4f46e5;
}

.info:hover {
    background-color: #6366f1;
}

.info:focus-visible {
    outline-color: #4f46e5;
}


.error {
    background-color: #dc2626;
    outline-color: #dc2626;
}

.error:hover {
    background-color: #ef4444;
}

.error:focus-visible {
    outline-color: #dc2626;
}
</style>