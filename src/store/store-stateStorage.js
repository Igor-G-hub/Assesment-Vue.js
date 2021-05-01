import Axios from "axios";

const state = {
  data: [],
  selectedCurrencyFirstGraph: "",
  selectedCountrySecondGraph: "",
  optionsFirstGraph: ["EUR", "USD", "AUD", "GBP"],
  optionsAndLabelsSecondGraph: {Poljska: 'PLN', Japan: 'JPY', Češka: 'CZK', Švicarska: 'CHF'}
};

const mutations = {
  setData: (state, res) => {
    state.data = res;
   },

  setCurrencyFirstGraph: (state, payload) => {
    state.selectedCurrencyFirstGraph = payload;
    localStorage.setItem('selectedCurrencyFirstGraph', payload);    
  },

  setCountrySecondGraph: (state, payload) => {
      state.selectedCountrySecondGraph = payload;
      localStorage.setItem('selectedCountrySecondGraph', payload);
      
  },

  storageCurrencyFirstGraph: state => {
    if (localStorage.selectedCurrencyFirstGraph) {
      state.selectedCurrencyFirstGraph = localStorage.selectedCurrencyFirstGraph;
    }
  },

  storageCountrySecondGraph: state => {
    if (localStorage.selectedCountrySecondGraph) {
      state.selectedCountrySecondGraph = localStorage.selectedCountrySecondGraph;
    }
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
        const optionsArrayFirstGraph = state.optionsFirstGraph;
        const optionsObjectSecondGraph = state.optionsAndLabelsSecondGraph;
        const optionsArraySecondGraph = [];
            for (let country in optionsObjectSecondGraph) {
              optionsArraySecondGraph.push(country);
            };
        let res = response.data;
        res = res.filter(row => optionsArrayFirstGraph.indexOf(row.Valuta) > -1 ||
        optionsArraySecondGraph.indexOf(row.Država) > -1);
        commit("setData", res);
      })
      .catch(err => console.log(err));
  }
};

const getters = {
  labelSetFirstGraph: state => state.selectedCurrencyFirstGraph,
  labelSetSecondGraph: state => {
    const country = state.selectedCountrySecondGraph;
    const optionsObject = state.optionsAndLabelsSecondGraph;
    const currencyLabel = optionsObject[country];
    return currencyLabel;
  },
  
  optionsFirstGraph: state => state.optionsFirstGraph,
  optionsSecondGraph: state => {
    const options = state.optionsAndLabelsSecondGraph;
    let countryArray = [];
    for (let country in options) {
      countryArray.push(country);
    }
    return countryArray;
  },
  setGraphsDates: state => {
    const data = state.data;
     const arrayOfDates = data.map(row => row.['Datum primjene']);     
     const reduceDuplicateDates = arrayOfDates.reduce((accum, currVal) => {
      if (accum.indexOf(currVal) == -1) {
          accum.push(currVal);
      }
      return accum;
    }, []);
    
    return reduceDuplicateDates;         
  },
  setExchRatesFirstGraph: state => {
    const data = state.data;
    const currency = state.selectedCurrencyFirstGraph;
    const arrayOfRates = [];
    data.map(row => {
      if (row.Valuta == currency) {
        arrayOfRates.push(row.['Srednji za devize'].replace(',', '.'))
      }
    });
    return arrayOfRates; 
  },

  setExchRatesSecondGraph: state => {
    const data = state.data;
    const country = state.selectedCountrySecondGraph;
    const arrayOfRates = [];
    data.map(row => {
      if (row.Država == country) {
        arrayOfRates.push(row.['Srednji za devize'].replace(',', '.'));
      }
    });
    return arrayOfRates; 
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
