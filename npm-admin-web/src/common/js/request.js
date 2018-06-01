import axios from 'axios';
import store from '@/store';
import config from '@/common/config';
import { Loading, Message } from 'element-ui';

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 9000
});

let loading = {};

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.commit('set_loading_status', true);
    loading = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    const userInfo = store.getters.userInfo;
    if (userInfo) {
      config.headers['user-token'] = userInfo;
    }
    return config;
  }, function (error) {
    // Do something with request error
    console.log('response-error', error);
    Message.error({
      message: error.toString(),
      duration: 2000
    });
    store.commit('set_loading_status', false);
    loading.close();
    return Promise.reject(error);
  });

instance.interceptors.response.use(function (response) {
    // Do something with response data
    store.commit('set_loading_status', false);
    loading.close();
    return response;
  }, function (error) {
    // Do something with response error
    console.log('response-error', error);
    Message.error({
      message: error.toString(),
      duration: 2000
    });
    store.commit('set_loading_status', false);
    loading.close();
    return Promise.reject(error);
  });

export default instance;
