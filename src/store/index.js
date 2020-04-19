import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  id: localStorage.id,
  username: localStorage.username
};

const mutations = {
  setUser(state, params) {
    state.id = params.id;
    state.username = params.username;
    localStorage.username = params.username;
    localStorage.id = params.id;
  }
};

const actions = {
  SignIn(context, user) {
    return new Promise(resolve => {
      context.commit("setUser", user);
      console.log("LOG IN");
      resolve();
    });
  },
  SignOut(context) {
    return new Promise(resolve => {
      // axios
      //   .get("Logout")
      //   .then(response => {
      //     removeIsLogin();
      //     localStorage.removeItem("loginUsername");
      //     // 移除之前在axios头部设置的token,现在将无法执行需要token的事务
      //     delete axios.defaults.headers.common["Authorization"];
      //     resolve(response);
      //   })
      //   .catch(error => {
      //     reject(error);
      //   });
      context.commit("setUser", "");
      resolve();
    });
  }
};
const getters = {
  isLoggedIn: state =>
    state.username == "undefined" ? false : !!state.username,
  getUsername: state => state.username,
  getId: state => state.id
};
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
