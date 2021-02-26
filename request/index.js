let requestTimes = 0;
export const request = (config) => {
    requestTimes++;
    wx.showLoading({
        title: '正在加载',
        mask: true,
    });

    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
    return new Promise((reslove, reject) => {
        wx.request({
            ...config,
            url: baseUrl + config.url,
            success: (result) => {
                reslove(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {
                requestTimes--;
                if (requestTimes === 0) {
                    wx.hideLoading();
                }
            }
        });
    })
}