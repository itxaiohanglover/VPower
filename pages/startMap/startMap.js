Page({
  data: {
    //店铺经纬度
    latitude: 37.75182,
    longitude: 112.723941,

    // 篮球场信息
    number: 12,
    place: "西操场",
    teleNumber: 15234390329,
    


    //标记点
    markers: [{
      id: 0,
      name: "西操场",
      address: "篮球场",
      latitude: 37.75182,
      longitude: 112.723941,
      width: 50,
      height: 50
    }],

  },
  //拨打电话
  Call() {
    var temp = String(this.data.teleNumber)
    wx.makePhoneCall({
      phoneNumber: temp
    })
  },
  //导航
  navRoad(event) {
    console.log(event)
    wx.getLocation({ //获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，
      success: function (res) {
        wx.openLocation({ //​使用微信内置地图查看位置。
          latitude: event.currentTarget.dataset.marker.latitude, //要去的纬度-地址
          longitude: event.currentTarget.dataset.marker.longitude, //要去的经度-地址
          name: event.currentTarget.dataset.marker.name,
          address: event.currentTarget.dataset.marker.address
        })
      }
    })
  }
})