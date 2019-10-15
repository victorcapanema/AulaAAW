import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
var CryptoJS = require("crypto-js");
var PRIV_KEY = "d3728662bef0b75377a5a0d32268fc41f46a32d8";
var PUBLIC_KEY = "739e3c6a2dbbe00861ad37fd9c6f2548";
var ts = new Date().getTime();
var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = '739e3c6a2dbbe00861ad37fd9c6f2548';

const state = {
  data: []
}

const mutations = {
  RECEIVE_CHARACTERS (state, { characters }) {
    state.data = characters
  }
}

const actions = {
  async FETCH_CHARACTERS ({ commit }, name) {
    const url = urlBaseMarvel + 'characters?' + `name=${name}` + 'ts=' + ts +'&apikey=' + apiKey + '&hash=' + hash;
    const { data } = await axios.get(url)
    commit('RECEIVE_CHARACTERS', { characters: data.results })
  }
}

const getters = {
  characters: state => {
    return state.data.map(data => {
      return {
        name: data.name,
        url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
        image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        description: data.description === '' ? 'No description listed for this character.' : data.description
      }
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
