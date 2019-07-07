//index.js
//获取应用实例
const app = getApp()
const axios = require('../../utils/axios')
Page({
    data: {
        swiper: [],
        news: []
    },
    getSwiper () {
      const _this = this
        axios.get('/swiper_news').then(res => {
            _this.setData({
                swiper: res.data
            })
        })
    },
    getNews () {
        const _this = this
        axios.get('/news').then(res => {
            _this.setData({
                news: res.data.map(item => {
                    item.timeStr = new Date(item.update_time).toLocaleString()
                    return item
                })
            })
        })
    },
    onLoad () {
        this.getSwiper()
        this.getNews()
    }
})
