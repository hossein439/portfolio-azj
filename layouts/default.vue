<script setup>
const title = useState('title', () => 'Portofilo AZJ');
</script>

<template>
    <Title> {{ title }} </Title>
    <div class="max-w-[1512px] mx-auto">
    <LayoutComponentTheHeader></LayoutComponentTheHeader>
        <slot></slot>
        <LayoutComponentTheFooter></LayoutComponentTheFooter>
    </div>
</template>

