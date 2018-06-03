/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://7ew9qsqn.qcloud.la';

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,
    // 登录地址，用于建立会话
    loginUrl: `${host}/?login/login`,
    //验证登录
    checkUrl: `${host}/?login/check`,
    //分类
    categoryUrl: `${host}/?gushi/show`,
    //单个分类
    onecateUrl: `${host}/?gushi/one`,
    //精选故事
    hotUrl: `${host}/?story/hot`,
    //轮播图
    alterpicUrl: `${host}/?alterpic/show`,
    //故事
    storyUrl: `${host}/?story/show`, // 
    //故事详情
    detailUrl: `${host}/?story/detail`,  //传参 story id
    //
    collectUrl:`${host}/?collect/list`,
  }
};

module.exports = config;