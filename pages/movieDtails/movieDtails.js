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
        guessData: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getMovies(options.id)
        this.getGuess(options.id)
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
        axios.get('/guess',{id}).then(res => {
            this.setData({
                guessData: res.data.map(item => {
                    item.actorStr = item.actors.join(' ')
                    return item
                })
            })
        })
    },
    changeUrl(e) {
        const index = e.target.dataset.index
        this.setData({
            url: this.data.movieData.links[index],
            activeIndex: Number(index)
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