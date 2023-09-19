import { defineStore } from "pinia";

export const useMyStore = defineStore("store", {
    state: () => {
        return {
            a: 5
        }
    }
})