<script setup>
const props = defineProps({
    size: {
        type: String,
        default: 'base',
    },
    iconName: {
        type: String,
    }
});


const isExistIcon = props.iconName ? '2rem' : '1rem';
const getComponent = computed(() => defineAsyncComponent(() => import(`../../common/${props.iconName}.vue`)))
</script>

<!-- ml-16 -->
<template>
    <button class="base-button flex justify-center py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF] hover:bg-[#025EFF] hover:text-[#E6EFFF] transition-all"
        :class="`text-${size}`">
        <span>
            <slot></slot>
        </span>
        <span v-if="iconName" class="base-button__icon">
            <component :is="getComponent"></component>
        </span>
    </button>
</template>

<style scoped>

.base-button {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.base-button:hover {
    padding-right: v-bind(isExistIcon);
}
.base-button__icon {
    position: absolute;
    right: -22px;
    transition: all .4s;
    display: block;
}
.base-button:hover > .base-button__icon{
    right: 0px;
}

</style>