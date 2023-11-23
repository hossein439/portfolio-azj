<script setup>
const title = useState('title', () => 'Nuxt 3 Blog');
</script>

<template>
    <Title> {{ title }} </Title>
    <LayoutComponentTheHeader></LayoutComponentTheHeader>
    <slot></slot>
    <LayoutComponentTheFooter></LayoutComponentTheFooter>
</template>

