import {
  fetchUserCenter
} from '../../services/usercenter/fetchUsercenter';
import {
  request
} from '../../utils/request'
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

const defaultOrderTagInfos = [{
    title: '已完成',
    iconName: 'wallet',
    orderNum: 0,
    tabType: 110,
    status: 1,
  },
  {
    title: '待评价/待接单',
    iconName: 'comment',
    orderNum: 0,
    tabType: 120,
    status: 1,
  },
  {
    title: '维修中/已接单',
    iconName: 'package',
    orderNum: 0,
    tabType: 130,
    status: 1,
  },
];

const orderTagInfos = [{
    title: '已完成',
    iconName: 'wallet',
    orderNum: 0,
    tabType: 50,
    status: 1,
  },
  {
    title: '待支付',
    iconName: 'comment',
    orderNum: 0,
    tabType: 5,
    status: 1,
  },
  /*{
    title: '待维修',
    iconName: 'comment',
    orderNum: 0,
    tabType: 10,
    status: 1,
  },*/
  {
    title: '维修中',
    iconName: 'package',
    orderNum: 0,
    tabType: 40,
    status: 1,
  },
];

const emporderTagInfos = [{
    title: '已完成',
    iconName: 'wallet',
    orderNum: 0,
    tabType: 110,
    status: 1,
  },
  {
    title: '未受理',
    iconName: 'comment',
    orderNum: 0,
    tabType: 120,
    status: 1,
  },
  {
    title: '已受理',
    iconName: 'package',
    orderNum: 0,
    tabType: 130,
    status: 1,
  },
];

const getDefaultData = () => ({
  /*
  pending
  0: 无待执行任务
  1: 待执行jumpAllOrder()
  2: 待执行jumpNav()
  */
  pending: {
    status: false,
    exec: (args) => {},
    //func: () => {},
    args: [],
  },
  //jumpNavData: undefined,
  showMakePhone: false,
  userInfo: {
    account: '',
    password: '',
    userType: 6,
    username: '请登录',
    avatar: '',
    email: '',
    phone: '',
  },
  menuData,
  defaultOrderTagInfos,
  emporderTagInfos,
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
    if (this.data.pending.status) {
      this.data.pending.exec(this.data.pending.args)
    }
    console.log("usercenter onShow()")
    //使用全局数据管理
    // const app = getApp();
    console.log("getStorage CurrAuthStep:", wx.getStorageSync('CurrAuthStep'));
    console.log("getStorage userData:", wx.getStorageSync('userData'));
    switch (wx.getStorageSync('CurrAuthStep')) {
      case 2:
        this.setData({
          currAuthStep: 2 // 在页面加载时将 currAuthStep 设置为 2
        });
        break;
      case 1:
        this.setData(getDefaultData());
        break;

      default:
        break;
    }
    /*if (wx.getStorageSync('CurrAuthStep') == 2) {
      this.setData({
        currAuthStep: 2 // 在页面加载时将 currAuthStep 设置为 2
      });
    } */
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
  clearPending() {
    this.setData({
      pending: {
        status: false,
        exec: (args) => {},
        //func: () => {},
        args: [],
      }
    })
  },
  setPending(exec, args) {
    this.setData({
      pending: {
        status: true,
        exec: exec,
        //func: () => {},
        args: args,
      }
    })
  },
  checkLogin() {
    if (wx.getStorageSync('CurrAuthStep') == 2) {
      return true
    } else {
      return false
    }
  },
  jumpNav(e) {
    if (!this.checkLogin()) {
      this.setPending((args) => {
        this.clearPending()
        if (wx.getStorageSync('CurrAuthStep') == 2) {
          let userData = wx.getStorageSync('userData')
          if (userData.userType == 6) {
            this.jumpNav(args[0])
          }

        }
      }, [e])
      this.gotoLogin()
    }
    const status = e.detail.tabType;
    let userData = wx.getStorageSync('userData')
    let baseUrl = (userData.userType == 6) ? '/pages/order/client/order-list/index' : '/pages/order/emp/order-list/index'
    if (status === 0) {
      wx.navigateTo({
        url: '/pages/order/after-service-list/index'
      });
    } else {
      wx.navigateTo({
        url: baseUrl + `?status=${status}`
      });
    }
  },

  jumpAllOrder() {
    if (!this.checkLogin()) {
      this.setPending((args) => {
        this.clearPending()
        if (wx.getStorageSync('CurrAuthStep') == 2) {
          this.jumpAllOrder()
        }
      }, [])
      this.gotoLogin()
    }
    /*if (!this.checkLogin()) {
      return
    }*/
    let userData = wx.getStorageSync('userData')
    let baseUrl = (userData.userType == 6) ? '/pages/order/client/order-list/index' : '/pages/order/emp/order-list/index'
    wx.navigateTo({
      url: baseUrl
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