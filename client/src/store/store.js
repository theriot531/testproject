import Vue from "vue";
import Vuex from "vuex";

//Describing the vuex for the application
Vue.use(Vuex);
export const store = new Vuex.Store({
  strict: true,
  // State
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  // Getters
  getters: {
    getUser: (state) => {
      return this.state.user;
    },
  },
  // Mutations
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  // Actions
  actions: {
    //Tokens to store the current user
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
  },
});
