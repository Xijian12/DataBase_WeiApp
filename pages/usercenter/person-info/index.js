import {
  fetchPerson
} from '../../../services/usercenter/fetchPerson';
import {
  phoneEncryption
} from '../../../utils/util';
import Toast from 'tdesign-miniprogram/toast/index';

Page({
  data: {
    userInfo: {
      gender: 0,
      account: '',
      password: '',
      userType: '',
      username: '',
      avatar: '',
      email: '',
      phone: '',
    },
    showUnbindConfirm: false,
    pickerOptions: [{
        name: '男',
        code: '1',
      },
      {
        name: '女',
        code: '2',
      },
    ],
    const: ['管理员', '机修', '焊工', '漆工', '前台', '业务员', '客户'],
    clientData: {},
    empData: {},
    typeVisible: false,
    genderMap: ['', '男', '女'],
  },
  onLoad() {
    this.init();
  },
  init() {
    this.fetchData();
  },
  fetchData() {
    // fetchPerson().then((userInfo) => {
    //   this.setData({
    //     userInfo,
    //     'userInfo.phone': phoneEncryption(userInfo.phone),
    //   });
    // });
    const userData = wx.getStorageSync('userData');
    const clientData = wx.getStorageSync('clientData');
    const empData = wx.getStorageSync('empData');
    if (userData) {
      this.setData({
        userInfo: userData,
        clientData: clientData,
        empData: empData
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
      dataset
    } = currentTarget;
    const {
      username
    } = this.data.userInfo;

    switch (dataset.type) {
      case 'gender':
        this.setData({
          typeVisible: true,
        });
        break;
      case 'name':
        wx.navigateTo({
          url: `/pages/usercenter/name-edit/index?name=${username}`,
        });
        break;
      case 'avatar':
        this.toModifyAvatar();
        break;
      default: {
        break;
      }
    }
  },
  onClose() {
    this.setData({
      typeVisible: false,
    });
  },
  onConfirm(e) {
    const {
      value
    } = e.detail;
    this.setData({
        typeVisible: false,
        'userInfo.gender': value,
      },
      () => {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '设置成功',
          theme: 'success',
        });
      },
    );
  },
  async toModifyAvatar() {
    try {
      const tempFilePath = await new Promise((resolve, reject) => {
        wx.chooseImage({
          count: 1,
          sizeType: ['compressed'],
          sourceType: ['album', 'camera'],
          success: (res) => {
            const {
              path,
              size
            } = res.tempFiles[0];
            if (size <= 10485760) {
              resolve(path);
            } else {
              reject({
                errMsg: '图片大小超出限制，请重新上传'
              });
            }
          },
          fail: (err) => reject(err),
        });
      });
      const tempUrlArr = tempFilePath.split('/');
      const tempFileName = tempUrlArr[tempUrlArr.length - 1];
      Toast({
        context: this,
        selector: '#t-toast',
        message: `已选择图片-${tempFileName}`,
        theme: 'success',
      });
    } catch (error) {
      if (error.errMsg === 'chooseImage:fail cancel') return;
      Toast({
        context: this,
        selector: '#t-toast',
        message: error.errMsg || error.msg || '修改头像出错了',
        theme: 'error',
      });
    }
  },
});