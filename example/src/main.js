// import Vue from 'vue'
import Vue from "vue/dist/vue.esm.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
var app = new Vue({
  el: "#app",
  mounted() {
    console.log(this.message);
  },
  data() {
    return {
      message: "Hello Vue",
    };
  },
});
