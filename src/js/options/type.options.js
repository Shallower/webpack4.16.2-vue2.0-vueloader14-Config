/*
 * 公共类型配置
 * @Author: liangzc 
 * @Date: 2018-04-18 09:29:59 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-10-11 13:47:17
 */
module.exports = {
  //商户类型
  MerType: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '80',
      label: '运营商',
      name: 'Operator'
    },
    {
      code: '81',
      label: '场库商户',
      name: 'ParkMer'
    },
    {
      code: '82',
      label: '商圈商户',
      name: 'BusinessMer'
    },
    {
      code: '83',
      label: 'App用户',
      name: 'AppUser'
    }
  ],
  //结算方式
  SettlementType: [
    {
      code: '50',
      label: '月结',
      name: 'Monthly'
    },
    {
      code: '51',
      label: '直连',
      name: 'Direct'
    }
  ],
  //场库类型
  ParkType: [
    {
      code: '30',
      label: '混合停车场',
      name: 'MixedParkingLot'
    }
  ],
  //区域出入口类型
  GateWayType: [
    {
      code: '70',
      label: '入口',
      name: 'Entrance'
    },
    {
      code: '71',
      label: '出口',
      name: 'Exit'
    }
    // {
    //   code: '72',
    //   label: '出入口',
    //   name: 'EntranceAndExit'
    // }
  ],
  //车辆名单类型
  PlateType: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '40',
      label: '月卡车',
      name: 'Monthly'
    },
    {
      code: '41',
      label: '固定车',
      name: 'Fixed'
    },
    {
      code: '42',
      label: '免费车',
      name: 'Free'
    },
    {
      code: '43',
      label: '白名单车',
      name: 'WhiteList'
    },
    {
      code: '44',
      label: '外来临时车',
      name: 'Temporary'
    },
    {
      code: '45',
      label: '协议车',
      name: 'ProtocolPlate'
    }
  ],
  //名单转换类型
  NamelistChange: [
    {
      code: '40',
      label: '月卡车',
      name: 'Monthly'
    },
    {
      code: '41',
      label: '固定车',
      name: 'Fixed'
    },
    {
      code: '42',
      label: '免费车',
      name: 'Free'
    },
    {
      code: '45',
      label: '协议车',
      name: 'ProtocolPlate'
    }
  ],
  // 优惠券种类
  CouponType: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '700',
      label: '现金券',
      name: 'Cash'
    },
    {
      code: '701',
      label: '时长券',
      name: 'Duration'
    },
    {
      code: '702',
      label: '折扣券',
      name: 'Discount'
    },
    {
      code: '703',
      label: '纸质现金券',
      name: 'EntityCash',
      source: 'Entity'
    },
    {
      code: '704',
      label: '纸质时长券',
      name: 'EntityDuration',
      source: 'Entity'
    }
  ],
  //费率
  Rate: {
    //循环计费方式
    CycleType: [
      {
        code: 'NoCycle',
        label: '不循环计费',
        name: 'NoCycle'
      },
      {
        code: 'NaturalDay',
        label: '自然天',
        name: 'NaturalDay'
      },
      {
        code: 'TwentyFourHours',
        label: '24小时',
        name: 'TwentyFourHours'
      }
    ],
    //费用计算方式
    FeeCalculation: [
      {
        code: 'PayPerView',
        label: '按次收费',
        name: 'PayPerView'
      },
      {
        code: 'PayByTime',
        label: '计时收费',
        name: 'PayByTime'
      }
    ],
    //计时收费方式
    PayByTimeType: [
      {
        code: 'TimeFixed',
        label: '固定费率',
        name: 'TimeFixed'
      },
      {
        code: 'TimeRange',
        label: '阶梯费率',
        name: 'TimeRange'
      }
    ],
    //时段类型
    PeriodTimeType: [
      {
        code: 'AnyTime',
        label: '全天',
        name: 'AnyTime'
      },
      {
        code: 'Daytime',
        label: '白天时段',
        name: 'Daytime'
      },
      {
        code: 'Nighttime',
        label: '夜间时段',
        name: 'Nighttime'
      }
    ],
    //收费日类型
    DayType: [
      {
        code: 'AnyDay',
        label: '全部',
        name: 'AnyDay'
      },
      {
        code: 'WorkingDay',
        label: '工作日',
        name: 'WorkingDay'
      },
      {
        code: 'Holiday',
        label: '非工作日',
        name: 'Holiday'
      }
    ],
    //车型限制
    CarSizeType: [
      {
        code: 'AnySize',
        label: '全部',
        name: 'AnySize'
      },
      {
        code: 'BigCar',
        label: '大型车',
        name: 'BigCar'
      },
      {
        code: 'MiddleCar',
        label: '中型车',
        name: 'MiddleCar'
      },
      {
        code: 'SmallCar',
        label: '小型车',
        name: 'SmallCar'
      }
    ]
  },
  //投诉电话类型
  ComplainPhoneType: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '20000',
      label: '用户投诉',
      name: 'User'
    },
    {
      code: '20001',
      label: '岗亭收费员报障',
      name: 'SentryBox'
    },
    {
      code: '20002',
      label: '商圈商户投诉',
      name: 'Business'
    }
  ],
  //出入场类型
  AreaDirect: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '90000',
      label: '车辆入场',
      name: 'VechicleIn'
    },
    {
      code: '90001',
      label: '车辆出场',
      name: 'VechicleOut'
    }
  ],
  //交接班类型
  DutyType: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '900',
      label: '交班',
      name: 'GiveDuty'
    },
    {
      code: '901',
      label: '接班',
      name: 'ReceiveDuty'
    }
  ],
  //交易渠道
  PayChannel: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '0',
      label: '微信支付',
      name: 'Wechat'
    },
    {
      code: '1',
      label: '支付宝支付',
      name: 'Alipay'
    },
    {
      code: '2',
      label: '停车点支付',
      name: 'ParkingPoint'
    },
    {
      code: '3',
      label: '现金支付',
      name: 'Cash'
    },
    {
      code: '4',
      label: '无需支付',
      name: 'NoNeedPay'
    },
    {
      code: '999',
      label: '模拟测试',
      name: 'Simulation'
    }
  ],
  //支付类型
  PayType: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '3',
      label: '现金支付',
      name: 'Cash'
    },
    {
      code: '8',
      label: '电子支付',
      name: 'EPay'
    }
  ],
  //进出场类型
  InOutType: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '80',
      label: '出场',
      name: 'Out'
    },
    {
      code: '81',
      label: '进场',
      name: 'In'
    }
  ],
  //是否已离场
  LeaveParking: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '80',
      label: '已出场',
      name: 'Out'
    },
    {
      code: '81',
      label: '未出场',
      name: 'NoneOut'
    }
  ],
  //释义同上，数据兼容
  IsLeavePark: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '84',
      label: '已出场',
      name: 'Out'
    },
    {
      code: '85',
      label: '未出场',
      name: 'NoneOut'
    }
  ],
  //Socket事件类型
  SocketEvent: [
    {
      code: 'VehicleEntry',
      label: '车辆入场',
      name: 'VehicleEntry'
    },
    {
      code: 'Payment',
      label: '车辆缴费',
      name: 'VehiclePayment'
    },
    {
      code: 'VehicleLeave',
      label: '车辆离场',
      name: 'VehicleLeave'
    },
    {
      code: 'OnLine',
      label: '设备上线',
      name: 'DeviceOnLine'
    },
    {
      code: 'DownLine',
      label: '设备离线',
      name: 'DeviceOffLine'
    },
    {
      code: 'PreVehicleLeave',
      label: '车辆准备离场',
      name: 'PreVehicleLeave'
    },
    {
      code: 'PreVehicleEntry',
      label: '车辆准备入场',
      name: 'PreVehicleEntry'
    }
  ],
  //设备是否激活
  IsActive: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '100',
      label: '已激活',
      name: 'active'
    },
    {
      code: '200',
      label: '待激活',
      name: 'NoneActive'
    }
  ],
  //设备下发指令
  Instructions: [
    {
      code: 'Restart',
      label: '设备重启',
      name: 'Restart'
    },
    {
      code: 'RestartCamera',
      label: '摄像头重启',
      name: 'RestartCamera'
    },
    {
      code: 'ReportInfo',
      label: '信息报告',
      name: 'ReportInfo'
    },
    {
      code: 'ReportConfig',
      label: '配置报告',
      name: 'ReportConfig'
    },
    {
      code: 'PlayVoice',
      label: '语音播报',
      name: 'PlayVoice'
    },
    {
      code: 'TimeConfig',
      label: '配置时间',
      name: 'TimeConfig'
    }
  ],
  //设备-摄像机类型配置
  CameraType: [
    { code: 'master', label: '主摄像机' },
    { code: 'slaver', label: '辅助摄像机' }
  ],
  //设备-主板网络方式配置
  InetType: [
    { label: 'static方式', code: 'static' },
    { label: 'dhcp方式', code: 'dhcp' }
  ],
  // 平台类型
  PlatFormType: [
    {
      code: '10000',
      label: '微信',
      name: 'Wechat'
    },
    {
      code: '10001',
      label: '支付宝',
      name: 'Alipay'
    },
    {
      code: '10002',
      label: '手机号码',
      name: 'Mobile'
    }
  ],
  //统计周期
  StatisCycle: [
    {
      code: '0',
      label: '日',
      name: 'Day'
    },
    {
      code: '1',
      label: '周',
      name: 'Week'
    },
    {
      code: '2',
      label: '月',
      name: 'Month'
    }
  ],
  //放行类型
  ReleaseType: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '82',
      label: '特殊放行',
      name: 'Special'
    },
    {
      code: '83',
      label: '正常放行',
      name: 'Normal'
    }
  ],
  /**
   * 业务类型
   */
  BizType: [
    {
      code: '0',
      label: '购买停车点',
      name: 'RechargePoint'
    },
    {
      code: '1',
      label: '停车缴费',
      name: 'ParkingPayment'
    },
    {
      code: '2',
      label: '购买错峰',
      name: 'StaggerBuy'
    },
    {
      code: '3',
      label: '购买长租',
      name: 'MonthlyBuy'
    },
    {
      code: '9',
      label: '订单退款',
      name: 'Refund'
    }
  ],
  /**
   * 查询支付记录自己还是全部
   */
  ChargeRecord: [
    {
      code: '1',
      label: '自己收费记录',
      name: 'Mine'
    },
    {
      code: '2',
      label: '全部收费记录',
      name: 'All'
    }
  ],
  // 车辆类型
  CarsType: [
    {
      code: '3',
      label: '小型车',
      name: 'Small'
    },
    {
      code: '2',
      label: '中型车',
      name: 'Middel'
    },
    {
      code: '1',
      label: '大型车',
      name: 'Big'
    }
  ],
  //日期类型
  RenewType: [
    {
      code: '1',
      label: '月',
      name: 'Month'
    },
    {
      code: '0',
      label: '30天',
      name: 'ThirtyDay'
    }
  ],
  //排序类型
  OrderByType: [
    {
      code: '0',
      label: '车位号',
      name: 'CarSeat'
    },
    {
      code: '1',
      label: '修改时间',
      name: 'ModifyTime'
    }
  ]
};
