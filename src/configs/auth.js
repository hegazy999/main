export default {
  meEndpoint: '/auth/me',
  loginEndpoint: 'https://tqneen-testing-be1-dot-tqneen-406411.ew.r.appspot.com/api/admin/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'token',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
