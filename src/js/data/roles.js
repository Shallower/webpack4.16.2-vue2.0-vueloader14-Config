/*
 * 角色对照表
 * @Author: liangzc 
 * @Date: 2018-05-09 13:54:18 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-06-12 14:24:26
 */
module.exports = {
  //场库商户
  ParkingRoles: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '100',
      label: '财务',
      name: 'ParkMerFinance'
    },
    {
      code: '101',
      label: '岗亭收费员',
      name: 'ParkMerSentryBoxToll'
    },
    {
      code: '102',
      label: '内部收费员',
      name: 'ParkMerInsideToll'
    },
    {
      code: '103',
      label: '管理员',
      name: 'ParkMerAdmin'
    },
    {
      code: '104',
      label: '配置员',
      name: 'ParkMerCfg'
    }
  ],

  //运营商
  OperatorRoles: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '200',
      label: '管理员',
      name: 'OptorAdmin'
    },
    {
      code: '201',
      label: '配置员',
      name: 'OptorCfg'
    },
    {
      code: '202',
      label: '财务',
      name: 'OptorFinance'
    },
    {
      code: '203',
      label: '客服',
      name: 'OptorService'
    },
    {
      code: '204',
      label: '运营',
      name: 'Optorperation'
    }
  ],

  //商圈商户
  BusinessRoles: [
    {
      code: '',
      label: '全部'
    },
    {
      code: '300',
      label: '管理员',
      name: 'BusinessAdmin'
    },
    {
      code: '301',
      label: '配置员',
      name: 'BusinessCfg'
    },
    {
      code: '302',
      label: '营业员',
      name: 'BusinessTradeAssistant'
    },
    {
      code: '303',
      label: '财务',
      name: 'BusinessFinance'
    }
  ]
};
