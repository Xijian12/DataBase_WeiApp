Component({
  externalClasses: ['title-class', 'icon-class', 'number-class'],
  options: {
    multipleSlots: true,
  },
  properties: {
    orderTagInfos: {
      type: Array,
      value: [],
    },
    title: {
      type: String,
      value: '我的维修记录',
    },
    emptitle: {
      type: String,
      value: '我的接单记录',
    },
    desc: {
      type: String,
      value: '全部记录',
    },
    isTop: {
      type: Boolean,
      value: true,
    },
    classPrefix: {
      type: String,
      value: 'wr',
    },
    userData: {
      type: Object,
      value: {
        userType: 6
      }
    },
  },
  lifetimes: {
    attached() {
      const userData = wx.getStorageSync('userData');
      if (userData) {
        this.setData({
          userData
        });
        console.log('order-group - userType:', userData.userType);
      }
    }
  },
  methods: {
    onClickItem(e) {
      this.triggerEvent('onClickItem', e.currentTarget.dataset.item);
    },
    onClickTop() {
      this.triggerEvent('onClickTop', {});
    },
  },
});