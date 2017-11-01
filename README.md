# v2er

A simple [v2ex](https://v2ex.com) client app, use React Native.

使用 V2EX 的 api 进行的一个关于 React-native 的试验。
旨在试验各个功能是否都可以用 React-native 来实现。


--- UPDATE 2017-11-1
    - 更新 react-native 到最新版本

        ```
            "react": "16.0.0-beta.5",
            "react-native": "^0.49.5",
        ```
    - 增加 `react-native-vector-icons` ，在 `npm install` 后需要运行 `react-native link`


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

