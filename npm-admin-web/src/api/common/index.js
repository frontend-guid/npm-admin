import request from '@/common/js/request.js';

export function queryUserInfoByToken (data) {
  return new Promise((resolve, reject) => {
    request.post('/Common/QueryUserNameByCookie', data)
    .then(res => {
      if (res.status === 200 && res.data && res.data.IsSuccessful) {
        resolve(res.data.Data);
      } else {
        reject(new Error('获取用户信息失败'));
      }
    })
    .catch(err => {
      reject(err);
    });
  });
}
