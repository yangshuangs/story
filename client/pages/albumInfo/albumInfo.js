// pages/albumInfo/albumInfo.js
var config=require('../../config');
var app = getApp();
var crurl = app.globalData.crurl;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    mask:true,
    slist:[],
    aobj: [],
    aname: '',
  },

  showmask: function () {
    let that = this;
    that.setData({
      mask: false
    })
  },
  hidemask: function () {
    let that = this;
    that.setData({
      mask: true
    })
  },

  toplay: function (e) {
    wx.navigateTo({
      url: '../detailplayer/detailplayer?sid=' + e.currentTarget.dataset.sid 
    })
  },

  // tocollect: function (e) {
  //   let that = this;

  //   let slist = that.data.slist;
  //   for (let i = 0; i < slist.length; i++) {
  //     if (e.currentTarget.dataset.sid == slist[i].id) {
  //       slist[i].favorated = !slist[i].favorated;
  //       console.log(slist[i].id, slist[i].favorated)
  //     }
  //   }
  //   that.setData({
  //     slist: slist
  //   })
  //   app.globalData.slist = slist;

  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log(options.aid);
    //显示分类
    wx.request({
      url: config.service.onecateUrl,
      method:'POST',
      header:{
        'content-type': 'application/json'
      },
      data:{
        id: options.aid,
      },
      success:res=>{
        let aobj = res.data.data;
        for (let i = 0; i < aobj.length; i++) {
          aobj[i].picture = crurl + aobj[i].picture;
        }
        that.setData({
          aobj: aobj
        })
        console.log(config.service.onecateUrl);
        console.log(res.data);
      }
    })
    //此类别下的故事
    wx.request({
      url: config.service.storyUrl,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data:{
        id: options.aid,
      },
      success:res=>{
        let slist = res.data.data;
        for (let i = 0; i < slist.length; i++) {
          slist[i].picture = crurl + slist[i].picture;
        }
        that.setData({
          slist: slist
        })
        console.log(config.service.storyUrl)
        console.log(res.data)
      }

    })
    // that.setData({
    //   aid:options.aid,
    //   aname:options.aname,
    // })
    // console.log(options.aid, options.aname)
  
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
  
    let that = this;
    let options = that.options;
    wx.setNavigationBarTitle({
      title: options.aname,
    })

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