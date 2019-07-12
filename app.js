//app.js
const axios = require('./utils/axios')
App({
  globalData: {
    userInfo: null
  },
  login() {
    wx.login({
      success(res) {
        console.log(res);
        axios.post('/login',{
         code: res.code,
         appid:'wxf030662a70118939',
         secret:'3fd001508bce7387ed2c91b0a572c6a6'
       }).then(tokenData => {
         wx.setStorageSync('token', tokenData.token)
        })
      }
    })
  },
  onLaunch () {
  this.login()
  }
})