import {
  OrderStatus
} from '../config';
import {
  fetchOrders,
  fetchOrdersCount,
} from '../../../../services/order/empOrderList';
import {
  request
} from '../../../../utils/request.js';

Page({
  page: {
    //size: 5,
    size: 10000,
    num: 1,
  },

  data: {
    // 订单页面的导航
    noRecordHeight: "300rpx",
    tabs: [{
        key: -1,
        text: '全部'
      }, {
        key: 1,
        text: '已分配',
        info: ''
      },
      {
        key: 0,
        text: '待分配',
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
    return
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
    return request('/emp/queryDispatchOrder', 'GET', statusCode === -1 ? {pageSize: 10000} : {
      pageSize: 10000,
      isAssigned: statusCode,
    }).then((res) => {
        console.log('请求接单数据成功', res);
        for (let order of res.data.rows) {
          console.log(order)
          order.isAssigned = (order.empId && order.empType) ? 1 : 0
          console.log("isAssigned=", order.isAssigned)
        }
        let orders = res.data.rows.filter(order => {
          return true
        })
        this.page.num++;
        let orderList = [];
        if (res && res.data) {
          orderList = (res.data.rows || []).map((order) => {
            return {
              riid: order.riid,
              repairItem: order.repairItem,
              needComponent: order.needComponent,
              pricePerComponent: order.pricePerComponent,
              totalComponentPrice: order.totalComponentPrice,
              rai: order.rai,
              mdoid: order.mdoid,
              workLength: order.workLength,
              pricePerhour: order.pricePerhour,
              empId: order.empId,
              empType: order.empType,
              isComplete: order.isComplete,
              createTime: order.createTime,
              updateTime: order.updateTime,
              vfi: order.vfi,
              isAssigned: order.isAssigned,
              goodsList: [{
                title: "开始时间：" + order.createTime +
                  "\n维修单编号：" + order.riid +
                  "\n维修项目：" + order.repairItem +
                  "\n所需材料：" + order.needComponent +
                  "\n材料费用：" + order.pricePerComponent +
                  "\n总费用：" + order.totalComponentPrice +
                  "\n工时：" + order.workLength + "h" +
                  "\n工时单价：" + order.pricePerhour +
                  "\n是否分配：" + (order.isAssigned == 1 ? "已分配" : "未分配")
                  //"\n是否分配：" + (order.isComplete === 1 ? "已分配" : "未分配")
              }, ]
            }
          });
          console.log('接单列表数据orderList：', orderList);
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
  
  onOrderCardTap__(e) {
    console.log("onOrderCardTap(e)...")
    console.log(e)
    const {
      order
    } = e.currentTarget.dataset;

    /*const order_ = this.data.orderList.filter((orderData) => {
      return orderData.orderNo == order.orderNo
    })*/
    wx.navigateTo({
      url: `/pages/order/emp/order-detail/index?orderNo=${order.orderNo}`,
    });
  },

  isApplyOrder: false,
  onOrderCardTap(e) {
    const {
      order
    } = e.currentTarget.dataset;
    console.log('tap order ')
    console.log(order)
    const empData = wx.getStorageSync('empData')
    console.log('empData', empData)
    request("/emp/applyDispatchOrder", "PUT", JSON.stringify({
      mdoid: order.mdoid,
      workLength: order.workLength,
      pricePerhour: order.pricePerhour,
      riid: order.riid,
      empId: empData.empId,
      empType: empData.empType,
      createTime: order.createTime,
      updateTime: order.updateTime,
    })).then(res => {
      wx.showToast({
        title: '接单成功',
      })
      this.refreshList(this.data.curTab)
    })
    .catch(res => {
      wx.showToast({
        title: '接单失败',
        icon: 'error',
      })
      //this.refreshList(this.data.curTab)
    })

    this.isApplyOrder = false
  },

  onApplyOrder(e) {
    this.isApplyOrder = true
    //console.log('onApplyOrder(e)...')
    //console.log(e.currentTarget.dataset)
  }
});