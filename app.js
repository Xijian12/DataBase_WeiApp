import updateManager from './common/updateManager';

App({
  onLaunch: function () {},
  onShow: function () {
    updateManager();
  },
  globalData: {
    userInfo: {
      gender: 1,
      account: '',
      password: '',
      userType: '',
      username: '',
      avatar: '',
      email: '',
      phone: '',
    },
    setCurrAuthStep: 1, // 初始值为1
  }
});