import {
  fetchUserCenter
} from '../../../../services/usercenter/fetchUsercenter';
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
    avatar: '',
    username: '正在登录...',
    phone: '',
    islogin: 0,
  },
  menuData,
  orderTagInfos,
  customerServiceInfo: {},
  currAuthStep: 1,
  showKefu: true,
  versionNo: '',
});

Page({
  data: getDefaultData(),

  onLoad() {
    this.getVersionInfo();
  },

  onShow() {
    this.getTabBar().init();
    this.init();
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.fetUseriInfoHandle();
  },

  fetUseriInfoHandle() {
    // 从本地缓存中获取用户数据
    const userData = wx.getStorageSync('userData');
    console.log('already-login userData', userData);
    if (userData) {
      const {
        userInfo,
        menuData,
        countsData,
        orderTagInfos: orderInfo,
        customerServiceInfo,
      } = userData;

      // 处理用户数据并更新页面
      menuData?.[0].forEach((v) => {
        countsData.forEach((counts) => {
          if (counts.type === v.type) {
            v.tit = counts.num;
          }
        });
      });
      const info = orderTagInfos.map((v, index) => ({
        ...v,
        ...orderInfo[index],
      }));
      this.setData({
        userInfo,
        menuData,
        orderTagInfos: info,
        customerServiceInfo,
        currAuthStep: 2,
      });
      wx.stopPullDownRefresh();
    } else {
      // 如果本地缓存中没有用户数据，则可能用户尚未登录，可以执行相应的逻辑，比如跳转到登录页面
      wx.navigateTo({
        url: '/pages/home/home',
      });
    }
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
    if (currAuthStep === 2) {
      wx.navigateTo({
        url: '/pages/usercenter/person-info/index'
      });
    } else {
      this.fetUseriInfoHandle();
    }
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