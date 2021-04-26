import Axios from "axios";

const state = {
  data: [123456]
};

const mutations = {
  setData: (state, res) => {
    state.data = res;
  }
};

const actions = {
  fetchingData: async ({ commit }) => {
    Axios.get("https://api.hnb.hr/tecajn/v1?datum=2014-03-02")
      .then(res => commit("setData", res.data))
      .catch(err => console.log(err));
  }
};

const getters = {
  test: state => state.data
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
