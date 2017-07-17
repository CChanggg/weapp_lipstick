// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {brand: 'Top',datas: [{img:'../../images/1.png', text: 'Armani'},
                            {img:'../../images/2.png',text:'Anastashia Bevely Hills'}]},
      {brand: 'A', datas: [{img:'../../images/1.png', text: 'Armani'},
                           {img:'../../images/2.png',text:'Anastashia Bevely Hills'}]},
      {brand: 'B', datas: [{img:'../../images/3.png',text:'Bite Beauty'},
                           {img:'../../images/4.png',text:'Bobbi Browm'},
                           {img:'../../images/5.png',text:'Bourjois'}]},
      {brand: 'C', datas: [{img:'../../images/6.png',text:'Chanel'},
                           {img:'../../images/7.png',text:'Clinique'},
                           {img:'../../images/8.png',text:'ColorPop'}]},
      {brand: 'D', datas: [{img:'../../images/9.png',text:'Dior'}]},
      {brand: 'E', datas: [{img:'../../images/10.png',text:'e.l.f'},
                           {img:'../../images/11.png',text:'Estee Lauder'},
                           {img:'../../images/12.png',text:'Etude House'}]},
      {brand: 'F', datas: [{img:'../../images/1.png',text:'fsome'},
                           {img:'../../images/2.png',text:'fentries'},
                           {img:'../../images/3.png',text:'fare here'}]},
      {brand: 'G', datas: [{img:'../../images/4.png',text:'gsome'},
                           {img:'../../images/5.png',text:'gentries'},
                           {img:'../../images/6.png',text:'gare here'}]},
      {brand: 'H', datas: [{img:'../../images/7.png',text:'hsome'},
                           {img:'../../images/8.png',text:'hentries'},
                           {img:'../../images/9.png',text:'hare here'}]},
      {brand: 'I', datas: [{img:'../../images/10.png',text:'isome'},
                           {img:'../../images/11.png',text:'ientries'},
                           {img:'../../images/12.png',text:'iare here'}]},
      {brand: 'J', datas: [{img:'../../images/1.png',text:'jsome'},
                           {img:'../../images/2.png',text:'jentries'},
                           {img:'../../images/3.png',text:'jare here'}]},
      {brand: 'K', datas: [{img:'../../images/4.png',text:'ksome'},
                           {img:'../../images/5.png',text:'kentries'},
                           {img:'../../images/6.png',text:'kare here'}]},
      {brand: 'L', datas: [{img:'../../images/7.png',text:'lsome'},
                           {img:'../../images/8.png',text:'lentries'},
                           {img:'../../images/9.png',text:'lare here'}]},
      {brand: 'M', datas: [{img:'../../images/10.png',text:'msome'},
                           {img:'../../images/11.png',text:'mentries'},
                           {img:'../../images/12.png',text:'mare here'}]},
      {brand: 'N', datas: [{img:'../../images/1.png',text:'nsome'},
                           {img:'../../images/2.png',text:'nentries'},
                           {img:'../../images/3.png',text:'nare here'}]},
      {brand: 'O', datas: [{img:'../../images/4.png',text:'osome'},
                           {img:'../../images/5.png',text:'oentries'},
                           {img:'../../images/6.png',text:'oare here'}]},
      {brand: 'P', datas: [{img:'../../images/7.png',text:'psome'},
                           {img:'../../images/8.png',text:'pentries'},
                           {img:'../../images/9.png',text:'pare here'}]},
      {brand: 'Q', datas: [{img:'../../images/10.png',text:'qsome'},
                           {img:'../../images/11.png',text:'qentries'},
                           {img:'../../images/12.png',text:'qare here'}]},
      {brand: 'R', datas: [{img:'../../images/1.png',text:'rsome'},
                           {img:'../../images/2.png',text:'rentries'},
                           {img:'../../images/3.png',text:'rare here'}]},
      {brand: 'S', datas: [{img:'../../images/4.png',text:'ssome'},
                           {img:'../../images/5.png',text:'sentries'},
                           {img:'../../images/6.png',text:'sare here'}]},
      {brand: 'T', datas: [{img:'../../images/7.png',text:'tsome'},
                           {img:'../../images/8.png',text:'tentries'},
                           {img:'../../images/9.png',text:'tare here'}]},
      {brand: 'U', datas: [{img:'../../images/10.png',text:'usome'},
                           {img:'../../images/11.png',text:'uentries'},
                           {img:'../../images/12.png',text:'uare here'}]},
      {brand: 'V', datas: [{img:'../../images/1.png',text:'vsome'},
                           {img:'../../images/2.png',text:'ventries'},
                           {img:'../../images/3.png',text:'vare here'}]},
      {brand: 'W', datas: [{img:'../../images/4.png',text:'wsome'},
                           {img:'../../images/5.png',text:'wentries'},
                           {img:'../../images/6.png',text:'ware here'}]},
      {brand: 'X', datas: [{img:'../../images/7.png',text:'xsome'},
                           {img:'../../images/8.png',text:'xentries'},
                           {img:'../../images/9.png',text:'xare here'}]},
      {brand: 'Y', datas: [{img:'../../images/10.png',text:'ysome'},
                           {img:'../../images/11.png',text:'yentries'},
                           {img:'../../images/12.png',text:'yare here'}]},
      {brand: 'Z', datas: [{img:'../../images/1.png',text:'zsome'},
                           {img:'../../images/2.png',text:'zentries'},
                           {img:'../../images/3.png',text:'zare here'}]},
    ],
    alpha: '',
    windowHeight: ''
  },


  /*
   * 生命周期函数--监听页面加载
   */
  // imageLoad: function() {
  //   this.setData({
  //     imageWidth: wx.getSystemInfoSync().windowWidth
  //   })
  // },
  onLoad(options){
     try {
       var res = wx.getSystemInfoSync()
       this.pixelRatio = res.pixelRatio;
       // this.apHeight = 32 / this.pixelRatio;
       // this.offsetTop = 160 / this.pixelRatio;
       this.apHeight = 16;
       this.offsetTop = 80;
       this.setData({windowHeight: res.windowHeight + 'px'})
     } catch (e) {

     }
   },
   handlerBrandTap(e) {
     let {ap} = e.target.dataset;
     this.setData({alpha: ap});
   },
   handlerMove(e) {
     let {list} = this.data;
     let moveY = e.touches[0].clientY;
     let rY = moveY - this.offsetTop;
     if(rY >= 0) {
       let index = Math.ceil((rY - this.apHeight)/ this.apHeight);
       if(0 <= index < list.length) {
         let nonwAp = list[index];
         nonwAp && this.setData({alpha: nonwAp.brand});
       }
     }
   },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
