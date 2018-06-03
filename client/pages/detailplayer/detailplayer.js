// pages/player/player.js
var config = require('../../config');
var app = getApp();
var crurl = app.globalData.crurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioIndex: 0,
    currentTime: 0,
    totalTime: 0,
    playStatus: false,
    timer: '',
    plist:[],
    pobj:{},
  },

  // tocollect: function (e) {
  //   let that = this;
  //   app.collect(e, function () {
  //     let sobj = that.data.sobj;
  //     let slist = that.data.slist;
  //     for (let i = 0; i < slist.length; i++) {
  //       if (app.globalData.sid == slist[i].id) {
  //         slist[i].favorated = !slist[i].favorated
  //       }
  //     }
  //     sobj.favorated = !sobj.favorated;
  //     that.setData({
  //       sobj: sobj,
  //       slist: slist
  //     })
  //     app.globalData.slist = slist;
  //   });
  // },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    
    wx.request({
      url: config.service.detailUrl,
      method:'POST',
      header: {
        'content-type': 'application/json'
      },
      data:{
        id:options.sid,
      },
      success: res => {
        let plist = res.data.data;
        for (let i = 0; i < plist.length; i++) {
          plist[i].picture = crurl + plist[i].picture;
        }
        that.setData({
          plist: plist,
          pobj: plist[0]
        })
        that.play();
        console.log(config.service.detailUrl)
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },


  //音乐播放进度条
  bindSliderchange: function (e) {
    // clearInterval(this.data.timer)
    let value = e.detail.value
    let that = this
    console.log(e.detail.value)
    //获取后台音乐播放的状态
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        console.log(res)
        let { status, duration } = res
        if (status === 1 || status === 0) {
          that.setData({
            sliderValue: value
          });
          //控制音乐播放的进度
          wx.seekBackgroundAudio({
            position: value * duration / 100,
          });
        }
      }
    })
  },

  //播放 暂停
  bindPlaySong: function () {
    console.log('播放/暂停音乐...');
    console.log(this.data.playStatus);
    if (this.data.playStatus === true) {
      this.play();
      this.setData({
        playStatus: false
      });
    } else {
      wx.pauseBackgroundAudio();
      this.setData({
        playStatus: true
      });
    }
  },
  //播放音乐函数
  play() {
    let that = this;
    let pobj = that.data.pobj;
    wx.playBackgroundAudio({
      dataUrl: pobj.mp3,
      title: pobj.name,
      coverImgUrl: pobj.picture
    })
    let timer = setInterval(function () {
      that.setDuration(that)
    }, 1000)
    that.setData({ timer: timer })
  },
  //音乐 时间轴
  setDuration(that) {
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        // console.log(res)
        let { status, duration, currentPosition } = res
        if (status === 1 || status === 0) {
          that.setData({
            currentTime: that.stotime(currentPosition),
            totalTime: that.stotime(duration),
            sliderValue: Math.floor(currentPosition * 100 / duration),
          })
        }
      }
    })
  },
  //时间转换
  stotime: function (s) {
    let t = '';
    if (s > -1) {
      // let hour = Math.floor(s / 3600);
      let min = Math.floor(s / 60) % 60;
      let sec = s % 60;
      // if (hour < 10) {
      //   t = '0' + hour + ":";
      // } else {
      //   t = hour + ":";
      // }

      if (min < 10) { t += "0"; }
      t += min + ":";
      if (sec < 10) { t += "0"; }
      t += sec;
    }
    return t;
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