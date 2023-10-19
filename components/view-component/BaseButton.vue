<script setup>
defineProps({
    size: {
        type: String,
        require: true,
    }
})
</script>
<template>
    <button
        class="flex justify-center ml-16 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF]"
        :class="`text-${size}`">
        <slot></slot>
        
    </button>
</template>