/**
 *  * @param {number} spuId
 * @param {number} pageNum
 * @param {number} pageSize
 * @param {number} commentsLevel
 * @param {boolean} hasImage
 */
export function getGoodsAllComments(params) {
  const { hasImage } = params.queryParameter;
  if (hasImage) {
    return {
      pageNum: 1,
      pageSize: 10,
      totalCount: '1',
      pageList: [
        {
          spuId: '1722045',
          skuId: '0',
          specInfo: '',
          commentContent:
            '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
          commentResources: [
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
              type: 'image',
            },
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/comment-video.mp4',
              type: 'video',
              coverSrc:
                'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
            },
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/comment-video.mp4',
              type: 'video',
              coverSrc:
                'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
            },
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/comment-video.mp4',
              type: 'video',
              coverSrc:
                'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
            },
          ],
          commentScore: 4,
          uid: '88881048075',
          userName: 'Dean',
          userHeadUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
          isAnonymity: false,
          commentTime: '1591953561000',
          isAutoComment: false,
          sellerReply:
            '亲，你好，我们会联系商家和厂商给您一个满意的答复请一定妥善保管好发票',
          goodsDetailInfo: '颜色:纯净白  尺码:S码',
        },
        {
          spuId: '1722045',
          skuId: '0',
          specInfo: '',
          commentContent:
            '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
          commentResources: [
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
              type: 'image',
            },
          ],
          commentScore: 4,
          uid: '88881048075',
          userName: 'Dean',
          userHeadUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
          isAnonymity: false,
          commentTime: '1591953561000',
          isAutoComment: false,
          sellerReply:
            '亲，你好，我们会联系商家和厂商给您一个满意的答复请一定妥善保管好发票',
          goodsDetailInfo: '颜色:纯净白  尺码:S码',
        },
        {
          spuId: '1722045',
          skuId: '0',
          specInfo: '',
          commentContent:
            '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
          commentResources: [
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
              type: 'image',
            },
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/comment-video.mp4',
              type: 'video',
              coverSrc:
                'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
            },
          ],
          commentScore: 4,
          uid: '88881048075',
          userName: 'Dean',
          userHeadUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
          isAnonymity: false,
          commentTime: '1591953561000',
          isAutoComment: false,
          sellerReply:
            '亲，你好，我们会联系商家和厂商给您一个满意的答复请一定妥善保管好发票',
          goodsDetailInfo: '颜色:纯净白  尺码:S码',
        },
        {
          spuId: '1722045',
          skuId: '0',
          specInfo: '',
          commentContent:
            '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
          commentResources: [
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
              type: 'image',
            },
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/comment-video.mp4',
              type: 'video',
              coverSrc:
                'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
            },
            {
              src: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/comment-video.mp4',
              type: 'video',
              coverSrc:
                'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-08b.png',
            },
          ],
          commentScore: 4,
          uid: '88881048075',
          userName: 'Dean',
          userHeadUrl:
            'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
          isAnonymity: false,
          commentTime: '1591953561000',
          isAutoComment: false,
          sellerReply:
            '亲，你好，我们会联系商家和厂商给您一个满意的答复请一定妥善保管好发票',
          goodsDetailInfo: '颜色:纯净白  尺码:S码',
        },
      ],
    };
  }
  return {
    pageNum: 1,
    pageSize: 10,
    totalCount: '47',
    pageList: [
      {
        spuId: '1722045',
        skuId: '1697694',
        specInfo: '很不错',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 1,
        uid: '88881048075',
        userName: 'Dean',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1592224320000',
        isAutoComment: false,
        sellerReply:
          '亲，你好，我们会联系商家和厂商给您一个满意的答复请一定妥善保管好发票',
        goodsDetailInfo: '颜色:纯净白  尺码:S码',
      },
      {
        spuId: '1722045',
        skuId: '1697693',
        specInfo: '很适合',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 1,
        uid: '88881048075',
        userName: 'Dean',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1592224320000',
        isAutoComment: false,
        sellerReply:
          '亲，你好，我们会联系商家和厂商给您一个满意的答复请一定妥善保管好发票',
        goodsDetailInfo: '颜色:纯净白  尺码:S码',
      },
      {
        spuId: '1722045',
        skuId: '1697694',
        specInfo: 'NICE',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 5,
        uid: '88881048075',
        userName: 'Dean',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1592218074000',
        isAutoComment: true,
        sellerReply:
          '亲，你好，我们会联系商家和厂商给您一个满意的答复请一定妥善保管好发票',
      },
      {
        spuId: '1722045',
        skuId: '0',
        specInfo: '',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 5,
        uid: '88881048075',
        userName: 'Dean',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1592218074000',
        isAutoComment: false,
        goodsDetailInfo: '颜色:纯净白  尺码:S码',
      },
      {
        spuId: '1722045',
        skuId: '1697694',
        specInfo: '测试dr超长:dr专用超长;bwtgg01:fff',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 5,
        uid: '88881048075',
        userName: 'Dean',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1592217607000',
        isAutoComment: false,
      },
      {
        spuId: '1722045',
        skuId: '1697693',
        specInfo: '测试dr超长:超长测试超长测试1;bwtgg01:bbb',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 4,
        uid: '88881048075',
        userName: 'Dean',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1592217607000',
        isAutoComment: false,
      },
      {
        spuId: '1722045',
        skuId: '1697694',
        specInfo: '测试dr超长:dr专用超长;bwtgg01:fff',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 5,
        uid: '88881048075',
        userName: 'Dean',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1592205599000',
        isAutoComment: false,
      },
      {
        spuId: '1722045',
        skuId: '1697694',
        specInfo: '测试dr超长:dr专用超长;bwtgg01:fff',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 5,
        uid: '88881048075',
        userName: 'Dean',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1592188822000',
        isAutoComment: false,
      },
      {
        spuId: '1722045',
        skuId: '1697694',
        specInfo: '测试dr超长:dr专用超长;bwtgg01:fff',
        commentContent:
          '这家店的汽修技术很好，服务态度也不错，修好的汽车像新的',
        commentImageUrls: null,
        commentScore: 5,
        uid: '88881055835',
        userName: 'Max',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1593792002000',
        isAutoComment: true,
      },
      {
        spuId: '1722045',
        skuId: '1697694',
        specInfo: '测试dr超长:dr专用超长;bwtgg01:fff',
        commentContent: '',
        commentImageUrls: null,
        commentScore: 5,
        uid: '88881055835',
        userName: 'Max',
        userHeadUrl:
          'https://cdn-we-retail.ym.tencent.com/tsr/avatar/avatar1.png',
        isAnonymity: false,
        commentTime: '1593792001000',
        isAutoComment: true,
      },
    ],
  };
}

export function getGoodsCommentsCount() {
  return {
    commentCount: '47',
    badCount: '0',
    middleCount: '2',
    goodCount: '45',
    hasImageCount: '1',
    goodRate: 95.7,
    uidCount: '0',
  };
}
