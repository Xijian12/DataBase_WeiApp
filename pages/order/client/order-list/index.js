import {
  OrderStatus
} from '../config';
import {
  fetchOrders,
  fetchOrdersCount,
} from '../../../../services/order/clientOrderList';
import {
  cosThumb
} from '../../../../utils/util';

Page({
  page: {
    size: 5,
    num: 1,
  },

  data: {
    // 订单页面的导航
    noRecordHeight: "300rpx",
    tabs: [{
        key: -1,
        text: '全部'
      },
      {
        key: OrderStatus.COMPLETE,
        text: '已完成',
        info: ''
      },
      {
        key: OrderStatus.PENDING_PAYMENT,
        text: '待支付',
        info: ''
      },
      {
        key: OrderStatus.PENDING_RECEIPT,
        text: '维修中',
        info: ''
      },
    ],
    curTab: -1,
    orderList: [],
    listLoading: 0,
    pullDownRefreshing: false,
    emptyImg: 'https://cdn-we-retail.ym.tencent.com/miniapp/order/empty-order-list.png',
    backRefresh: false,
    status: -1,
  },

  onLoad(query) {
    let status = parseInt(query.status);
    status = this.data.tabs.map((t) => t.key).includes(status) ? status : -1;
    this.init(status);
    this.pullDownRefresh = this.selectComponent('#wr-pull-down-refresh');
    let height = 0;
    /*wx.createSelectorQuery().selectAll('.npl-intro').boundingClientRect(function (rect) {
      console.log(rect[0].height)
      console.log(rect[0].width)
      height = rect[0].height
    }).exec()*/
    // 获取系统信息
    //const ratio = wx.getSystemInfoSync().screenHeight 
    const systemInfo = wx.getSystemInfoSync();
    // 获取屏幕高度
    const screenHeight = systemInfo.windowHeight;
    //height = screenHeight - wx.getMenuButtonBoundingClientRect().height - 
    this.setData({
      noRecordHeight: Math.round(screenHeight / 1.5).toString() + "px",
      //noRecordHeight: height.toString() + "px",
    })
  },

  onShow() {
    if (!this.data.backRefresh) return;
    this.onRefresh();
    this.setData({
      backRefresh: false
    });
  },

  onReachBottom() {
    if (this.data.listLoading === 0) {
      this.getOrderList(this.data.curTab);
    }
  },

  onPageScroll(e) {
    this.pullDownRefresh && this.pullDownRefresh.onPageScroll(e);
  },

  onPullDownRefresh_(e) {
    const {
      callback
    } = e.detail;
    this.setData({
      pullDownRefreshing: true
    });
    this.refreshList(this.data.curTab)
      .then(() => {
        this.setData({
          pullDownRefreshing: false
        });
        callback && callback();
      })
      .catch((err) => {
        this.setData({
          pullDownRefreshing: false
        });
        Promise.reject(err);
      });
  },

  init(status) {
    status = status !== undefined ? status : this.data.curTab;
    this.setData({
      status,
    });
    this.refreshList(status);
  },

  genListItem() {
    return
  },

  getOrderList(statusCode = -1, reset = false) {
    const params = {
      parameter: {
        pageSize: this.page.size,
        pageNum: this.page.num,
      },
    };
    if (statusCode !== -1) params.parameter.orderStatus = statusCode;
    this.setData({
      listLoading: 1
    });
    return fetchOrders(params)
      .then((res) => {
        this.page.num++;
        let orderList = [];
        if (res && res.data && res.data.orders) {
          orderList = (res.data.orders || []).map((order) => {
            return {
              rawData: order,
              id: order.vfi,
              orderNo: order.vfi,
              //parentOrderNo: 0,
              //storeId: 0,
              //storeName: order.createTime,
              /*
              parentOrderNo: order.parentOrderNo,
              storeId: order.storeId,
              storeName: order.storeName,
              */
              status: order.orderStatus,
              statusDesc: order.orderStatusName,
              //amount: order.paymentAmount,
              //totalAmount: order.totalAmount,
              //logisticsNo: order.logisticsVO.logisticsNo,
              //createTime: order.createTime,
              goodsList: [{
                  title: "开始时间：" + order.createTime +
                    "\n车架号：" + order.vin +
                    "\n维修类型：" + (order.maintenanceType === 1 ? "加急" : "普通") +
                    "\n作业分类：" + (order.taskClassification === 0 ? "大型" : (order.taskClassification === 1 ? "中型" : "小型")) +
                    "\n支付方式：" + (order.paymentMethod === 0 ? "自付" : (order.taskClassification === 1 ? "三方" : "索赔")),
                },
                /*
                {
                  title: "维修类型：" + (order.maintenanceType === 1 ? "加急" : "普通"),
                  specs: [],
                },
                {
                  title: "作业分类：" + (order.taskClassification === 0 ? "大型" : (order.taskClassification === 1 ? "中型" : "小型")),
                  specs: [],
                },
                {
                  title: "支付方式：" + (order.paymentMethod === 0 ? "自付" : (order.taskClassification === 1 ? "三方" : "索赔")),
                  specs: [],
                },*/
              ],

              /*
              goodsList: [{
                title: order.createTime,
                //lineClamp: 3,
                //title: "车架号：" + order.vin,
                //skuId: 100,
                //spuId: 200,
                specs: [
                  "车架号：" + order.vin,
                  "维修类型：" + (order.maintenanceType === 1 ? "加急" : "普通"),
                  "作业分类：" + (order.taskClassification === 0 ? "大型" : (order.taskClassification === 1 ? "中型" : "小型")),
                  "支付方式：" + (order.paymentMethod === 0 ? "自付" : (order.taskClassification === 1 ? "三方" : "索赔")),
                ],
              }]*/
              /*
              goodsList: (order.orderItemVOs || []).map((goods) => ({
                id: goods.id,
                thumb: cosThumb(goods.goodsPictureUrl, 70),
                title: goods.goodsName,
                skuId: goods.skuId,
                spuId: goods.spuId,
                specs: (goods.specifications || []).map(
                  (spec) => spec.specValue,
                ),
                price: goods.tagPrice ? goods.tagPrice : goods.actualPrice,
                num: goods.buyQuantity,
                titlePrefixTags: goods.tagText ? [{
                  text: goods.tagText
                }] : [],
              })),*/
              //buttons: order.buttonVOs || [],
              //groupInfoVo: order.groupInfoVo,
              //freightFee: order.freightFee,
            };
          });
        }
        return new Promise((resolve) => {
          if (reset) {
            this.setData({
              orderList: []
            }, () => resolve());
          } else resolve();
        }).then(() => {
          this.setData({
            orderList: this.data.orderList.concat(orderList),
            listLoading: orderList.length > 0 ? 0 : 2,
          });
        });
      })
      .catch((err) => {
        this.setData({
          listLoading: 3
        });
        return Promise.reject(err);
      });
  },

  onReTryLoad() {
    this.getOrderList(this.data.curTab);
  },

  onTabChange(e) {
    const {
      value
    } = e.detail;
    this.setData({
      status: value,
    });
    this.refreshList(value);
  },

  getOrdersCount() {
    return fetchOrdersCount().then((res) => {
      const tabsCount = res.data || [];
      const {
        tabs
      } = this.data;
      tabs.forEach((tab) => {
        const tabCount = tabsCount.find((c) => c.tabType === tab.key);
        if (tabCount) {
          tab.info = tabCount.orderNum;
        }
      });
      this.setData({
        tabs
      });
    });
  },

  refreshList(status = -1) {
    this.page = {
      size: this.page.size,
      num: 1,
    };
    this.setData({
      curTab: status,
      orderList: []
    });

    return Promise.all([
      this.getOrderList(status, true),
      this.getOrdersCount(),
    ]);
  },

  onRefresh() {
    this.refreshList(this.data.curTab);
  },

  onOrderCardTap(e) {
    console.log("onOrderCardTap(e)...")
    console.log(e)
    const {
      order
    } = e.currentTarget.dataset;

    /*const order_ = this.data.orderList.filter((orderData) => {
      return orderData.orderNo == order.orderNo
    })*/
    wx.navigateTo({
      url: `/pages/order/client/order-detail/index?orderNo=${order.orderNo}`,
    });
  },
});