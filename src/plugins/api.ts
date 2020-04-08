import Vue, { PluginObject } from 'vue';
import auth from '@/api/auth';
import user from '@/api/user';
import doctor from '@/api/doctor';
import specialities from '@/api/specialities';
import { Api } from '@/common/types';

const endpoints: Api = {
  auth,
  user,
  doctor,
  specialities
};

const Plugin: PluginObject<any> = {
  install: (Vue: Vue | any) => {
    Vue.prototype.$api = { ...endpoints };
  }
};

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api;
  }
}

Vue.use(Plugin);
