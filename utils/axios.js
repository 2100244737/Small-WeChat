class Axios {
    constructor (options) {
        this.baseURL = options.baseURL || 'https://movie.yaojunrong.com'
    }
    sendMsg (url, data, method) {
        const _this = this
        return new Promise((resolve, reject) => {
            wx.request({
                url: _this.baseURL + url,
                data,
                method,
                success (res) {
                    resolve(res.data)
                },
                fail () {

                }
            })
        })
    }
    get (url, data){
        return this.sendMsg(url, data, 'GET')
    }
    post (url, data) {
        return this.sendMsg(url, data, 'POST')
    }
}
const axios = new Axios({
    baseURL: 'https://movie.yaojunrong.com'
})
module.exports = axios