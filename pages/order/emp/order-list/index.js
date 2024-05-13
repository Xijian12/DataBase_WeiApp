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

const repairStatus = ['未受理', '已受理', '已拒绝', '已完成', '中断受理']

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
        key: repairStatus.indexOf('已完成'),
        text: '已完成',
        info: ''
      },
      {
        key: repairStatus.indexOf('未受理'),
        text: '未受理',
        info: ''
      },
      {
        key: repairStatus.indexOf('已受理'),
        text: '已受理',
        info: ''
      },
    ],
    curTab: -1,
    orderList: [],
    repairMission: [],
    repairStatus: ['未受理', '已受理', '已拒绝', '已完成', '中断受理'],
    listLoading: 0,
    pullDownRefreshing: false,
    emptyImg: 'https://cdn-we-retail.ym.tencent.com/miniapp/order/empty-order-list.png',
    backRefresh: false,
    status: -1,
  },

  onLoad(query) {
    let status = parseInt(query.status);
    status = status - 110
    console.log("onLoad() status=" + status)
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
    return fetchOrders(params).then(res => {
      //res.data.orders
      console.log('fetchOrders() finished')
      console.log(res)
      this.page.num++;
      let orderList = [];
      if (res && res.data && res.data.orders) {
        orderList = (res.data.orders || []).map((order) => {
          return {
            rawData: order,
            assignId: order.assignId,
            createTime: order.createTime,
            endTime: order.endTime,
            mdoid: order.mdoid,
            ogid: order.ogid,
            receivedId: order.receivedId,
            status: order.status,
            goodsList: [{
              title: "开始时间：" + order.createTime +
                "\n任务进行ID：" + order.ogid +
                "\n维修派工单ID：" + order.mdoid +
                "\n任务分配者ID：" + order.assignId +
                "\n任务目标者ID：" + order.receivedId +
                "\n任务进行状态：" + this.data.repairStatus[order.status] +
                "\n结束时间：" + order.endTime,
            }, ],
          }
        })
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

    return request('/emp/empQueryOnGoingTable', 'GET', {}).then((res) => {
        console.log('请求员工数据成功', res);
        this.page.num++;
        let orderList = [];
        let unprocessedOrders = [];
        let acceptedOrders = [];
        let rejectedOrders = [];
        let completedOrders = [];
        let interruptedOrders = [];
        if (res && res.data) {
          res.data.rows.forEach((order) => {
            const orderItem = {
              assignId: order.assignId,
              createTime: order.createTime,
              endTime: order.endTime,
              mdoid: order.mdoid,
              ogid: order.ogid,
              receivedId: order.receivedId,
              status: order.status,
              goodsList: [{
                title: "开始时间：" + order.createTime +
                  "\n任务进行ID：" + order.ogid +
                  "\n维修派工单ID：" + order.mdoid +
                  "\n任务分配者ID：" + order.assignId +
                  "\n任务目标者ID：" + order.receivedId +
                  "\n任务进行状态：" + this.data.repairStatus[order.status] +
                  "\n结束时间：" + order.endTime,
              }, ]
            };
            switch (order.status) {
              case 0:
                unprocessedOrders.push(orderItem);
                break;
              case 1:
                acceptedOrders.push(orderItem);
                break;
              case 2:
                rejectedOrders.push(orderItem);
                break;
              case 3:
                completedOrders.push(orderItem);
                break;
              case 4:
                interruptedOrders.push(orderItem);
                break;
              default:
                break;
            }
          });
          console.log('Unprocessed Orders:', unprocessedOrders);
          console.log('Accepted Orders:', acceptedOrders);
          console.log('Rejected Orders:', rejectedOrders);
          console.log('Completed Orders:', completedOrders);
          console.log('Interrupted Orders:', interruptedOrders);
          orderList = unprocessedOrders.concat(acceptedOrders, rejectedOrders, completedOrders, interruptedOrders);
          console.log('Combined Order List:', orderList);
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
      url: `/pages/order/emp/order-detail/index?orderNo=${order.orderNo}`,
    });
  },
});