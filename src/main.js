import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import WizardFormVue from './views/WizardForm.vue'
import Vue3FormWizard from 'vue3-form-wizard'
import store from './store'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .component('Vue3FormWizard', Vue3FormWizard)
  .component('WizardFormVue', WizardFormVue)
  .mount('#app')
