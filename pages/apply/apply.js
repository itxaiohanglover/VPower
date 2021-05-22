
var util = require('../../utils/util.js');
Page({
  data :{
      inputData : null,
      isShowImg : false,
      yun:""
  },
  input(e){
    console.log(e.detail.value)
    this.setData({
      inputData : e.detail.value
    })
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime2(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    console.log(time.substring(0,10))
    var temp = time.substring(0,10)
    this.setData({
      time: temp
    });
  },
  upLoad(){
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log("获取临时链接成功" + tempFilePaths[0])
        that.uploadImg(tempFilePaths[0])
      } 
    })
  },
  uploadImg(tempFilePath){
    console.log(tempFilePath)
    wx.cloud.uploadFile({
      cloudPath: 'image_user/Test2.jpg',
      filePath: tempFilePath  // 文件路径   传进来的本身就是字符串不用加“”
    }).then(res => {
      // get resource ID
      console.log("上传成功" + res.fileID)
      this.setData({
        isShowImg : true,
        yun:"cloud://study-8ghukkpqbce04ce3.7374-study-8ghukkpqbce04ce3-1305810421/image_uese/Test2.jpg"
      })

    }).catch(error => {
      console.log("上传失败" + error)// handle error
    })
  },
  submit(){
    // wx.showModal({
    //   title: '确认提交',
    //   content: '',
    //   success (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1000
      
    })

    wx.navigateBack({
      delta:1
    })
  }
})