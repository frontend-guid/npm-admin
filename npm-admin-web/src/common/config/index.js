const env = process.env.NODE_ENV;
let baseUrl = '';

switch (env) {
  case 'development':
  // baseUrl = 'http://localhost:3838/api/';
  baseUrl = 'http://localhost:3838/api/';
  break;
  case 'production':
  baseUrl = 'http://luckydrawapi.yiguo.com/api/';
  break;
  case 'devtest':
  baseUrl = 'http://luckydrawapi.devtest.yiguo.com/api/';
  break;
  default:
  baseUrl = 'http://localhost:3838/api/';
}

const AppConfig = {
  baseUrl: baseUrl,
  tokenKey: '_omp_t_user_name',
  uploadImgUrl: 'http://img04.yiguo.com/Handlers/CMSWebUpload.ashx?swfupload=false&UserID=cms&Token=08DCA7DE5A7D445BA29B01BB20E4D9DA'
};

export default AppConfig;
