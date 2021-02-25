const headerArr = [
  {
    id: 1,
    CnName: '发现音乐',
    EnName: 'findMusic',
    active: true,
    islogin: false,
    toName: '/',
    children: [
      {
        id: 100001,
        CnName: '推荐',
        active: true,
        toName: '/400'
      },
      {
        id: 100002,
        CnName: '排行榜',
        active: false,
        toName: '/401'
      },
      {
        id: 100003,
        CnName: '歌单',
        active: false,
        toName: '/'
      },
      {
        id: 100004,
        CnName: '主播电台',
        active: false,
        toName: '/'
      },
      {
        id: 100005,
        CnName: '歌手',
        active: false,
        toName: '/'
      },
      {
        id: 100006,
        CnName: '新碟上架',
        active: false,
        toName: '/'
      }
    ]
  },
  {
    id: 2,
    CnName: '我的音乐',
    EnName: 'myMusic',
    active: false,
    islogin: true,
    toName: '/400'
  },
  {
    id: 3,
    CnName: '朋友',
    EnName: 'friend',
    active: false,
    islogin: true,
    toName: '/404'
  },
  {
    id: 4,
    CnName: '商城',
    EnName: 'shopping',
    active: false,
    islogin: false,
    toName: '/500'
  },
  {
    id: 5,
    CnName: '音乐人',
    EnName: 'musician',
    active: false,
    islogin: true,
    toName: '/501'
  },
  {
    id: 6,
    CnName: '下载客户端',
    EnName: 'download',
    active: false,
    islogin: true,
    toName: '/502'
  }
]
export default headerArr
