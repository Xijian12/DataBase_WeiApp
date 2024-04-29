import {
  fetchUserCenter
} from '../../services/usercenter/fetchUsercenter';
import Toast from 'tdesign-miniprogram/toast/index';

const menuData = [
  [{
    title: '积分',
    tit: '',
    url: '',
    type: 'point',
  }, ],
  [{
      title: '帮助中心',
      tit: '',
      url: '',
      type: 'help-center',
    },
    {
      title: '客服热线',
      tit: '',
      url: '',
      type: 'service',
      icon: 'service',
    },
  ],
];

const orderTagInfos = [{
    title: '全部',
    iconName: 'wallet',
    orderNum: 0,
    tabType: 5,
    status: 1,
  },
  {
    title: '待评价',
    iconName: 'comment',
    orderNum: 0,
    tabType: 60,
    status: 1,
  },
  {
    title: '维修中',
    iconName: 'package',
    orderNum: 0,
    tabType: 40,
    status: 1,
  },
];

const getDefaultData = () => ({
  showMakePhone: false,
  userInfo: {
    account: '',
    password: '',
    userType: '',
    username: '请登录',
    avatar: '',
    email: '',
    phone: '',
  },
  menuData,
  orderTagInfos,
  customerServiceInfo: {},
  //当前登录状态
  currAuthStep: 1,
  showKefu: true,
  versionNo: '',
});

Page({
  data: getDefaultData(),

  onLoad() {
    this.getVersionInfo();
    this.setData({
      currAuthStep: 1 // 在页面加载时将 currAuthStep 设置为 1
    });
  },
  onShow() {

    //使用全局数据管理
    // const app = getApp();
    console.log("getStorage CurrAuthStep:", wx.getStorageSync('CurrAuthStep'));
    console.log("getStorage userData:", wx.getStorageSync('userData'));
    if (wx.getStorageSync('CurrAuthStep') == 2) {
      this.setData({
        currAuthStep: 2 // 在页面加载时将 currAuthStep 设置为 2
      });
    }
    this.getTabBar().init();
    this.init();
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.fetUseriInfoHandle();
  },

  // fetUseriInfoHandle() {
  //   fetchUserCenter().then(
  //     ({
  //       userInfo,
  //       countsData,
  //       orderTagInfos: orderInfo,
  //       customerServiceInfo,
  //     }) => {
  //       // eslint-disable-next-line no-unused-expressions
  //       menuData?.[0].forEach((v) => {
  //         countsData.forEach((counts) => {
  //           if (counts.type === v.type) {
  //             // eslint-disable-next-line no-param-reassign
  //             v.tit = counts.num;
  //           }
  //         });
  //       });
  //       const info = orderTagInfos.map((v, index) => ({
  //         ...v,
  //         ...orderInfo[index],
  //       }));
  //       this.setData({
  //         userInfo,
  //         menuData,
  //         orderTagInfos: info,
  //         customerServiceInfo,
  //       });
  //       wx.stopPullDownRefresh();
  //     },
  //   );
  // },
  fetUseriInfoHandle() {
    const userData = wx.getStorageSync('userData');
    if (userData) {
      this.setData({
        userInfo: userData,
      });
      console.log("usercenter userInfo:", this.userInfo);
    } else {
      console.error('userData is undefined or null');
    }
    wx.stopPullDownRefresh(); // 放在数据更新完成后
  },
  onClickCell({
    currentTarget
  }) {
    const {
      type
    } = currentTarget.dataset;

    switch (type) {
      case 'service': {
        this.openMakePhone();
        break;
      }
      case 'help-center': {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '你点击了帮助中心',
          icon: '',
          duration: 1000,
        });
        break;
      }
      case 'point': {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '你点击了积分菜单',
          icon: '',
          duration: 1000,
        });
        break;
      }
      case 'coupon': {
        wx.navigateTo({
          url: '/pages/coupon/coupon-list/index'
        });
        break;
      }
      default: {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '未知跳转',
          icon: '',
          duration: 1000,
        });
        break;
      }
    }
  },

  jumpNav(e) {
    const status = e.detail.tabType;

    if (status === 0) {
      wx.navigateTo({
        url: '/pages/order/after-service-list/index'
      });
    } else {
      wx.navigateTo({
        url: `/pages/order/order-list/index?status=${status}`
      });
    }
  },

  jumpAllOrder() {
    wx.navigateTo({
      url: '/pages/order/order-list/index'
    });
  },

  openMakePhone() {
    this.setData({
      showMakePhone: true
    });
  },

  closeMakePhone() {
    this.setData({
      showMakePhone: false
    });
  },

  call() {
    wx.makePhoneCall({
      phone: this.data.customerServiceInfo.servicePhone,
    });
  },

  gotoUserEditPage() {
    const {
      currAuthStep
    } = this.data;
    //console.log('currAuthStep:', currAuthStep);
    if (currAuthStep === 2) {
      wx.navigateTo({
        url: '/pages/usercenter/person-info/index'
      });
    } else {
      this.fetUseriInfoHandle();
    }
  },
  gotoLogin() {
    console.log('子组件传递到父组件');
    const {
      currAuthStep
    } = this.data;
    console.log('currAuthStep:', currAuthStep);
    if (currAuthStep === 1) {
      wx.navigateTo({
        url: '/pages/usercenter/components/login/index'
      });
    } else {
      this.fetUseriInfoHandle();
    }
  },
  toSetcurrAuthStep() {
    this.setData({
      currAuthStep: 2
    })
    console.log("toSetcurrAuthStep:", currAuthStep);
  },

  getVersionInfo() {
    const versionInfo = wx.getAccountInfoSync();
    const {
      version,
      envVersion = __wxConfig
    } = versionInfo.miniProgram;
    this.setData({
      versionNo: envVersion === 'release' ? version : envVersion,
    });
  },
});