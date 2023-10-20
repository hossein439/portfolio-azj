<script setup>
const props = defineProps({
    size: {
        type: String,
        require: true,
    },
    iconName: {
        type: String,
    }
});

const getComponent = computed(() => defineAsyncComponent(() => import(`../../common/${props.iconName}.vue`)))
</script>


<template>
    <button class="base-button flex justify-center ml-16 py-2 px-4 rounded-lg capitalize text-[#025EFF] border-2 border-[#025EFF] hover:bg-[#025EFF] hover:text-[#E6EFFF] transition-all"
        :class="`text-${size}`">
        <span>
            <slot></slot>
        </span>
        <span class="base-button__icon">
            <component v-if="iconName" :is="getComponent"></component>
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
    padding-right: 2rem ;
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