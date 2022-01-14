const configuration = {
  client_id: '4k8dfsfe7m1u2nsj86p2dif6mi',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  response_type: 'code',
  post_logout_redirect_uri: 'http://localhost:3000/',
  scope: 'openid profile email',
  authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_GXpsbmW15/.well-known/openid-configuration',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export default configuration;
