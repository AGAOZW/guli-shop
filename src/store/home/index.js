import { reqCategory } from "@/api";
const state = {
  category: [],
};
const mutations = {
  GETCATEGORY(state, category) {
    state.category = category;
  },
};
const actions = {
  async getCategory({ commit }) {
    try {
      let res = await reqCategory();
      commit("GETCATEGORY", res.data);
    } catch (error) {}
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
