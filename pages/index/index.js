// 引入网络请求函数，路径需要补全
import { request } from '../../request/index.js'

//Page Object
Page({
    data: {
        swiperList: [], // 轮播图数组
        categroyList: [], // 导航数组
        floorList: [] // 商品图片堆叠
    },
    //options(Object)
    onLoad: function(options) {
        this.getSwiperList();
        this.getCategroyList();
        this.getFloorList();
    },
    getSwiperList() {
        request({ url: '/home/swiperdata' })
            .then(res => {
                this.setData({
                    swiperList: res.data.message
                })
            })
            .catch(err => {
                console.log(err);
            });
    },
    getCategroyList() {
        request({ url: '/home/catitems' })
            .then(res => {
                this.setData({
                    categroyList: res.data.message
                })
            })
            .catch(err => {
                console.log(err);
            });
    },
    getFloorList() {
        request({ url: '/home/floordata' })
            .then(res => {
                this.setData({
                    floorList: res.data.message
                })
            })
            .catch(err => {
                console.log(err);
            });
    },
    // onReady: function() {

    // },
    // onShow: function() {

    // },
    // onHide: function() {

    // },
    // onUnload: function() {

    // },
    // onPullDownRefresh: function() {

    // },
    // onReachBottom: function() {

    // },
    // onShareAppMessage: function() {

    // },
    // onPageScroll: function() {

    // },
    // //item(index,pagePath,text)
    // onTabItemTap: function(item) {

    // }
});