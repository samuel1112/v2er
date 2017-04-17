# v2er

A simple v2ex client app, use React Native

使用 V2EX 的 api 进行的一个关于 React-native 的试验。
旨在试验各个功能是否都可以用 React-native 来实现。

现在实现的功能有：

--- 2015-03-29

  - 获取最近主题列表。
  - 获取主题的内容以及相应的评论。
   
--- 2015-03-31

  - 增加了 Tabbar
  - 增加了所有节点的显示
  
--- 2015-04-01

  - 修正了一些样式上的问题
  - 完善了节点的显示
  - 增加了对于网络状态的判断，如果为 cell 的时候不载入列表的图片
  
  

## TODO

1. 增加断网提醒
2. 增加节点的选择，显示相应的主题（这里打算使用 navigator 来模拟导航）
3. 增加将 html 转化为 React native code 的函数 （雏形在 Util 中）

##### BSD License
