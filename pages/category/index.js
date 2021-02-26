// 引入网络请求函数，路径需要补全
import { request } from '../../request/index.js'

// pages/category/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categroyData: [],
        menuList: [], // 菜单
        goodsInfo: [], // 商品信息
        currentIndex: 0, // 当前选中的菜单索引
        // 商品列表的滚动条距离顶部的位置
        scrollTop: 0
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 数据缓存（10s）
        const data = wx.getStorageSync('category');
        if (!data) {
            this.getCategroyData();
        } else {
            if (Date.now() - data.time > 10000) {
                this.getCategroyData();
            } else {
                this.setPageData(data.data);
            }
        }


    },
    getCategroyData() {
        request({
            url: '/categories'
        }).then(res => {
            const categroyData = [...res.data.message];
            wx.setStorageSync("category", { time: Date.now(), data: categroyData });
            this.setPageData(categroyData);
        }).catch(err => {
            console.log(err);
        })
    },
    setPageData(categroyData) {
        const menuList = categroyData.map(e => e.cat_name);
        const goodsInfo = categroyData[0].children;
        this.setData({
            menuList,
            goodsInfo,
            categroyData
        });
    },
    hanleMenuItemTap(e) {
        const { currentIndex } = e.currentTarget.dataset;
        const goodsInfo = this.data.categroyData[currentIndex].children;
        this.setData({
            currentIndex,
            goodsInfo,
            scrollTop: 0 // 重置商品列表的滚动条
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})