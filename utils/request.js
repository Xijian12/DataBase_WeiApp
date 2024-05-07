// http.js

const baseURL = 'https://1.95.59.208:8011';

function request(url, method, data) {
  // 获取 Token
  const token = wx.getStorageSync('token');

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      method: method,
      data: data,
      header: {
        'Authorization': token,
        'Content-Type': 'application/json' // 根据接口要求设置 Content-Type
      },
      success: function (res) {
        if (res.data.code === 1) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
}

module.exports = {
  request
};