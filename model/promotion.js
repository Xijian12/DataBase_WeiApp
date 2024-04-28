import {
  getGoodsList
} from './goods';

export function getPromotion(baseID = 0, length = 10) {
  return {
    list: getGoodsList(baseID, length).map((item) => {
      return {
        spuId: item.spuId,
        thumb: item.primaryImage,
        title: item.title,
        price: item.minSalePrice,
        originPrice: item.maxLinePrice,
        tags: item.spuTagList.map((tag) => ({
          title: tag.title
        })),
      };
    }),
    banner: 'https://database-carrepair.oss-cn-shanghai.aliyuncs.com/carImage/%E5%B0%8F%E7%B1%B3su7.jpg',
    time: 1000 * 60 * 60 * 20,
    showBannerDesc: true,
    statusTag: 'running',
  };
}