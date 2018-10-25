/*
 * 省市区数据处理
 * @Author: liangzc 
 * @Date: 2018-06-25 11:25:39 
 * @Last Modified by: liangzc
 * @Last Modified time: 2018-06-25 11:29:42
 */

/**
 * 获取源数据
 */
function getCitySource() {
  //调用高德API获取数据

  //http://restapi.amap.com/v3/config/district?key=09360eaf94aa48619836641df7801a15&keywords=&subdistrict=3&extensions=base

  //模拟数据
  return {
    status: '1',
    info: 'OK',
    infocode: '10000',
    count: '1',
    suggestion: {
      keywords: [],
      cities: []
    },
    districts: [
      {
        citycode: [],
        adcode: '100000',
        name: '中华人民共和国',
        center: '116.3683244,39.915085',
        level: 'country',
        districts: []
      }
    ]
  };
}

/**
 * 转换数据
 * @param {*} source
 */
function convert(source) {
  let cityData = {};
  for (let data of source) {
    let _data = {
      adcode: data.adcode,
      name: data.name,
      citycode: data.citycode || ''
    };
    if (Array.isArray(data.districts) && data.districts.length > 0) {
      _data.districts = flatData(data.districts);
    }
    cityData[data.adcode] = _data;
  }
  return cityData;
}

document.write(JSON.stringify(convert(getCitySource().districts[0].districts)));
