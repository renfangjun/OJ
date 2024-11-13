import { createStore, StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "noLogin",
    },
  }),
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
  actions: {
    getLoginUser({ commit, state }, payload) {
      //TODO 改为从远程获取登录信息
      commit("updateUser", { userName: "方俊", role: "admin" });
    },
  },
} as StoreOptions<any>;
