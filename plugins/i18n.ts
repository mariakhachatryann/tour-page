import { createI18n } from "vue-i18n"
import en from "../locales/en.json";
import arm from "../locales/arm.json";
import ru from "../locales/ru.json";

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: "ENG",
        messages: {
            "ENG": en,
            "ARM": arm,
            "RU": ru
        }
    })

    vueApp.use(i18n)
})