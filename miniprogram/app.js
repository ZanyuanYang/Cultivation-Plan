//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    if(!wx.cloud){
      console.error('cloud error');
    }else{
      wx.cloud.init({
        env: 'cloud1-3g9kdfc18ecff808',
        traceUser: true,
      })
    }
  },

  globalData: {
    userInfo: {},
    openid: null,
  }

})
