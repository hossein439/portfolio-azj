import { defineStore } from 'pinia'
import state from "./states.blog";
import getters from "./getters.blog";
import actions from "./actions.blog";

export const useBlogStore = defineStore('blog', {
    state,
    getters,
    actions
})