# weapp_lipstick
微信小程序之口红试色

最近微信小程序开始火起来 作为全栈的学习者 也跟风最近撸了一个😜。试问哪个小仙女的彩妆盒里没有那么几只口红呢？还在苦于为为繁多的口红牌子颜色找功课嘛，同作为深陷彩妆坑的美少女，就决定撸下了口红试色的微信小程序demo，快捷简单的找到想到的试色:lips:，下面我们就一起来看下这个小demo吧。

## 开发工具
__1.开发调试工具：__ [小程序开发者平台](https://mp.weixin.qq.com/debug/wxadoc/dev/n ) 安装好之后 初学稍微看下简易文档啦~\(≧▽≦)/~</br>
__2.开发文档：__ [小程序开发必备文档](https://www.w3cschool.cn/weixinapp/9wou1q8j.html ) 阅读文档了解页面搭建、数据渲染、导航跳转、列表跳转等。</br>

## 目录结构
    ├── app.js
    ├── app.json
    ├── app.wxss
    ├── pages
    │   ├── detail
    │   │   ├── detail.json
    │   │   ├── detail.js
    │   │   ├── detail.wxml
    │   │   └── detail.wxss
    │   ├── index
    │   │   ├── index.js
    │   │   ├── index.json
    │   │   ├── index.wxml
    │   │   └── index.wxss
    │   ├── list
    │   │   ├── list.json
    │   │   ├── list.js
    │   │   ├── list.wxml
    │   │   └── list.wxss
    │   └── log
    │       ├── log.js
    │       ├── log.json
    │       ├── log.wxml
    │       └── log.wxss
    ├── images
    │  
    └── utils
      └── util.js
 ### 页面注册 </br> __app.json__</br>
 ```javascript
     "pages"：[
     "pages/list/list", //品牌检索页
     "pages/detail/detail", //试色详情页
     "pages/index/index",
     "pages/logs/logs"
     ] 
 ```
## 效果预览
:point_right:__项目源码： [GitHub](https://mp.weixin.qq.com/debug/wxadoc/dev/n )__  求小星星鼓励（づ￣3￣）づ╭❤～</br>

![](https://github.com/CChanggg/weapp_lipstick/blob/master/lipstick/images/GIF.gif)  
## 项目功能
- [x] 带字母滑动或点击选择的列表页面
- [x] scroll-view的使用，可滚动视图区域生成
- [x] 类似tab切换效果
## 具体功能解析
### 1.带右侧字母滑动的列表界面:v: </br>
__需要实现的功能：__</br>
(1)侧nav与内容区的联动</br>
(2)内容区名字绑定相应的图片 </br>
__具体的实现过程：__</br>
#### 侧nav与内容区的联动
![](https://github.com/CChanggg/weapp_lipstick/blob/master/lipstick/images/GIF1.gif)</br></br>
右边点击不同的字母，左边转到相应字母的内容 这里的实现，用到了scroll-view的API 给每个左边的内容对象渲染时附上id
 ```javascript
<scroll-view scroll-y style="height: {{windowHeight}}" scroll-into-view="{{alpha}}">
 ```
 ```javascript
<view wx:for="{{list}}" wx:key="unique" id="{{item.brand}}" class="section-item">
 ```
__具体实现的JS逻辑部分__
 ```javascript
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
  ```
#### 内容区域图片与文字绑定
  HTML结构</br>
  ```javascript
    <view class="brand-list">
      <view wx:for="{{list}}" wx:key="unique" id="{{item.brand}}" class="section-item">
        <view class="section-item-header">
          {{item.brand}}
        </view>
        <view wx:for="{{item.datas}}" wx:key="unique" wx:for-item="cell" wx:for-index="cellIndex" class="section-item-cells">
          <navigator url="../detail/detail" redirect="false" hover-class="navigator-hover">
            <view class="section-item-cell {{cellIndex != (item.datas.length-1) ? 'border-bottom':''}}">
              <image class="brand_pic" src="{{cell.img}}"/>
              <text class="brand_p">{{cell.text}}</text>
            </view>
          </navigator>
        </view>
      </view>
    </view>
  ```
  js数组部分</br>
   ```javascript
     {brand: 'Top',datas: [{img:'../../images/1.png', text: 'Armani'},
                            {img:'../../images/2.png',text:'Anastashia Bevely Hills'}]},
   ```
### 类似tab切换效果:v:
   ![](https://github.com/CChanggg/weapp_lipstick/blob/master/lipstick/images/GIF.png)</br></br>
   设置四个按钮 每个按钮赋予不同的点击事件</br>
   ```javascript
     <view class="box">
      <button type="default" bindtap="btn_change1" class="button1" style="color: #818181;">小胖丁</button>
      <button type="default" bindtap="btn_change2" class="button2" style="color: #818181;">红管唇釉</button>
      <button type="default" bindtap="btn_change3" class="button3" style="color: #818181;">红管CC唇膏</button>
      <button type="default" bindtap="btn_change4" class="button4" style="color: #818181;">黑管唇釉</button>
    </view>
   ```
   将数据写入点击事件中</br>
   （因为要大量数据，且是重复工作，没有意义，就没有写入mock里面 有兴趣的小伙伴可以尝试:kissing_heart:）</br>
 ```javascript
     btn_change1: function() {
     this.setData({
      name: "Armarni 阿玛尼",
      image: "../../images/4_.png",
      price: "340",
      label: "阿玛尼小胖丁染唇液（LIP MAGNET）是阿玛尼2016年全新推出的产品，以其更加显色、更加轻薄和持久的特点红遍时尚圈。",
      hot: "#504、#506",
      pic: "../../images/xpd_detail.png"
    })
  },
 ```
:grey_exclamation: :grey_exclamation: :grey_exclamation: __敲黑板的小细节__（自己走过的坑:expressionless:）</br>
之前将数据都放在一个数组里 点击进入第二个界面时 不点击按钮 就没有内容显示</br>
应该把进入第二页显示的单独放入一个数组 点击传出的数据放在另外一个数组 这样互不影响</br>
```javascript
     data: {
        comment: [],
        details: []
           },
```
## 总结
__1.__ 初学要多看文档，书写格式和api的使用,不要怕写错，多上手撸撸就明白了。</br>
__2.__ 因为不太熟悉踩了一些坑</br>
(1)就是上面提到的，数据绑定问题，第二个页面要切换数据，要分两个数组写。</br>
(2)由第一个页面中传递过来的数据不在是一个数组，而是一个对象，得到其id就得到其内容。</br>
## 其他
__欢迎交流指点__ :point_down:</br>
:love_letter:373893135@qq.com
