import {
  getGoodsList
} from './goods';

/**
 * @param {number} sort
 * @param {number} pageNum
 * @param {number} pageSize
 * @param {number} minPrice
 * @param {number} maxPrice
 * @param {string} keyword
 */

export function getSearchHistory() {
  return {
    historyWords: [
      '小米SU7',
      '保时捷',
      '特斯拉Model3',
      '问界M3',
      '保险杠',
      '车载大灯',
      '车用喷漆',
    ],
  };
}

export function getSearchPopular() {
  return {
    popularWords: [
      '小米SU7',
      '保时捷',
      '特斯拉Model3',
      '问界M3',
      '保险杠',
      '车载大灯',
      '车用喷漆',
    ],
  };
}

export function getSearchResult() {
  return {
    saasId: null,
    storeId: null,
    pageNum: 1,
    pageSize: 30,
    totalCount: 1,
    spuList: getGoodsList(7),
    algId: 0,
  };
}