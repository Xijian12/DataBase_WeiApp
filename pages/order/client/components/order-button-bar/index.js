import Toast from 'tdesign-miniprogram/toast/index';
import { OrderButtonTypes } from '../../config';

Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    order: {
      type: Object,
      observer(order) {
        const buttons = {
          left: [],
          right: [],
        };

        // 查找评论按钮的原始数据
        const commentButton = (order.buttons || []).find(b => b.type === OrderButtonTypes.COMMENT);

        if (commentButton) {
          buttons.right.push(commentButton);
        }

        this.setData({ buttons });
      },
    },
    goodsIndex: {
      type: Number,
      value: null,
    },
    isBtnMax: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    order: {},
    buttons: {
      left: [],
      right: [],
    },
  },

  methods: {
    // 点击【订单操作】按钮，根据按钮类型分发
    onOrderBtnTap(e) {
      const { type } = e.currentTarget.dataset;
      switch (type) {
        case OrderButtonTypes.COMMENT:
          this.onAddComment(this.data.order);
          break;
      }
    },

    /** 添加订单评论 */
    onAddComment(order) {
      const imgUrl = order?.goodsList?.[0]?.thumb;
      const title = order?.goodsList?.[0]?.title;
      const specs = order?.goodsList?.[0]?.specs;
      wx.navigateTo({
        url: `/pages/goods/comments/create/index?specs=${specs}&title=${title}&orderNo=${order?.orderNo}&imgUrl=${imgUrl}`,
      });
    },
  },
});
