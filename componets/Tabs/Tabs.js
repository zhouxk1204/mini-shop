// componets/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabs: {
            type: Array,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleTabsTitleItemTap(e) {
            console.log('e: ', e);
            const { index } = e.currentTarget.dataset;
            // 子组件向父组件传递数据，触发父组件的自定义事件
            this.triggerEvent("changeTabsItem", { index })
        }
    }
})