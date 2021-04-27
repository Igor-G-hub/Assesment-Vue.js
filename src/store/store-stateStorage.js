import Axios from "axios";

const state = {
  data: [],
  selectedCurrencyFirstGraph: ""
};

const mutations = {
  setData: (state, res) => {
    state.data = res;
    console.log("mutations setData", res);
  },

  setCurrencyFirstGraph: (state, payload) => {
    // console.log("mutations setCurrencyFirstGraph", payload);
    state.selectedCurrencyFirstGraph = payload;
  }
};

const actions = {
  fetchingData: ({ commit }) => {
    Axios.get("https://api.hnb.hr/tecajn/v1?datum=2014-03-02")
      .then(res => commit("setData", res.data))
      .catch(err => console.log(err));
  }
};

const getters = {
  test: state => state.data,

  proba: state => console.log("getters", test)
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
