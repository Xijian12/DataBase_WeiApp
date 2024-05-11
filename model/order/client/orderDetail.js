import {
  mockIp,
  mockReqId
} from '../../../utils/mock';

const faultInfo = {
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

const maintenanceProgress = {
  "repairAuthorization": {
      "rai": 1,
      "clientId": 1,
      "vfi": 1,
      "empId": 21,
      "mileage": 500.0,
      "onboardItems": "\u8f66\u5ea7\u62b1\u6795\uff0c\u8f66\u8f86\u6587\u4ef6",
      "checkResult": "\u5c0f\u578b\u5250\u8e6d\u6389\u6f06",
      "repairMethod": "\u91cd\u65b0\u4e0a\u6f06\u6253\u5149\u5904\u7406",
      "isWashCar": 1,
      "isGetFormerComponent": 1,
      "totalRepairCost": 160.0,
      "createTime": "2024-04-19 00:14:29",
      "updateTime": "2024-04-19 00:12:20",
      "estDelivTime": "2024-06-19 00:12:21"
  },
  "finishedTaskNum": 2,
  "repairTaskList": [
      {
          "riid": 1,
          "repairItem": "\u91cd\u65b0\u4e0a\u6f06",
          "needComponent": "\u6cb9\u6f06",
          "pricePerComponent": 40.0,
          "totalComponentPrice": 80.0,
          "rai": 1,
          "createTime": "2024-04-19 00:21:32",
          "updateTime": "2024-04-19 00:21:34",
          "isComplete": 1
      },
      {
          "riid": 2,
          "repairItem": "\u6253\u5149",
          "needComponent": "\u9ad8\u538b\u7a7a\u6c14\uff0c\u6253\u5149\u5242",
          "pricePerComponent": 50.0,
          "totalComponentPrice": 50.0,
          "rai": 1,
          "createTime": "2024-04-19 00:22:18",
          "updateTime": "2024-04-26 23:38:02",
          "isComplete": 1
      }
  ],
  "riidTomdoidMap": {
      "1": [
          {
              "mdoid": 1,
              "workLength": 1.0,
              "pricePerhour": 20.0,
              "riid": 1,
              "empId": 20,
              "empType": 4,
              "isComplete": 1,
              "createTime": "2024-04-19 00:29:56",
              "updateTime": "2024-04-19 00:30:00"
          }
      ],
      "2": [
          {
              "mdoid": 2,
              "workLength": 0.5,
              "pricePerhour": 20.0,
              "riid": 2,
              "empId": 20,
              "empType": 4,
              "isComplete": 1,
              "createTime": "2024-04-19 00:59:28",
              "updateTime": "2024-04-26 23:38:02"
          }
      ]
  },
  "mdoidToogidMap": {
      "1": [
          {
              "ogid": 1,
              "mdoid": 1,
              "assignId": 14,
              "receivedId": 20,
              "status": 3,
              "createTime": "2024-04-19 00:34:23",
              "endTime": "2024-04-19 00:34:25"
          }
      ],
      "2": [
          {
              "ogid": 2,
              "mdoid": 2,
              "assignId": 14,
              "receivedId": 20,
              "status": 3,
              "createTime": "2024-04-19 00:34:50",
              "endTime": "2024-04-26 23:38:02"
          }
      ]
  }
}

const orderResps = [{
    data: {
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
      remark: '买电风扇送电池吗',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1600350829288',
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
        buttonVOs: [{
          primary: false
        }],
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
        primary: true,
        type: 1,
        name: '付款'
      }],
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '0',
      autoCancelTime: '1823652629288',
      orderStatusName: '待维修',
      orderSatusRemark: '需支付￥0.20',
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 89,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: '云Mall深圳旗舰店',
      uid: '88888888205468',

      parentOrderNo: '132381532610540875',
      orderId: '132381537256650240',
      orderNo: '132381532610540875',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 10,
      orderSubStatus: null,
      totalAmount: '76600',
      goodsAmount: '76600',
      goodsAmountApp: '76600',
      paymentAmount: '36800',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '34800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '麻烦给个配饰',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,

      createTime: '1587140043976',

      orderItemVOs: [{
          id: '132381537407645696',
          orderNo: null,
          spuId: '0',
          skuId: '135676631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙',
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          originPrice: '40000',
          actualPrice: '29800',
          specifications: [{
              specTitle: '颜色',
              specValue: '米色荷叶边',
            },
            {
              specTitle: '尺码',
              specValue: 'S',
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '29800',
          itemDiscountAmount: '19813',
          itemPaymentAmount: '9987',
          goodsPaymentPrice: '9987',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
        {
          id: '132381537407645952',
          orderNo: null,
          spuId: '7',
          skuId: '135691633',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '不锈钢刀叉勺套装家用西餐餐具ins简约耐用不锈钢金色银色可选',
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png',
          originPrice: '29900',
          actualPrice: '19900',
          specifications: [{
              specTitle: '颜色',
              specValue: '奶黄色'
            },
            {
              specTitle: '类型',
              specValue: '三件套'
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '19900',
          itemDiscountAmount: '13230',
          itemPaymentAmount: '6670',
          goodsPaymentPrice: '6670',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
        {
          id: '132381537407646208',
          orderNo: null,
          spuId: '1',
          skuId: '135691631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '纯色纯棉休闲圆领短袖T恤纯白亲肤厚柔软细腻面料纯白短袖套头T恤',
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08a.png',
          originPrice: '31900',
          actualPrice: '26900',
          specifications: [{
              specTitle: '颜色',
              specValue: '白色',
            },
            {
              specTitle: '尺码',
              specValue: 'S',
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '26900',
          itemDiscountAmount: '6757',
          itemPaymentAmount: '20143',
          goodsPaymentPrice: '20143',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: null,
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '',
        logisticsStatus: null,
        logisticsCompanyCode: '',
        logisticsCompanyName: '',

        receiverAddressId: '2',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: '广东省',
        receiverCity: '广州市',
        receiverCountry: '海珠区',
        receiverArea: '',
        receiverAddress: '新港中路397号',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '88888888205468',
        receiverPhone: '17612345678',
        receiverName: '张三',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: null,
        arrivalTime: null,
      },
      paymentVO: {
        payStatus: 1,
        amount: '36800',
        currency: 'CNY',
        payType: 0,
        payWay: null,
        payWayName: null,
        interactId: '4923587',
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: '1600162877000',
        paySuccessTime: '1600162877538',
      },
      buttonVOs: [{
          primary: false,
          type: 2,
          name: '取消订单',
        },
        {
          primary: true,
          type: 9,
          name: '再次购买',
        },
      ],
      labelVOs: null,
      invoiceVO: {
        buyerName: '腾讯计算机有限公司', //个人或公司名称
        buyerTaxNo: '9144 9808 0909 0293 XG', //税号
        buyerPhone: '18600008888', //手机
        email: '73900484@qq.com', //邮箱
        titleType: 2, //发票抬头 1-个人 2-公司
        ontentType: 1, //发票内容 1-明细 2类别
        invoiceType: 5, //是否开票 0-不开 5-电子发票
        money: '1.54',
      },
      trajectoryVos: [{
          title: '已下单',
          icon: 'https://cdn-we-retail.ym.tencent.com/web/trajectoryIcons/ordered.svg',
          code: '200002',
          nodes: [{
            status: '订单已经支付成功，支付方式为：微信支付',
            timestamp: '1600162877506',
            remark: null,
          }, ],
          isShow: true,
        },
        {
          title: '',
          icon: null,
          code: '200001',
          nodes: [{
            status: '订单已提交',
            timestamp: '1600162856204',
            remark: null,
          }, ],
          isShow: true,
        },
      ],

      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: '待维修',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 79,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: '云Mall深圳旗舰店',
      uid: '88888888205468',
      parentOrderNo: '132222623132329291',
      orderId: '132222629674264064',
      orderNo: '132222623132329291',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 40,
      orderSubStatus: null,
      totalAmount: '500400',
      goodsAmount: '500400',
      goodsAmountApp: '500400',
      paymentAmount: '458600',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '36800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '我是买一送一的，记得送',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1587130572345',
      orderItemVOs: [{
          id: '132222629825259776',
          orderNo: null,
          spuId: '5',
          skuId: '135691625',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '迷你便携高颜值蓝牙无线耳机立体声只能触控式操作简约立体声耳机',
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png',
          originPrice: '15900',
          actualPrice: '8900',
          specifications: [{
              specTitle: '颜色',
              specValue: '黑色',
            },
            {
              specTitle: '尺码',
              specValue: '简约款',
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '8900',
          itemDiscountAmount: '2134',
          itemPaymentAmount: '6766',
          goodsPaymentPrice: '6766',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{
            primary: false,
            type: 4,
            name: '申请售后'
          }],
        },
        {
          id: '132222629825260032',
          orderNo: null,
          spuId: '0',
          skuId: '135676631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙',
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
          originPrice: '40000',
          actualPrice: '29800',
          specifications: [{
              specTitle: '颜色',
              specValue: '米色荷叶边',
            },
            {
              specTitle: '尺码',
              specValue: 'S',
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '29800',
          itemDiscountAmount: '4026',
          itemPaymentAmount: '25774',
          goodsPaymentPrice: '25774',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{
            primary: false,
            type: 4,
            name: '申请售后'
          }],
        },
        {
          id: '132222629825260288',
          orderNo: null,
          spuId: '3',
          skuId: '135691622',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '腾讯极光盒子4智能网络电视机顶盒6K千兆网络机顶盒4K高分辨率',
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-3a.png',
          originPrice: '16900',
          actualPrice: '9900',
          specifications: [{
              specTitle: '颜色',
              specValue: '经典白',
            },
            {
              specTitle: '类型',
              specValue: '经典套装',
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '9900',
          itemDiscountAmount: '1337',
          itemPaymentAmount: '8563',
          goodsPaymentPrice: '8563',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{
            primary: false,
            type: 4,
            name: '申请售后'
          }],
        },
        {
          id: '132222629825260544',
          orderNo: null,
          spuId: '135681628',
          skuId: '135676629',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '带帽午休毯虎年款多功能加厚加大加绒简约多功能午休毯连帽披肩',
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/muy-3a.png',
          originPrice: '39900',
          actualPrice: '29900',
          specifications: [{
              specTitle: '颜色',
              specValue: '浅灰色',
            },
            {
              specTitle: '尺码',
              specValue: 'S',
            },
          ],
          buyQuantity: 4,
          itemTotalAmount: '119600',
          itemDiscountAmount: '4040',
          itemPaymentAmount: '115560',
          goodsPaymentPrice: '28890',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{
            primary: false,
            type: 4,
            name: '申请售后'
          }],
        },
        {
          id: '132222629825260800',
          orderNo: null,
          spuId: '2',
          skuId: '135686631',
          roomId: null,
          goodsMainType: 0,
          goodsViceType: 0,
          goodsName: '运动连帽拉链卫衣休闲开衫长袖多色运动细绒面料运动上衣',
          goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-17a.png',
          originPrice: '39900',
          actualPrice: '25900',
          specifications: [{
              specTitle: '颜色',
              specValue: '军绿色',
            },
            {
              specTitle: '尺码',
              specValue: 'XS',
            },
          ],
          buyQuantity: 1,
          itemTotalAmount: '25900',
          itemDiscountAmount: '392',
          itemPaymentAmount: '25508',
          goodsPaymentPrice: '25508',
          tagPrice: null,
          tagText: null,
          outCode: null,
          labelVOs: null,
          buttonVOs: [{
            primary: false,
            type: 4,
            name: '申请售后'
          }],
        },
      ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '111112',
        logisticsStatus: null,
        logisticsCompanyCode: 'yunda',
        logisticsCompanyName: '韵达快递',

        receiverAddressId: '8',
        provinceCode: '440000',
        cityCode: '440300',
        countryCode: '440306',
        receiverProvince: '广东省',
        receiverCity: '深圳市',
        receiverCountry: '南山区',
        receiverArea: '',
        receiverAddress: '前海路333号阳光玫瑰园',
        receiverPostCode: '',
        receiverLongitude: '113.829127',
        receiverLatitude: '22.713649',
        receiverIdentity: '700000011070005',
        receiverPhone: '17612345678',
        receiverName: '平均线',
        expectArrivalTime: null,
        senderName: '',
        senderPhone: '',
        senderAddress: '',
        sendTime: '1599795293089',
        arrivalTime: null,
      },
      paymentVO: {
        payStatus: 1,
        amount: '458600',
        currency: 'CNY',
        payType: 0,
        payWay: null,
        payWayName: null,
        interactId: '66869',
        traceNo: null,
        channelTrxNo: null,
        period: null,
        payTime: '1594869391000',
        paySuccessTime: '1594869391287',
      },
      buttonVOs: [{
        primary: true,
        type: 3,
        name: '确认收货',
      }, ],
      labelVOs: null,
      trajectoryVos: [{
          title: '已发货',
          icon: 'deliver',
          code: '200003',
          nodes: [{
            status: '商家已发货，物流承运商：韵达快递',
            timestamp: '1599795293089',
            remark: null,
          }, ],
          isShow: true,
        },
        {
          title: '已下单',
          icon: 'https://cdn-we-retail.ym.tencent.com/web/trajectoryIcons/ordered.svg',
          code: '200002',
          nodes: [{
            status: '订单已经支付成功，支付方式为：微信支付',
            timestamp: '1594869391220',
            remark: null,
          }, ],
          isShow: true,
        },
        {
          title: '',
          icon: null,
          code: '200001',
          nodes: [{
            status: '订单已提交',
            timestamp: '1594869381185',
            remark: null,
          }, ],
          isShow: true,
        },
      ],

      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: '维修中',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 1,
      invoiceDesc: '已开发票',
      invoiceUrl: null,
      invoiceVO: {
        buyerName: '公司名称XXXX', //个人或公司名称
        buyerTaxNo: 'R5647U7', //税号
        buyerPhone: '13534343434', //手机
        email: '123@qq.com', //邮箱
        titleType: 2, //发票抬头 1-个人 2-公司
        ontentType: 2, //发票内容 1-明细 2类别
        invoiceType: 5, //是否开票 0-不开 5-电子发票
        isInvoice: '已开票',
        money: 10000,
      },
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 74,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: '云Mall深圳旗舰店',
      uid: '88888888205468',
      parentOrderNo: '130862219672031307',
      orderId: '130862224737571072',
      orderNo: '130862219672031307',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 80,
      orderSubStatus: null,
      totalAmount: '298000',
      goodsAmount: '298000',
      goodsAmountApp: '298000',
      paymentAmount: '263200',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '29800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: '超时未支付',
      rightsType: 0,
      createTime: '1587049485895',
      orderItemVOs: [{
        id: '130862224922120960',
        orderNo: null,
        spuId: '0',
        skuId: '135676631',
        roomId: null,
        goodsMainType: 0,
        goodsViceType: 0,
        goodsName: '白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙',
        goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
        originPrice: '40000',
        actualPrice: '29800',
        specifications: [{
            specTitle: '颜色',
            specValue: '米色荷叶边'
          },
          {
            specTitle: '尺码',
            specValue: 'S'
          },
        ],
        buyQuantity: 10,
        itemTotalAmount: '298000',
        itemDiscountAmount: '29800',
        itemPaymentAmount: '268200',
        goodsPaymentPrice: '26820',
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
        receiverAddressId: '2',
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
        amount: '263200',
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
      buttonVOs: null,
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: '已取消(未支付)',
      orderSatusRemark: '超时未支付',
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 70,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: '云Mall深圳旗舰店',
      uid: '88888888205468',
      parentOrderNo: '130494472895208267',
      orderId: '130494482155052032',
      orderNo: '130494472895208267',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 80,
      orderSubStatus: null,
      totalAmount: '59700',
      goodsAmount: '59700',
      goodsAmountApp: '59700',
      paymentAmount: '24900',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '29800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 3,
      cancelReasonType: 0,
      cancelReason: '超时未支付',
      rightsType: 0,
      createTime: '1587027566726',
      orderItemVOs: [{
        id: '130494482322824704',
        orderNo: null,
        spuId: '7',
        skuId: '135691633',
        roomId: null,
        goodsMainType: 0,
        goodsViceType: 0,
        goodsName: '不锈钢刀叉勺套装家用西餐餐具ins简约耐用不锈钢金色银色可选',
        goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/gh-2b.png',
        originPrice: '29900',
        actualPrice: '19900',
        specifications: [{
            specTitle: '颜色',
            specValue: '奶黄色'
          },
          {
            specTitle: '类型',
            specValue: '三件套'
          },
        ],
        buyQuantity: 3,
        itemTotalAmount: '59700',
        itemDiscountAmount: '29800',
        itemPaymentAmount: '29900',
        goodsPaymentPrice: '9966',
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
        receiverAddressId: '2',
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
        amount: '24900',
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
      buttonVOs: null,
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '5000',
      autoCancelTime: null,
      orderStatusName: '已取消(未支付)',
      orderSatusRemark: '超时未支付',
      logisticsLogVO: null,
      invoiceStatus: 3,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 81,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: '云Mall深圳旗舰店',
      uid: '88888888205468',
      parentOrderNo: '130169571554503755',
      orderId: '130169572291521792',
      orderNo: '130169571554503755',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 50,
      orderSubStatus: null,
      totalAmount: '538000',
      goodsAmount: '538000',
      goodsAmountApp: '538000',
      paymentAmount: '508200',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '29800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 10,
      createTime: '1587008200587',
      orderItemVOs: [{
        id: '130169572425740032',
        orderNo: null,
        spuId: '1',
        skuId: '135691631',
        roomId: null,
        goodsMainType: 0,
        goodsViceType: 0,
        goodsName: '纯色纯棉休闲圆领短袖T恤纯白亲肤厚柔软细腻面料纯白短袖套头T恤',
        goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
        originPrice: '31900',
        actualPrice: '26900',
        specifications: [{
            specTitle: '颜色',
            specValue: '橙色'
          },
          {
            specTitle: '尺码',
            specValue: 'M'
          },
        ],
        buyQuantity: 20,
        itemTotalAmount: '538000',
        itemDiscountAmount: '29800',
        itemPaymentAmount: '508200',
        goodsPaymentPrice: '25410',
        tagPrice: null,
        tagText: null,
        outCode: null,
        labelVOs: null,
        buttonVOs: null,
      }, ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '123',
        logisticsStatus: null,
        logisticsCompanyCode: 'zhongtong',
        logisticsCompanyName: '中通速递',
        receiverAddressId: '2',
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
        sendTime: '1587008529453',
        arrivalTime: '1587008623995',
      },
      paymentVO: {
        payStatus: 2,
        amount: '508200',
        currency: 'CNY',
        payType: 0,
        payWay: 0,
        payWayName: '微信支付',
        interactId: '121212',
        traceNo: '121212',
        channelTrxNo: '121212',
        period: null,
        payTime: '2020-03-23 00:00:00',
        paySuccessTime: '2020-04-16 11:36:41',
      },
      buttonVOs: [{
          primary: false,
          type: 4,
          name: '申请售后'
        },
        {
          primary: true,
          type: 6,
          name: '评价'
        },
      ],
      labelVOs: null,
      invoiceVO: {
        buyerName: '腾讯计算机有限公司', //个人或公司名称
        buyerTaxNo: '9144 9808 0909 0293 XG', //税号
        buyerPhone: '18600008888', //手机
        email: '73900484@qq.com', //邮箱
        titleType: 2, //发票抬头 1-个人 2-公司
        ontentType: 1, //发票内容 1-明细 2类别
        invoiceType: 5, //是否开票 0-不开 5-电子发票
        money: '1.54',
      },
      couponAmount: '0',
      autoCancelTime: null,
      orderStatusName: '维修完成',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 91,
    success: true,
  },
  {
    data: {
      saasId: '88888888',
      storeId: '1000',
      storeName: '云Mall深圳旗舰店',
      uid: '88888888205468',
      parentOrderNo: '130150835531421259',
      orderId: '130150836385879808',
      orderNo: '130150835531421259',
      orderType: 0,
      orderSubType: 0,
      orderStatus: 50,
      orderSubStatus: null,
      totalAmount: '29800',
      goodsAmount: '29800',
      goodsAmountApp: '29800',
      paymentAmount: '4000',
      freightFee: '0',
      packageFee: '0',
      discountAmount: '25800',
      channelType: 0,
      channelSource: '',
      channelIdentity: '',
      remark: '',
      cancelType: 0,
      cancelReasonType: 0,
      cancelReason: '',
      rightsType: 0,
      createTime: '1587007083839',
      orderItemVOs: [{
        id: '130150836520098048',
        orderNo: null,
        spuId: '0',
        skuId: '135681631',
        roomId: null,
        goodsMainType: 0,
        goodsViceType: 0,
        goodsName: '白色短袖连衣裙荷叶边裙摆宽松韩版休闲纯白清爽优雅连衣裙',
        goodsPictureUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png',
        originPrice: '40000',
        actualPrice: '29800',
        specifications: [{
            specTitle: '颜色',
            specValue: '米色荷叶边'
          },
          {
            specTitle: '尺码',
            specValue: 'M'
          },
        ],
        buyQuantity: 1,
        itemTotalAmount: '29800',
        itemDiscountAmount: '25800',
        itemPaymentAmount: '4000',
        goodsPaymentPrice: '4000',
        tagPrice: null,
        tagText: null,
        outCode: null,
        labelVOs: null,
        buttonVOs: null,
      }, ],
      logisticsVO: {
        logisticsType: 1,
        logisticsNo: '123',
        logisticsStatus: null,
        logisticsCompanyCode: 'yuantong',
        logisticsCompanyName: '圆通速递',
        receiverAddressId: '2',
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
        sendTime: '1587008539953',
        arrivalTime: '1588291200508',
      },
      paymentVO: {
        payStatus: 2,
        amount: '4000',
        currency: 'RNB',
        payType: 0,
        payWay: 0,
        payWayName: '微信支付',
        interactId: '121212',
        traceNo: '121212',
        channelTrxNo: '121212',
        period: null,
        payTime: '2020-03-23 00:00:00',
        paySuccessTime: '2020-04-16 11:18:09',
      },
      buttonVOs: [{
          primary: false,
          type: 4,
          name: '申请售后'
        },
        {
          primary: true,
          type: 6,
          name: '评价'
        },
      ],
      labelVOs: null,
      invoiceVO: null,
      couponAmount: '0',
      autoCancelTime: null,
      orderStatusName: '维修完成',
      orderSatusRemark: null,
      logisticsLogVO: null,
      invoiceStatus: 2,
      invoiceDesc: '暂不开发票',
      invoiceUrl: null,
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 95,
    success: true,
  },
];

export function realGenOrderDetail(faultInfoData, maintenanceProgressData, params) {
  let faultInfo = faultInfoData.rows.find(faultInfo => {
    return params.parameter == faultInfo.vfi
  })
  console.log("realGenOrderDetail()...")
  console.log(faultInfo)
  faultInfo.progress = maintenanceProgressData
  //let maintenanceProgress = maintenanceProgressData
  console.log(faultInfo)
  return faultInfo
}

export function genOrderDetail(params) {
  let resp = faultInfo.rows.find(faultInfo => {
    return params.parameter == faultInfo.vfi
  })
  console.log("genOrderDetail()...")
  console.log(resp)
  resp.progress = maintenanceProgress
  //let maintenanceProgress = maintenanceProgressData
  console.log(resp)
  return resp
}

export function genOrderDetail__(params) {
  const {
    parameter
  } = params;
  const resp = orderResps.find((r) => r.data.orderNo === parameter);
  return resp;
}

export function genBusinessTime() {
  const resp = {
    data: {
      businessTime: ['周一,周二,周三,周四,周五:00:20:00-08:00:00'],
      telphone: '18565372257',
      saasId: '88888888',
    },
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 3,
    success: true,
  };
  return resp;
}