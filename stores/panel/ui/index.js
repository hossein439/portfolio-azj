import { defineStore } from 'pinia'
import state from "./states.ui";
import getters from "./getters.ui";
import actions from "./actions.ui";

export const useUiStore = defineStore('uiStore', {
    state,
    getters,
    actions
})