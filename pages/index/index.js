Page({
  startMap(){
    wx.navigateTo({
      url: "../startMap/startMap",
      success: function(res){
        console.log(res)
        // success
        },
        fail: function(res) {
        // fail
        console.log(res)
        },
        complete: function(res) {
        // complete
        }
    })
  },
  startClock(){
    wx.navigateTo({
      url: "../clock/clock",
      success: function(res){
        console.log(res)
        // success
        },
        fail: function(res) {
        // fail
        console.log(res)
        },
        complete: function(res) {
        // complete
        }
    })
  }

})