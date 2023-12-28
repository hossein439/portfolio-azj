<script setup>

definePageMeta({
    layout: "authlayout",
});

const { setCookie } = useCookie();

const initialValues = reactive({
    email: null,
    password: null
});

const login = async () => {
    const data = await $fetch('/api/users/login', {
        method: 'POST',
        body: initialValues,
    });
    const { token } = data[0];
    setCookie(token);
    await navigateTo('/admin');
}


</script>

<template>
    <div class="flex h-screen">
        <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">

                <div class="mt-10">
                    <div>
                        <form @submit.prevent="login" class="space-y-6">

                            <ViewComponentBaseTextInput rules="required|min:3|max:20" v-model="initialValues.email"
                                name="email" id="email" label="email" />

                            <ViewComponentBaseTextInput rules="required|min:3|max:20" v-model="initialValues.password"
                                name="password" id="password" label="password" />


                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                    <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-700">Remember
                                        me</label>
                                </div>

                                <div class="text-sm leading-6">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
                                        password?</a>
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                    in</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        <div class="relative hidden w-0 flex-1 lg:block">
            <img class="absolute inset-0 h-full w-full object-cover" src="~/assets/images/client/login-bg.avif" alt="">
        </div>
    </div>
</template>