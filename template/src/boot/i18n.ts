import { boot } from 'quasar/wrappers';
import messages from 'src/i18n';
import Vue from 'vue';
import VueI18n from 'vue-i18n';

declare module 'vue/types/vue' {
  {{#if_eq lintConfig "airbnb"}}
  // eslint-disable-next-line no-shadow
  {{/if_eq}}
  interface Vue {
    i18n: VueI18n;
  }
}

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en-us",
  fallbackLocale: "en-us",
  messages
});

export default boot(({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n;
});
