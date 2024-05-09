import {
  request
} from '../../../../utils/request.js';

Page({
  data: {
    islogin: 1,
    account: "",
    password: "",
    userType: "",
    username: "",
    avatar: "",
    email: "",
    phone: "",
    loginbtnstate2: '',
    loginbtnstate1: '',
    switchChecked: '', // 选中按钮
  },

  // 将方法挂载到 this 对象上
  toSetcurrAuthStep() {
    this.setData({
      currAuthStep: 2
    });
  },

  onLoad() {
    var _this = this;
    this.currentPage = this;
    var userData = wx.getStorageSync('userData');
    if (wx.getStorageSync("checkedValue") == false) {
      _this.setData({
        account: '',
        password: '',
        switchChecked: wx.getStorageSync('checkedValue'),
        loginbtnstate: true,
      })
      console.log('无记住密码');
    } else {
      _this.setData({
        username: userData.username,
        avatar: userData.avatar,
        email: userData.email,
        phone: userData.phone
      })
      console.log('记住密码' + _this.data.account + _this.data.password + _this.data.switchChecked)
    }
  },

  // 判断是否要记住密码
  bindswitchchange: function (event) {
    // 得到值
    var checkedValue = event.detail.value;
    var _this = this;
    if (checkedValue == true) {
      _this.setData({
        switchChecked: true,
      })
      wx.setStorageSync("checkedValue", _this.data.switchChecked);
    } else if (checkedValue == false) {
      _this.setData({
        switchChecked: false
      })
      wx.setStorageSync("checkedValue", _this.data.switchChecked);
    }
    console.log("开关状态" + checkedValue);
  },

  // 输入密码（登录界面判断有无）
  password1: function (event) {
    var m = event.detail.value
    // console.log(event.detail.value)
    if (m != '') {
      this.setData({
        password: m
      })
      if (this.data.account != '' && (this.data.account.length != '')) {
        this.setData({
          loginbtnstate: false
        })
      } else {
        this.setData({
          loginbtnstate: true,
        })
      }
    } else {
      this.setData({
        loginbtnstate: true,
        password: ''
      })
    }
  },

  // 输入账户（登录界面判断有无）
  inputAccount1: function (event) {
    // console.log(event.detail.value)
    var input = event.detail.value
    if (input != '') {
      this.setData({
        account: input
      })
      if (this.data.password != '') {
        this.setData({
          loginbtnstate: false
        })
      } else {
        this.setData({
          loginbtnstate: true,
        })
      }
    } else {
      this.setData({
        loginbtnstate: true,
      })
    }
  },

  // 登录
  // 登录成功后返回到上一个页面
  onlogin: function (e) {
    var that = this;
    // 假设用户输入的账号和密码分别存储在变量 account 和 password 中

    // 对账号和密码进行编码
    const encodedAccount = encodeURIComponent(that.data.account);
    const encodedPassword = encodeURIComponent(that.data.password);

    // 构建 URL，将编码后的账号和密码放入 URL 中
    const url = `https://1.95.59.208:8011/common/login?account=${encodedAccount}&password=${encodedPassword}`;

    // 发送请求
    wx.request({
      url: url, // 请求的地址
      method: 'POST', // 请求方法
      success: function (res) { // 请求成功的回调函数
        console.log('网路连接成功', res.data);
        if (res.data.code === 1) {
          wx.setStorageSync('token', res.data.data);
          // 发送登录请求示例
          request('/common/queryInfo', 'GET', {}).then(res => {
            console.log('请求用户数据成功', res);
            that.data = res.data
            console.log("that.data:", that.data);
            wx.setStorageSync('userData', res.data);
            if (res.data.userType === 6) {
              request('/client/queryInfo', 'GET', {}).then(res => {
                wx.setStorageSync('clientData', res.data);
                console.log("clientData:",  wx.getStorageSync('clientData'));
              }).catch(err => {
                console.error('请求客户数据失败', err);
                // 在这里可以处理登录失败后的逻辑
              });
            } else {
              request('/emp/queryMyInfo', 'GET', {}).then(res => {
                wx.setStorageSync('empData', res.data);
                console.log("clientData:",  wx.getStorageSync('empData'));
              }).catch(err => {
                console.error('请求员工数据失败', err);
                // 在这里可以处理登录失败后的逻辑
              });
            }
            wx.setStorageSync('CurrAuthStep', 2);
            // 提示登录成功
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            });
            // 登录成功后返回到上一个页面并设置 currAuthStep 为 2
            wx.navigateBack({
              delta: 1, // 返回上一个页面
            });
            // 在这里可以处理登录成功后的逻辑
          }).catch(err => {
            console.error('请求用户数据失败', err);
            // 在这里可以处理登录失败后的逻辑
          });
        } else {
          // 用户名或密码不匹配，提示登录失败
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'error',
            duration: 2000
          });
        }
      },
      fail: function (err) { // 请求失败的回调函数
        console.error('网络连接失败', err);
        wx.showToast({
          title: '登录失败，请稍后重试',
          icon: 'error',
          duration: 2000
        });
        // 在这里可以处理登录失败后的逻辑
      }
    });
  },


  // 注册
  formsubmit: function (e) {
    // 你的注册逻辑
  },

  // 找回密码
  comebackpassword: function (e) {
    // 你的找回密码逻辑
  },

  // 转到注册
  register: function (event) {
    var that = this
    that.setData({
      islogin: 3
    })
  },

  // 转到登录
  denglu: function (event) {
    var that = this
    that.setData({
      islogin: 1
    })
  },

  // 转到忘记密码
  forget: function (event) {
    this.setData({
      islogin: 2
    })
  }
});