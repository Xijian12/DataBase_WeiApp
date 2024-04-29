import {
  fetchUserAccount
} from '../../../../services/login/fetchLogin';

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

  onLoad() {
    var _this = this;
    console.log('开始检测。。。');
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
        account: wx.getStorageSync("Account"), // 应该是 Account 而不是 iphone
        password: wx.getStorageSync("password"),
        switchChecked: wx.getStorageSync('checkedValue'),
        loginbtnstate: wx.getStorageSync('wxlogin'),
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
    var that = this
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
  onlogin: function (e) {
    var that = this;

    // 调用 fetchUserAccount 函数获取模拟数据
    fetchUserAccount().then((userData) => {
      // 判断用户输入的账户和密码是否与模拟数据匹配
      console.log(userData);
      console.log('userData.data.account:', userData.data.account);
      console.log('that.data.account:', that.data.account);
      console.log('userData.data.password:', userData.data.password);
      console.log('that.data.password', that.data.password);
      if (userData.data.account === that.data.account && userData.data.password === that.data.password) {
        // 将用户数据写入本地存储
        wx.setStorageSync('userData', userData);
        // 提示登录成功
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        });
        // 跳转到首页或其他页面
        wx.redirectTo({
          url: '/pages/home/home',
        });
      } else {
        // 用户名或密码不匹配，提示登录失败
        wx.showToast({
          title: '用户名或密码错误',
          icon: 'error',
          duration: 2000
        });
      }
    }).catch((error) => {
      // 获取模拟数据失败，提示登录失败
      console.error('获取模拟数据失败:', error);
      wx.showToast({
        title: '登录失败，请稍后重试',
        icon: 'error',
        duration: 2000
      });
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