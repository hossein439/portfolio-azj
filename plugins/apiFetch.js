import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('apiFetch', $fetch.create(
        {
            baseURL: useRuntimeConfig().public.baseUrl,
            credentials: 'include',
        }
    ));
})