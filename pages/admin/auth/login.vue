<script setup>

definePageMeta({
    layout: "auth-layout",
});

const { setCookie } = useCookie();
const { showAlert, loadingAlert, closeAlert } = useAlert();

const initialValues = reactive({
    email: null,
    password: null
});

const { handleSubmit } = useForm(initialValues)

const login = handleSubmit(async () => {
    try {
        loadingAlert()
        const data = await $fetch('/api/users/login', {
            method: 'POST',
            body: initialValues,
        });
        const { token } = data[0];
        setCookie(token);
        await navigateTo('/admin');
        closeAlert()
    } catch (error) {
        showAlert('error', error.response.statusText)
    }
})


</script>

<template>
    <div class="flex h-screen">
        <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">

                <div class="mt-10">
                    <div>
                        <form @submit.prevent="login" class="space-y-6">

                            <ViewComponentBaseTextInput rules="required|email" v-model="initialValues.email" name="email"
                                type="email" id="email" label="email" />

                            <ViewComponentBaseTextInput rules="required" v-model="initialValues.password" name="password"
                                id="password" label="password" />

                            <div>
                                <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log
                                    in</button>
                            </div>
                        </form>
                        <NuxtLink to="/admin/auth/signup">signup</NuxtLink>
                    </div>

                </div>
            </div>
        </div>
        <div class="relative hidden w-0 flex-1 lg:block">
            <img class="absolute inset-0 h-full w-full object-cover" src="~/assets/images/login-bg.avif" alt="">
        </div>
    </div>
</template>