<script setup>
import { useUiStore } from '@/stores/panel/ui'

const uiStore = useUiStore()
const setColor = computed(() => uiStore.isToggled ? '#E6EFFF' : '#000')

</script>

<template>
    <div class="hamburger-menu" :class="uiStore.isToggled && 'open'" @click="uiStore.handleToggel">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<style scoped>
.hamburger-menu {
    width: 30px;
    height: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.line {
    margin-left: auto;
    width: 24px;
    height: 2px;
    background-color: v-bind(setColor);
    transition: 0.4s;
}

.hamburger-menu.open .line:nth-child(1) {
    transform: rotate(-45deg) translate(-6.5px, 6px);
}

.hamburger-menu.open .line:nth-child(2) {
    opacity: 0;
}

.hamburger-menu.open .line:nth-child(3) {
    transform: rotate(45deg) translate(-6.5px, -6px);
}
</style>