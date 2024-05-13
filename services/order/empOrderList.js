import {
  request
} from '../../utils/request';

import {
  realGenEmpOrders
} from '../../model/order/emp/orderList'

/*import {
  config
} from '../../config/index';*/

const config = {
  /** 是否使用mock代替api返回 */
  useMock: false,
};

/** 获取订单列表mock数据 */
function mockFetchOrders(params) {
  //const { delay } = require('../_utils/delay');
  //const { genOrders } = require('../../model/order/orderList');

  //return delay(200).then(() => genOrders(params));
  /*await request('/client/queryMyVehicleFaultInfo', 'GET', {}).then((res) => {
    //wx.setStorageSync('get_order_list_res', res)
    orderListFullData = res
    console.log('then')
  })*/
  console.log('genOrders...')
  return new Promise((resolve, reject) => {
    request('/emp/empQueryOnGoingTable', 'GET', {}).then((res) => {
      //wx.setStorageSync('get_order_list_res', res)
      //orderListFullData = res
      //console.log('then')
      console.log('empQueryOnGoingTable', res)
      resolve(genOrders(params))
    }).catch((res) => {
      reject(res)
    })
  })
}

/** 获取订单列表数据 */
export function fetchOrders(params) {
  if (config.useMock) {
    return mockFetchOrders(params);
  }

  return new Promise((resolve) => {
    //resolve('real api');
    request('/emp/empQueryOnGoingTable', 'GET', {pageSize: 10000}).then(res => {
      console.log('request finished...')
      console.log(res)
      resolve(realGenEmpOrders(res.data, params))
    })
  });
}

/** 获取订单列表mock数据 */
function mockFetchOrdersCount(params) {
  const {
    delay
  } = require('../_utils/delay');
  const {
    genOrdersCount
  } = require('../../model/order/orderList');

  return delay().then(() => genOrdersCount(params));
}

/** 获取订单列表统计 */
export function fetchOrdersCount(params) {
  if (config.useMock) {
    return mockFetchOrdersCount(params);
  }

  return mockFetchOrdersCount(params);

  return new Promise((resolve) => {
    resolve('real api');
  });
}