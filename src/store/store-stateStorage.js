import Axios from "axios";

const state = {
  data: [],
  selectedCurrencyFirstGraph: "",
  optionsFirstGraph: ["EUR", "USD", "AUD", "GBP"]
};

const mutations = {
  setData: (state, res) => {
    state.data = res;
    console.log("mutations setData", res);
  },

  setCurrencyFirstGraph: (state, payload) => {
    state.selectedCurrencyFirstGraph = payload;
  }
};

const actions = {
  fetchingData: ({ commit }) => {
    const today = new Date();
    const yyyyLastDay = today.getFullYear();
    const mmLastDay = String(today.getMonth() + 1).padStart(2, "0");
    const ddLastDay = String(today.getDate()).padStart(2, "0");
    const lastDay = yyyyLastDay + "-" + mmLastDay + "-" + ddLastDay;

    let firstDay = new Date(today);
    const rangeOfDays = 6;
    firstDay.setDate(firstDay.getDate() - rangeOfDays);
    const yyyyFirstDay = firstDay.getFullYear();
    const mmFirstDay = String(firstDay.getMonth() + 1).padStart(2, "0");
    const ddFirstDay = String(firstDay.getDate()).padStart(2, "0");
    firstDay = yyyyFirstDay + "-" + mmFirstDay + "-" + ddFirstDay;

    Axios.get(
      `https://api.hnb.hr/tecajn/v1?datum-od=${firstDay}&datum-do=${lastDay}`
    )
      .then(response => {
        const option = state.optionsFirstGraph;
        let res = response.data;
        res = res.filter(row => option.indexOf(row.Valuta) > -1);
        commit("setData", res);
        console.log("fetching", res);
      })
      .catch(err => console.log(err));
  }
};

const getters = {
  labelSetFirstGraph: state => state.selectedCurrencyFirstGraph,
  optionsFirstGraph: state => state.optionsFirstGraph,
  setExchangeRateFirstGraph: state => {
    const currency = state.selectedCurrencyFirstGraph;
    const data = state.data;
    let exchangeArray = [];
    data.filter(row => {
      if (row.Valuta == currency) {
        exchangeArray.push();
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
