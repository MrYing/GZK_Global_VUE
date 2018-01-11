/**
 * Created by l on 2017/10/9.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import state from './state';
import getters from './getters';
import actions from './actions';
import Local from 'local';


Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: Local.getJSON('vuex') || state,
  mutations,
  actions,
  getters,
  strict: debug,
})
