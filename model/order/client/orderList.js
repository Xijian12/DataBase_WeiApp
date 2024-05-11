import {
  OrderStatus
} from '../../../pages/order/client/config';
import {
  mockIp,
  mockReqId
} from '../../../utils/mock';

export let orderListFullData = {}

let data = {
  "rows": [{
      "createTime": "2024-04-18 23:57:31",
      "maintenanceType": 0,
      "paymentMethod": 0,
      "repairStatus": 1,
      "taskClassification": 2,
      "updateTime": "2024-04-18 23:57:33",
      "vfi": 1,
      "vin": "1GNSKJKCXFR158903",
      "whetherPay": 1
    },
    {
      "createTime": "2024-04-25 15:18:01",
      "maintenanceType": 1,
      "paymentMethod": 0,
      "repairStatus": 1,
      "taskClassification": 2,
      "updateTime": "2024-04-25 15:35:45",
      "vfi": 5,
      "vin": "1GNSKJKCXFR158904",
      "whetherPay": 1
    }
  ],
  "total": 2
}

export function realGenOrders(resData, params) {
  const resp = {
    data: {
      pageNum: 1,
      pageSize: 10,
      totalCount: resData.total,
      orders: resData.rows,
      code: 'Success',
      msg: null,
      requestId: mockReqId(),
      clientIp: mockIp(),
      rt: 113,
      success: true,
    }
  };
  for (let order of resp.data.orders) {
    console.log("repairStatus = " + order.repairStatus)
    console.log("whetherPay = " + order.whetherPay)
    if (order.repairStatus == 1 && order.whetherPay == 1) {
      order.orderStatus = OrderStatus.COMPLETE
      order.orderStatusName = "已完成"
    } else if (order.repairStatus == 1 && order.whetherPay == 0) {
      order.orderStatus = OrderStatus.PENDING_PAYMENT
      order.orderStatusName = "待支付"
    } else if (order.repairStatus == 0) {
      order.orderStatus = OrderStatus.PENDING_DELIVERY
      order.orderStatusName = "维修中"
    } else {
      order.orderStatus = OrderStatus.UNKNOWN
      order.orderStatusName = "未知"
    }

  }
  const {
    pageNum,
    pageSize,
    orderStatus
  } = params.parameter;
  // 实现筛选
  if (orderStatus > -1) {
    resp.data.orders = resp.data.orders.filter(
      (order) => {
        return order.orderStatus === orderStatus
      }
    );
  }
  // 实现分页
  resp.data.pageNum = pageNum;
  resp.data.pageSize = pageSize;
  resp.data.orders = resp.data.orders.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize,
  );
  return resp;
}

export function genOrders(params) {
  let resData = data
  const resp = {
    data: {
      pageNum: 1,
      pageSize: 10,
      totalCount: resData.total,
      orders: resData.rows,
      code: 'Success',
      msg: null,
      requestId: mockReqId(),
      clientIp: mockIp(),
      rt: 113,
      success: true,
    }
  };
  for (let order of resp.data.orders) {
    if (order.repairStatus == 1 && order.whetherPay == 1) {
      order.orderStatus = OrderStatus.COMPLETE
      order.orderStatusName = "已完成"
    } else if (order.repairStatus == 1 && order.whetherPay == 0) {
      order.orderStatus = OrderStatus.PENDING_PAYMENT
      order.orderStatusName = "待支付"
    } else if (order.repairStatus == 0) {
      order.orderStatus = OrderStatus.PENDING_DELIVERY
      order.orderStatusName = "维修中"
    } else {
      order.orderStatus = OrderStatus.UNKNOWN
      order.orderStatusName = "未知"
    }

  }
  const {
    pageNum,
    pageSize,
    orderStatus
  } = params.parameter;
  // 实现筛选
  if (orderStatus > -1) {
    resp.data.orders = resp.data.orders.filter(
      (order) => {
        /*
        let returnValue = false;
        switch (orderStatus) {
          case OrderStatus.COMPLETE:
            returnValue = (order.repairStatus == 1 && order.whetherPay == 1)
            if (returnValue) {
              order.orderStatus = OrderStatus.COMPLETE
              order.orderStatusName = "已完成"
            }
            return returnValue
            break;
          case OrderStatus.PENDING_PAYMENT:
            returnValue = (order.repairStatus == 1 && order.whetherPay == 0)
            if (returnValue) {
              order.orderStatus = OrderStatus.PENDING_PAYMENT
              order.orderStatusName = "待支付"
            }
            return returnValue
            break;
          case OrderStatus.PENDING_DELIVERY:
            returnValue = (order.repairStatus == 0)
            if (returnValue) {
              order.orderStatus = OrderStatus.PENDING_DELIVERY
              order.orderStatusName = "维修中"
            }
            return returnValue
          default:
            return false
            break;
        }*/
        return order.orderStatus === orderStatus
      }
    );
  }
  // 实现分页
  resp.data.pageNum = pageNum;
  resp.data.pageSize = pageSize;
  resp.data.orders = resp.data.orders.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize,
  );
  return resp;
}

