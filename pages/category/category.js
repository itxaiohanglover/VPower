// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menulist:[
      {
        "id":"1",
        "url":"/images/menu/top.png",
        "title":"顶部",
      },
      {
        "id":"2",
        "url":"/images/menu/add.png",
        "title":"发表",
      }     
    ],
    mainmodel:{
      "url": "/images/menu/home.png",
      "title": "菜单",
    },
    likes : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.flush(1)
 },

    flush(){
     
    //   wx.cloud.database().collection("society").get()
    //   .then(res =>{
    //   var tempdata =[]
    //   tempdata = res.data[num-1]
    //   console.log(res.data[num-1])
    //   console.log(tempdata.content)
      
    //   var dataList=[
    //     {
    //     date:tempdata.date,
    //     condition: false,
    //     content: tempdata.content,
    //     collect: tempdata.like,
    //     replyCount: 40,
    //     img: "/images/family/banner_1.jpg",
    //     // reply_icon: "/images/like/favour.png",
    //     // chat_icon: "/images/family/banner_1.jpg",
    //     content_img: "cloud://study-8ghukkpqbce04ce3.7374-study-8ghukkpqbce04ce3-1305810421/image_user/Test" + num + ".jpg"
    //   },
    //   ]

    //     this.setData({ posts_key: dataList});
    
    
    // })
    // .catch(err =>{
    //     console.log(err)
    //   })

      var dataList=[
        {
        date:"2021-5-16",
        condition: false,
        content: "轻运动健身方案",
        collect: this.data.likes,
        replyCount: 40,
        img: "/images/family/banner_1.jpg",
        // reply_icon: "/images/like/favour.png",
        // chat_icon: "/images/family/banner_1.jpg",
        content_img: "/images/sc/Test1.jpg"
      },
      {
        date:"2021-5-21",
        condition: false,
        content: "运动健身的人群坚持运动的内在原因主要是保持健康，提升身体素质和缓解压力。",
        collect: this.data.likes,
        replyCount: 40,
        img: "/images/family/banner_1.jpg",
        // reply_icon: "/images/like/favour.png",
        // chat_icon: "/images/family/banner_1.jpg",
        content_img: "/images/family/banner_1.jpg"
      },
      ]

        this.setData({ posts_key: dataList});

    
    
    },
 
    like(){
      console.log( this.data.likes)
      var temp = this.data.likes + 1
      this.setData({
        likes : temp
      })
      // wx.cloud.database().collection("society")
      // .doc("28ee4e3e60a27fb4199c7bdc76c146e2")
      // .update({
      //   like : temp,
      // })
      this.flush()
      // console.log(this.posts_key.collect)
  },

 // 悬浮事件
 menuItemClick:function(res){
  console.log(res);
  //获取点击事件的信息
  let clickInfo = res.detail.iteminfo 
  console.log(clickInfo);
  // 根据不同类型进行判别处理
  //事件的处理 代码

},






  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})