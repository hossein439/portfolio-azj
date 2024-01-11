<script setup>

definePageMeta({
    layout: "auth-layout",
});

const { setCookie } = useCookie();
const { showAlert, loadingAlert, closeAlert } = useAlert();


const isOtpSended = ref(true);

const initialValues = reactive({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    otp: null
});

const { handleSubmit } = useForm(initialValues)

const sendOtp = handleSubmit(async () => {
    try {
        loadingAlert()
        await $fetch('/api/users/sendOtp', {
            method: 'POST',
            body: initialValues,
        });
        isOtpSended.value = false
        closeAlert()
    } catch (error) {
        console.error(error)
        showAlert('error', 'Your email exists', 4000)
    }
})

const signup = handleSubmit(async () => {
    try {
        const data = await $fetch('/api/users/signup', {
            method: 'POST',
            body: initialValues,
        });
        const { token } = data[0];
        setCookie(token);
        await navigateTo('/admin');
    } catch (error) {
        console.error(error)
    }
})


</script>

<template>
    <div class="flex h-screen">
        <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">

                <div class="mt-10">
                    <div v-if="isOtpSended">
                        <form @submit.prevent="sendOtp" class="space-y-6">

                            <ViewComponentBaseTextInput rules="required" v-model="initialValues.firstname" name="firstname"
                                id="firstname" label="First Name" />

                            <ViewComponentBaseTextInput rules="required" v-model="initialValues.lastname" name="lastname"
                                id="lastname" label="Last Name" />

                            <ViewComponentBaseTextInput rules="required" v-model="initialValues.email" name="email"
                                id="email" label="email" />

                            <ViewComponentBaseTextInput rules="required" v-model="initialValues.password" name="password"
                                id="password" label="password" />

                            <div>
                                <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                    up
                                </button>
                            </div>`
                        </form>
                    </div>

                    <form v-else @submit.prevent="signup" class="space-y-6">
                        <ViewComponentBaseTextInput rules="required" v-model="initialValues.otp" name="otp" id="otp"
                            label="Otp" />
                        <div>
                            <button type="submit"
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                up
                            </button>
                        </div>
                    </form>
                    <NuxtLink to="/admin/auth/login">login</NuxtLink>


                </div>
            </div>
        </div>
        <div class="relative hidden w-0 flex-1 lg:block">
            <img class="absolute inset-0 h-full w-full object-cover" src="~/assets/images/login-bg.avif" alt="">
        </div>
    </div>
</template>