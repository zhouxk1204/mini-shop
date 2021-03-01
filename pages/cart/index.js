// pages/cart/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    handleGetAddress() {
        // wx.getSetting({
        //     success: function(res) {
        //         let scope = res.authSetting["scope.address"];
        //         console.log('scope: ', scope);
        //         if (scope === false || scope === undefined) {
        //             //  打开设置页面
        //             wx.openSetting({
        //                 //如果点击了开启按钮，那么会调用成功回调。
        //                 success: function(res) {
        //                     //  打开之后再次获取
        //                     wx.chooseAddress({
        //                         success: function(res) {
        //                             console.log(res)
        //                         }
        //                     })
        //                 }
        //             })
        //         } else {
        //             //  直接获取地址
        //             wx.chooseAddress({
        //                 success: function(res) {
        //                     console.log(res)
        //                 }
        //             })
        //         }
        //     }
        // })

        // 无需授权，可直接获取地址
        // https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html  (boolean scope.address) 是否授权通讯地址，已取消此项授权，会默认返回true
        wx.chooseAddress({
            success: function(res) {
                // 将地址存入本地存储
                wx.setStorageSync("address", res);
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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