export function genOrders____(params) {
  //console.log(orderListFullData)
  const resp = {
    data: {
      pageNum: 1,
      pageSize: 10,
      totalCount: 1,
      orders: [{
        saasId: '88888888',
        storeId: '1000',
        storeName: '云Mall深圳旗舰店',
        uid: '88888888205468',
        parentOrderNo: '354021731671873099',
        orderId: '354021735982432279',
        orderNo: '354021731671873099',
        orderType: 0,
        orderSubType: 0,
        orderStatus: 5,
        orderSubStatus: null,
        totalAmount: '10010',
        goodsAmount: '10000',
        goodsAmountApp: '10000',
        paymentAmount: '20',
        freightFee: '10',
        packageFee: '0',
        discountAmount: '9990',
        channelType: 0,
        channelSource: '',
        channelIdentity: '',
        remark: '',
        cancelType: null,
        cancelReasonType: null,
        cancelReason: null,
        rightsType: null,
        createTime: '1600350829291',
        orderItemVOs: [{
          id: '354021736133427225',
          orderNo: null,
          spuId: '3',
          skuId: '135696670',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '腾讯极光盒子4智能网络电视机顶盒6K千兆网络机顶盒4K高分辨率',
          specifications: [{
              specTitle: '颜色',
              specValue: '贵族青'
            },
            {
              specTitle: '类型',
              specValue: '尊享礼盒装'
            },
          ],
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3b.png',
          originPrice: '0',
          actualPrice: '9999',
          buyQuantity: 1,
          itemTotalAmount: '9999',
          itemDiscountAmount: '9990',
          itemPaymentAmount: '10',
          goodsPaymentPrice: '10',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        }, ],
        logisticsVO: {
          logisticsType: 1,
          logisticsNo: '',
          logisticsStatus: null,
          logisticsCompanyCode: '',
          logisticsCompanyName: '',
          receiverAddressId: '14',
          provinceCode: '440000',
          cityCode: '440300',
          countryCode: '440306',
          receiverProvince: '广东省',
          receiverCity: '深圳市',
          receiverCountry: '宝安区',
          receiverArea: '',
          receiverAddress: '沙井中心路28号丽沙花都xx栋xx号',
          receiverPostCode: '',
          receiverLongitude: '113.829127',
          receiverLatitude: '22.713649',
          receiverIdentity: '88888888205468',
          receiverPhone: '17612345678',
          receiverName: '测试用户',
          expectArrivalTime: null,
          senderName: '',
          senderPhone: '',
          senderAddress: '',
          sendTime: null,
          arrivalTime: null,
        },
        paymentVO: {
          payStatus: 1,
          amount: '20',
          currency: null,
          payType: null,
          payWay: null,
          payWayName: null,
          interactId: null,
          traceNo: null,
          channelTrxNo: null,
          period: null,
          payTime: null,
          paySuccessTime: null,
        },
        buttonVOs: [{
            primary: false,
            type: 2,
            name: '取消订单'
          },
          {
            primary: true,
            type: 1,
            name: '付款'
          },
        ],
        labelVOs: null,
        invoiceVO: null,
        couponAmount: null,
        autoCancelTime: '1600352629291',
        orderStatusName: '待维修',
        orderSatusRemark: '需支付￥0.20',
        logisticsLogVO: null,
        invoiceStatus: null,
        invoiceDesc: null,
        invoiceUrl: null,
      }, ],
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 113,
    success: true,
  };
  const {
    pageNum,
    pageSize,
    orderStatus
  } = params.parameter;
  // 实现筛选
  if (orderStatus > -1) {
    resp.data.orders = resp.data.orders.filter(
      (order) => order.orderStatus === orderStatus,
    );
  }
  // 实现分页
  resp.data.pageNum = pageNum;
  resp.data.pageSize = pageSize;
  resp.data.orders = resp.data.orders.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize,
  );
  return resp;
}

