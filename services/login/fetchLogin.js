import { config } from '../../config/index';

/** 获取所有已注册用户信息 */
function mockFetchUserAccount() {
  const { delay } = require('../_utils/delay');
  const { genUserAccount } = require('../../model/userAccount'); // 修正导入的模拟数据函数名称
  return delay(200).then(() => genUserAccount());
}

/** 获取所有已注册用户信息 */
export function fetchUserAccount() {
  if (config.useMock) {
    return mockFetchUserAccount(); // 修正调用的模拟数据函数名称
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}