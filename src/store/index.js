import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
// 使用vuex
Vue.use(Vuex);
// 暴露store  使用模块化
export default new Vuex.Store({
  modules: {
    home,
  },
});
