import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    countries: [],
    countriesFilters: [],
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.countries = payload;
    },
    SET_COUNTRIES_FILTERS(state, payload) {
      state.countriesFilters = payload;
    },
  },
  actions: {
    getCountries(context) {
      try {
        axios.get('https://restcountries.com/v3.1/all').then((response) => {
          context.commit('SET_COUNTRIES', response.data);
          console.log(response.data);
        });
      } catch (error) {
        return error;
      }
    },

    filterRegion({ commit, state }, region) {
      const filter = state.countries.filter((country) => {
        return country.region.includes(region);
      });
      commit('SET_COUNTRIES_FILTERS', filter);
    },

    filterName({ commit, state }, text) {
      const textRegion = text.toLowerCase();
      const filter = state.countries.filter((country) => {
        const textApi = country.name.common.toLowerCase();
        if (textApi.includes(textRegion)) {
          return country;
        }
      });
      commit('SET_COUNTRIES_FILTERS', filter);
    },
  },
  getters: {
    getCountriesFilters(state) {
      return state.countriesFilters;
    },
  },
  modules: {},
});
