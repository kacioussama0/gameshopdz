import aa from 'search-insights'

export default defineNuxtPlugin((nuxtApp) => {
    aa('init', {
        appId: 'NBN8MJS91Y',
        apiKey: 'c5f1ad603b7093bf0a7e8fc3d9a6570a',
        useCookie: true,
    })


    nuxtApp.provide('aa', aa)
})