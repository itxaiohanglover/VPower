Page({
  data: {
    isShowUserName: false,
    userInfo: null,
    name:"游客",
    sex:"未知",
    money: 0,
  },

  //获取用户信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log("获取用户信息成功", res)
        let user = res.userInfo
        wx.setStorageSync('user', user) //保存用户信息到本地缓存

        // var tempSex = "男"
        // if(res.userInfo.sex == 2){
        //     tempSex = "女"
        // }
        
        this.setData({
          isShowUserName: true,
          userInfo: user,
          name:res.userInfo.nickName,
          sex:res.userInfo.gender,
        })
      },
      fail: res => {
        console.log("获取用户信息失败", res)
      }
    })
  },
  onShow(options) {
    this.getUserProfile()
    var user = wx.getStorageSync('user'); //从本地缓存去用户信息
    if (user && user.nickName) { //如果本地缓存有信息就显示本地缓存
      this.setData({
        isShowUserName: true,
        userInfo: user,
      })
    }
  },

  // 退出登录
  loginOut() {
    this.setData({
      userInfo: ''
    })
    wx.setStorageSync('user', null)
  }
})