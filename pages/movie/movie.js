// pages/movie/movie.js
const axios = require('../../utils/axios')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: [],
    movies: [],
    pn: 1, // 多少页
    size: 12 // 一页多少个
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getSwiper()
    this.getMovie()
  },
  getSwiper() {
    axios.get('/swiper').then(res => {
      this.setData({
        swiper: res.data
      })
    })
  },
  getMovie() {
    axios.get('/movies', {
      pn: this.data.pn,
      size: this.data.size
    }).then(res => {
      this.setData({
        movies: res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})