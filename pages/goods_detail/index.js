import { request } from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsObj: {}
    },
    GoodsInfo:{},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const { goods_id } = options;
        console.log('goods_id: ', goods_id);
        this.getGoodsDetailData(Number(goods_id));
    },
    getGoodsDetailData(goods_id) {
        request({ url: '/goods/detail', data: { goods_id } })
            .then(res => {
                const goodsObj = res.data.message;
                this.GoodsInfo = goodsObj;
                console.log('goodsObj: ', goodsObj);
                this.setData({
                    // 将没有用到的数据剔除
                    goodsObj: {
                        goods_price:goodsObj.goods_price,
                        goods_name:goodsObj.goods_name,
                        // iPhone不支持.webp格式的图片。// 需要和后端协调
                        goods_introduce:goodsObj.goods_introduce,
                        pics:goodsObj.pics
                    }
                })
            })
            .catch(err => {
                
            });
    },
    // 轮播图 图片预览
    handlePicPreviewTap(e){
        const current = e.currentTarget.dataset.url;
        const urls = this.GoodsInfo.pics.map(e=>e.pics_mid);
        wx.previewImage({
            current, // 当前显示图片的http链接
            urls // 需要预览的图片http链接列表
          })
    },
    // 添加购物车
    handleCartAdd(){
        console.log("add");
        // 获取本地缓存的购物车数据
        const cart = wx.getStorageSync("cart") || [];
        const index = cart.findIndex(e=>e.goods_id === this.GoodsInfo.goods_id);
        if(index === -1){
            this.GoodsInfo.num = 1;
            cart.push(this.GoodsInfo);
        }else{
            cart[index].num++;
        }
        // 缓存新的购物车数据
        wx.setStorageSync("cart", cart);

        // 添加成功提示
        wx.showToast({
            title: '添加成功',
            icon: 'success',
            // 防止短时间内重复点击
            mask: true
        });
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