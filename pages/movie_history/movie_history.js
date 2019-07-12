// pages/movieDtails/movieDtails.js
const axios = require('../../utils/axios')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieData: {},
    url: '',
    activeIndex: 0,
    guessData: [],
    currentTime: 0,
    isFirst: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHistory(options.id)
  },
  getHistory(id) {
    axios.get(`/movie_history/${id}`).then(res => {
      this.setData({
        movieData: res.data.movieData,
        url: res.data.movie.links[Number(res.data.index)],
        activeIndex: Number(res.data.index),
        currentTime:res.data.currentTime
      })
      const videoCtx = wx.createVideoContext('video')
      videoCtx.play();
      this.getGuess(res.data.movie._id)
    })
  },
  getMovies(id) {
    axios.get(`/movies/${id}`).then(res => {
      this.setData({
        movieData: res.data,
        url: res.data.links[0],
      })
    })
  },
  getGuess(id) {
    axios.get('/guess', {id}).then(res => {
      this.setData({
        guessData: res.data.map(item => {
          item.actorStr = item.actors.join(' ')
          return item
        })
      })
    })
  },
  getCurrentTime(e) {
    const {currentTime} = e.detail;
    if (this.data.isFirst) {
      const videoCtx = wx.createVideoContext('video')
      videoCtx.seek(Number(this.data.currentTime))
      this.setData({
        isFirst: false
      })
    }
    this.setData({
      currentTime
    })
  },
  changeUrl(e) {
    const index = e.target.dataset.index
    this.setData({
      url: this.data.movieData.links[index],
      activeIndex: Number(index)
    })
  },
  uploadPlayStatus () {
    axios.post('/movie_history', {
      movie_id: this.data.movieData._id,
      current_time: this.data.currentTime,
      index:this.data.activeIndex
    })
  },
  jump () {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.uploadPlayStatus()
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
    this.uploadPlayStatus()
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