import {
  request
} from '../../utils/request';
//import { config } from '../../config/index';
import {
  realGenOrderDetail
} from '../../model/order/client/orderDetail'

const config = {
  /** 是否使用mock代替api返回 */
  useMock: false,
};

/** 获取订单详情mock数据 */
function mockFetchOrderDetail(params) {
  const { delay } = require('../_utils/delay');
  const { genOrderDetail } = require('../../model/order/client/orderDetail');

  return delay().then(() => genOrderDetail(params));
}

/** 获取订单详情数据 */
export function fetchOrderDetail(params) {
  if (config.useMock) {
    return mockFetchOrderDetail(params);
  }

  return new Promise((resolve) => {
    //resolve('real api');
    request('/client/queryMyVehicleFaultInfo', 'GET', {}).then((res1) => {
      console.log('queryMyVehicleFaultInfo succeeded')
      console.log(res1.data)
      console.log(params)
      console.log(`/client/queryMaintenanceProgress?vfi=${Number(params.parameter)}`)
      request(`/client/queryMaintenanceProgress?vfi=${params.parameter}`, 'GET', {}).then(res2 => {
        console.log('fetchOrders() then')
        console.log(res1)
        console.log(res2)
        resolve(realGenOrderDetail(res1.data, res2.data, params))
      })
    })
  })
}

/** 获取客服mock数据 */
function mockFetchBusinessTime(params) {
  const { delay } = require('../_utils/delay');
  const { genBusinessTime } = require('../../model/order/orderDetail');

  return delay().then(() => genBusinessTime(params));
}

/** 获取客服数据 */
export function fetchBusinessTime(params) {
  if (config.useMock) {
    return mockFetchBusinessTime(params);
  }

  return mockFetchBusinessTime(params);

  return new Promise((resolve) => {
    resolve('real api');
  });
}
