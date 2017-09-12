import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './routes';
import amazeuiVue from 'amazeui-vue';
import App from './app.vue'
Vue.config.debug = true;

Vue.use(amazeuiVue);
Vue.use(VueRouter);

new Vue({
  el: '.admin-content',
  router,
  template: '<App/>',
  components: { App }
})
