// components/menu/menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainmodel: {
      type: Object,
      value: {}
    },
    menulist: {
      type: Object,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showmenus:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showclick:function(){
      console.log("showclick")
      let isshow = !this.data.showmenus;
      console.log(isshow)
      this.setData({
        showmenus: isshow,
      })
    },
    itemclick:function(e){
      this.showclick();
      // console.log("11111111")
      console.log(e.currentTarget.dataset);
      // console.log(e.currentTarget.dataset.item.id)
      var temp = e.currentTarget.dataset.item.id
      if(temp == 2){
        wx.navigateTo({
          url: '/pages/apply/apply',
        })
      }
      if(temp == 1){
        if (wx.pageScrollTo) {
          wx.pageScrollTo({
            scrollTop: 0
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          })
        }
      }
      // console.log("2222222")
      let info = e.currentTarget.dataset.item;
      if (info){
        this.triggerEvent('menuItemClick', {
            "iteminfo":info
        })
      }
    }
   

  },
})
