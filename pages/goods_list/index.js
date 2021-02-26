// 引入网络请求函数，路径需要补全
import { request } from '../../request/index.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                value: '综合',
                isActive: true
            },
            {
                id: 1,
                value: '销量',
                isActive: false
            },
            {
                id: 2,
                value: '价格',
                isActive: false
            }
        ],
        goodList: {}, // 商品数据
        isNoData: false
    },

    QuerryData: {
        query: '',
        cid: '',
        pagenum: 1,
        pagesize: 10
    },

    totalPage: 1,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log('options: ', options);
        this.QuerryData.cid = options.cat_id;
        this.getGoodsList();
    },

    handleChangeTabsItem(e) {
        const { index } = e.detail;
        const tabs = [...this.data.tabs];
        // map():当数组中元素是值类型，map不会改变原数组；当是引用类型，则可以改变原数组。
        tabs.map(e => { e.isActive = e.id === index; });
        // TODO 设置tabs内容

        this.setData({ tabs });
    },
    getGoodsList() {
        request({ url: '/goods/search', data: this.QuerryData }).then(res => {
            const { total } = res.data.message;
            this.totalPage = Math.ceil(total / this.QuerryData.pagesize);
            this.setData({
                goodList: res.data.message.goods,
                isNoData: false
            })
        })
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        this.QuerryData.pagenum = 1;
        this.setData({
            goodList: []
        })
        setTimeout(() => {
            this.getGoodsList();
        }, 3000)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        if (this.QuerryData.pagenum >= this.totalPage) {
            this.setData({
                isNoData: true
            })
        } else {
            this.QuerryData.pagenum++;
            request({ url: '/goods/search', data: this.QuerryData }).then(res => {
                const goodList = [...this.data.goodList, ...res.data.message.goods];
                this.setData({
                    goodList
                })
            })
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})