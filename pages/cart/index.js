// pages/cart/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: {}, // 收货地址
        cart: [] // 购物车数据
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
                const addressDetail = `${res.provinceName}${res.cityName}${res.countyName}${res.detailInfo}`
                res.all = addressDetail;
                const address = Object.assign({}, res, { all: addressDetail });
                console.log('address: ', address);
                // 将地址存入本地存储
                wx.setStorageSync("address", address);
            }
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        // 从本地存储中取出收货地址
        console.log(111);
        const address = wx.getStorageSync("address");
        console.log('address: ', address);
        // 获取本地存储中的购物车商品信息
        const cart = wx.getStorageSync("cart");

        this.setData({ address, cart });
    },
})