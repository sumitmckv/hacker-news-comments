import ky from 'ky';
import store from '../store';

const BASE_URL: URL = new URL(
  'https://hacker-news-comments-api.vercel.app/api/'
);
const apiClient = ky.create({
  prefixUrl: BASE_URL,
  headers: {},
  hooks: {
    beforeRequest: [
      request => {
        store.commit('loader/startLoading');
        const stroage = window.localStorage.vuex;
        const state = stroage ? JSON.parse(stroage) : null;
        const token = state?.user?.currentUser?.token;
        if (token) {
          request.headers.set('authorization', token);
        }
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
