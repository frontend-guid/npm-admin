import Cookies from 'js-cookie';
import appConfig from '@/common/config';

import {MessageBox, Notification} from 'element-ui';

import request from '@/common/js/request.js';

const TokenKey = appConfig.tokenKey;

/**
 * 获取用户信息的Token
 */
 export function GetToken () {
  return Cookies.getJSON(TokenKey);
};

// TODO：根据需要看是否需要传入过期时间
/**
 * 设置用户信息的Cookie
 * @param {[type]} token [description]
 */
 export function SetToken (token) {
  // return Cookies.set(TokenKey, token, { expires: 7 });
  return Cookies.set(TokenKey, token);
};

/**
 * 移除用户信息的Cookie
 */
 export function RemoveToken () {
  return Cookies.remove(TokenKey);
};

/**
 * Confirm 组件
 * @param {[type]} msg [description]
 */
 export function YgConfirm (msg) {
  return new Promise((resolve, reject) => {
    MessageBox.confirm(msg, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    .then(() => {
      resolve(true);
    })
    .catch(() => {
      resolve(false);
    });
  });
}

export function YgNotify (msg, position) {
  Notification({
    title: '提示',
    message: msg || '保存成功!',
    position: position || 'bottom-right',
    duration: 1000
  });
}

/**
 * Post Data 组件
 * @param {[type]} url      [description]
 * @param {[type]} postData [description]
 */
 export function YgPost (url, postData) {
  return new Promise((resolve, reject) => {
    request.post(url, postData)
    .then(res => {
      if (res.status === 200 && res.data && res.data.IsSuccessful) {
        resolve(res.data.Data);
      } else {
        resolve(null);
      }
    })
    .catch(err => {
      reject(err);
    });
  });
}

export function YgPostAll (requestList) {
  return new Promise((resolve, reject) => {
    Promise.all(requestList)
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    });
  });
}
