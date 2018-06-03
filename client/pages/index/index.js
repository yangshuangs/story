//index.js
var config=require('../../config')
var app = getApp();
var crurl = app.globalData.crurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: [],
    moves: [],
    category:[],
    hotlist:[],
  },

  sleep_story:function(e){
    wx.navigateTo({
      url:'../albumInfo/albumInfo?aid=' + e.currentTarget.dataset.id
       + "&aname=" + e.currentTarget.dataset.name,
    })
  },

  detailplay:function(e){
    wx.navigateTo({
      url: '../detailplayer/detailplayer?sid=' + e.currentTarget.dataset.id + "&sname=" + e.currentTarget.dataset.name,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: config.service.categoryUrl,
      method:'GET',
      header:{
        'content-type':'application/json'
      },
      success:res=>{
        let category = res.data.data;
        for (let i = 0; i < category.length; i++) {
          category[i].picture = crurl + category[i].picture;
        }
        that.setData({
          category: category
        })
        console.log(config.service.categoryUrl)
        console.log(res.data)
      }
    })

    wx.request({
      url: config.service.hotUrl,
      method:'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        let hotlist = res.data.data;
        for (let i = 0; i < hotlist.length; i++) {
          hotlist[i].picture = crurl + hotlist[i].picture;
        }
        that.setData({
          hotlist: hotlist
        })
        console.log(config.service.hotUrl)
        console.log(res.data)
      }
    })

    wx.request({
      url: config.service.alterpicUrl,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        let moves = res.data.data;
        for (let i = 0; i < moves.length; i++) {
          moves[i].picture = crurl + moves[i].picture;
        }
        that.setData({
          moves: moves
        })
        console.log(config.service.alterpicUrl)
        console.log(res.data)
      }
    })
    // wx.request({
    //   url: config.service.collectUrl,
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: res => {
        // let hotlist = res.data.data;
        // for (let i = 0; i < hotlist.length; i++) {
        //   hotlist[i].picture = crurl + hotlist[i].picture;
        // }
        // that.setData({
        //   hotlist: hotlist
        // })
        // console.log(config.service.hotUrl)
    //     console.log(res.data)
    //   }
    // })

    
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