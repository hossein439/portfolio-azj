<script setup>
const title = useState('title', () => 'Nuxt 3 Blog');
const { removeUser, getUser, isLoggedIn } = useUser();
const { getCookie } = useCookie();

onMounted(() => {
    const isExistToken = getCookie('auth_token');
    if (!isExistToken) removeUser();
    useState('user', () => getUser('user'));
});
</script>

<template>
    <Title> {{ title }} </Title>
    <LayoutComponentTheHeader></LayoutComponentTheHeader>
    <slot></slot>
    <LayoutComponentTheFooter></LayoutComponentTheFooter>
</template>

