import ky from 'ky';
import store from '../store';

const stroage = window.localStorage.vuex;
const state = stroage ? JSON.parse(stroage) : null;
const token = state?.user?.currentUser?.token;

const BASE_URL: URL = new URL('http://localhost:8184/api/');
const apiClient = ky.create({
  prefixUrl: BASE_URL,
  headers: {authorization: token},
  hooks: {
    beforeRequest: [
      () => {
        store.commit('loader/startLoading');
      },
    ],
    afterResponse: [
      () => {
        store.commit('loader/endLoading');
      },
    ],
  },
});
const {get, post, put} = apiClient;
export {get, post, put};
