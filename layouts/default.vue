<script setup>
const title = useState('title', () => 'Nuxt 3 Blog');
</script>

<template>
    <Title> {{ title }} </Title>
    <div class="max-w-[1512px] mx-auto">
    <LayoutComponentTheHeader></LayoutComponentTheHeader>
        <slot></slot>
        <LayoutComponentTheFooter></LayoutComponentTheFooter>
    </div>
</template>