export function genOrders__(params) {
  const resp = {
    data: {
      pageNum: 1,
      pageSize: 10,
      totalCount: 1,
      orders: [{
        saasId: '88888888',
        storeId: '1000',
        storeName: '云Mall深圳旗舰店',
        uid: '88888888205468',
        parentOrderNo: '354021731671873099',
        orderId: '354021735982432279',
        orderNo: '354021731671873099',
        orderType: 0,
        orderSubType: 0,
        orderStatus: 5,
        orderSubStatus: null,
        totalAmount: '10010',
        goodsAmount: '10000',
        goodsAmountApp: '10000',
        paymentAmount: '20',
        freightFee: '10',
        packageFee: '0',
        discountAmount: '9990',
        channelType: 0,
        channelSource: '',
        channelIdentity: '',
        remark: '',
        cancelType: null,
        cancelReasonType: null,
        cancelReason: null,
        rightsType: null,
        createTime: '1600350829291',
        orderItemVOs: [{
          id: '354021736133427225',
          orderNo: null,
          spuId: '3',
          skuId: '135696670',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '腾讯极光盒子4智能网络电视机顶盒6K千兆网络机顶盒4K高分辨率',
          specifications: [{
              specTitle: '颜色',
              specValue: '贵族青'
            },
            {
              specTitle: '类型',
              specValue: '尊享礼盒装'
            },
          ],
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3b.png',
          originPrice: '0',
          actualPrice: '9999',
          buyQuantity: 1,
          itemTotalAmount: '9999',
          itemDiscountAmount: '9990',
          itemPaymentAmount: '10',
          goodsPaymentPrice: '10',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        }, ],
        logisticsVO: {
          logisticsType: 1,
          logisticsNo: '',
          logisticsStatus: null,
          logisticsCompanyCode: '',
          logisticsCompanyName: '',
          receiverAddressId: '14',
          provinceCode: '440000',
          cityCode: '440300',
          countryCode: '440306',
          receiverProvince: '广东省',
          receiverCity: '深圳市',
          receiverCountry: '宝安区',
          receiverArea: '',
          receiverAddress: '沙井中心路28号丽沙花都xx栋xx号',
          receiverPostCode: '',
          receiverLongitude: '113.829127',
          receiverLatitude: '22.713649',
          receiverIdentity: '88888888205468',
          receiverPhone: '17612345678',
          receiverName: '测试用户',
          expectArrivalTime: null,
          senderName: '',
          senderPhone: '',
          senderAddress: '',
          sendTime: null,
          arrivalTime: null,
        },
        paymentVO: {
          payStatus: 1,
          amount: '20',
          currency: null,
          payType: null,
          payWay: null,
          payWayName: null,
          interactId: null,
          traceNo: null,
          channelTrxNo: null,
          period: null,
          payTime: null,
          paySuccessTime: null,
        },
        buttonVOs: [{
            primary: false,
            type: 2,
            name: '取消订单'
          },
          {
            primary: true,
            type: 1,
            name: '付款'
          },
        ],
        labelVOs: null,
        invoiceVO: null,
        couponAmount: null,
        autoCancelTime: '1600352629291',
        orderStatusName: '待维修',
        orderSatusRemark: '需支付￥0.20',
        logisticsLogVO: null,
        invoiceStatus: null,
        invoiceDesc: null,
        invoiceUrl: null,
      }, ],
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 113,
    success: true,
  };
  const {
    pageNum,
    pageSize,
    orderStatus
  } = params.parameter;
  // 实现筛选
  if (orderStatus > -1) {
    resp.data.orders = resp.data.orders.filter(
      (order) => order.orderStatus === orderStatus,
    );
  }
  // 实现分页
  resp.data.pageNum = pageNum;
  resp.data.pageSize = pageSize;
  resp.data.orders = resp.data.orders.slice(
    (pageNum - 1) * pageSize,
    pageNum * pageSize,
  );
  return resp;
}

export function genOrdersCount() {
  const resp = {
    data: [{
        tabType: 5,
        orderNum: 1
      },
      {
        tabType: 10,
        orderNum: 1
      },
      {
        tabType: 40,
        orderNum: 1
      },
      {
        tabType: 50,
        orderNum: 2
      },
    ],
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 41,
    success: true,
  };
  return resp;
}