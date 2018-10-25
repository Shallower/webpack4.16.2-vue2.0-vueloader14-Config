/*
 * 公共状态配置
 * @Author: liangzc 
 * @Date: 2018-04-18 09:29:59 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-09-27 16:44:03
 */
module.exports = {
  /**
   * 是否
   */
  Whether: [
    {
      code: '1',
      value: true,
      label: '是',
      name: 'Yes'
    },
    {
      code: '0',
      value: false,
      label: '否',
      name: 'No'
    }
  ],
  /**
   * 是否有效
   */
  Valid: [
    {
      code: '1',
      value: true,
      label: '有效',
      name: 'Yes'
    },
    {
      code: '0',
      value: false,
      label: '已过期',
      name: 'No'
    }
  ],
  /**
   * 待激活设备是否有效
   */
  MarkInvalid: [
    {
      code: '0',
      value: true,
      label: '有效',
      name: 'Yes'
    },
    {
      code: '1',
      value: false,
      label: '无效',
      name: 'No'
    }
  ],
  //商户状态
  MerStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '-1',
      label: '待审核',
      icon: 'icon-daishenhe',
      color: '#ffc55f',
      name: 'Unaudited'
    },
    {
      code: '1',
      label: '启用',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    },
    {
      code: '0',
      label: '注销', //禁用
      icon: 'icon-zhuxiao',
      color: '#373737',
      name: 'Cancel'
    }
  ],
  //停车场状态
  ParkingStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '-1',
      label: '未启用',
      icon: 'icon-kongtiaoguankong-',
      color: '#69e3ff',
      name: 'NotEnabled'
    },
    {
      code: '1',
      label: '启用',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    },
    {
      code: '0',
      label: '禁用',
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    }
  ],
  //区域状态
  AreaStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '1',
      label: '有效',
      icon: 'icon-youxiao',
      color: '#4095de',
      name: 'Valid'
    },
    {
      code: '0',
      label: '无效',
      icon: 'icon-wuxiao',
      color: '#ff3d3d',
      name: 'Invalid'
    }
  ],
  //区域设备状态
  DeviceStatus: [
    {
      code: '-1',
      label: '未绑定',
      icon: 'icon-kongtiaoguankong-',
      color: '#69e3ff',
      name: 'NotEnabled'
    },
    {
      code: '0',
      label: '已绑定',
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    },
    {
      code: '1',
      label: '已启用',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    }
  ],
  //待激活设备状态
  activeDeviceStatus: [
    {
      code: '200',
      label: '待激活',
      icon: 'icon-kongtiaoguankong-',
      color: '#69e3ff',
      name: 'NotEnabled'
    },
    {
      code: '100',
      label: '已激活',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    }
  ],
  //产品状态
  ProductStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '-1',
      label: '编辑中',
      icon: 'icon-bianji',
      color: '#ffc55f',
      name: 'Editing'
    },
    {
      code: '0',
      label: '下架',
      icon: 'icon-xiajia1',
      color: '#4bdb4b',
      name: 'Disable'
    },
    {
      code: '1',
      label: '上架',
      icon: 'icon-shangjia',
      color: '#69e3ff',
      name: 'Enable'
    }
  ],
  //方案状态
  PlanStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '1',
      label: '启用',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    },
    {
      code: '0',
      label: '禁用',
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    }
  ],
  //区域出入口状态
  GateWayStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '-1',
      label: '未启用',
      icon: 'icon-kongtiaoguankong-',
      color: '#69e3ff',
      name: 'NotEnabled'
    },
    {
      code: '1',
      label: '启用',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    },
    {
      code: '0',
      label: '禁用',
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    }
  ],
  // 优惠券状态
  CouponStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '600',
      label: '有效',
      icon: 'icon-youxiao',
      color: '#4095de',
      name: 'Valid'
    },
    {
      code: '602',
      label: '过期',
      icon: 'icon-weitongguo',
      color: '#373737',
      name: 'Invalid'
    },
    {
      code: '601',
      label: '停止发放',
      icon: 'icon-tingzhi',
      color: '#ffa357',
      name: 'StopIssuing'
    }
  ],
  //车牌状态
  PlateStatus: [
    {
      code: '1',
      label: '有效',
      icon: 'icon-youxiao',
      color: '#4095de',
      name: 'Valid'
    },
    {
      code: '0',
      label: '注销', //禁用
      icon: 'icon-zhuxiao',
      color: '#373737',
      name: 'Cancel'
    }
  ],
  ValidStatus: [
    {
      code: '生效',
      label: '有效',
      icon: 'icon-youxiao',
      color: '#4095de',
      name: 'Valid'
    },
    {
      code: '欠费',
      label: '欠费', //禁用
      icon: 'icon-owe',
      color: '#ff3d3d',
      textColor: '#ff3d3d',
      name: 'Cancel'
    }
  ],
  //名单状态
  ListStatus: [
    {
      code: '1',
      label: '启用',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    },
    {
      code: '0',
      label: '禁用', //禁用
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    }
  ],
  ListStatusW: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '1',
      label: '生效',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    },
    {
      code: '0',
      label: '终止', //禁用
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    }
  ],
  ListStatusPo: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '1',
      label: '有效',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    },
    {
      code: '2',
      label: '已到期', //禁用
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    },
    {
      code: '0',
      label: '无效', //禁用
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    }
  ],
  //费率
  Rate: {
    //方案状态
    PlanStatus: [
      {
        code: '',
        label: '全部'
      },
      {
        code: '1',
        label: '启用',
        icon: 'icon-qiyong2',
        color: '#4095de',
        name: 'Enable'
      },
      {
        code: '0',
        label: '禁用',
        icon: 'icon-jinyong',
        color: '#ff3d3d',
        name: 'Disable'
      }
    ]
  },
  //支付状态
  PayState: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '10001',
      label: '未缴费',
      name: 'Unpaid'
    },
    {
      code: '10002',
      label: '已缴费未离场',
      icon: 'icon-daishenhe',
      color: '#ffc55f',
      name: 'PaidNoneout'
    },
    {
      code: '10003',
      label: '已缴费超时离场',
      icon: 'icon-weitongguo',
      color: '#f76260',
      name: 'PaidTimeout'
    }
  ],
  //人员状态
  StaffStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '0',
      label: '启用',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Enable'
    },
    {
      code: '1',
      label: '禁用',
      icon: 'icon-jinyong',
      color: '#ff3d3d',
      name: 'Disable'
    }
  ],
  //交易状态
  TradeStatus: [
    {
      code: '',
      label: '全部'
    },
    {
      code: 'Successed',
      label: '支付成功',
      icon: 'icon-qiyong2',
      color: '#4095de',
      name: 'Successed'
    },
    {
      code: 'NotPay',
      label: '未支付',
      icon: 'icon-jinyong',
      color: '#69e3ff',
      name: 'NotPay'
    },
    {
      code: 'Failed',
      label: '支付失败',
      icon: 'icon-wuxiao',
      color: '#ff3d3d',
      name: 'Failed'
    }
  ],
  // 在场状态：
  isInParking: [
    {
      code: '0',
      label: '全部'
    },
    {
      code: '1',
      label: '在场'
    },
    {
      code: '2',
      label: '已出场'
    }
  ]
};
