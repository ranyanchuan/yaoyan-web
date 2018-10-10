

//  项目结构

react-demo
       ----node-modules (该项目是基于node 环境下运行，您必须确保你的电脑安装了node环境)
       ----public (这里边主要放一些静态资源，例如图片)
       ----src
          -----components (将前端公共的组件，剥离出来，这样可以使前端模块化)
          -----models (用于表示数据的状态，我的理解，就是暂时存放数据的地方)
          -----routes (路由层，主要作用，将组件组合成一个页面，)
          -----services (用于向后端发送请求，获取或者添加数据)
          -----utils (一些工具类和方法)

// 如何是运行本项目

    1。 进入 react-demo (cd react-demo). 运行 npm install .
    2。 npm run dev
    3。localhost:8000


毕设计划: 前端(先用假的json数据)---> 后端

抓数据：
    1.语言使用Python3。
    2.编辑器使用PyCharm(https://www.jetbrains.com/zh/pycharm/specials/pycharm/pycharm.html)。
    3.第三方库使用 BeautifulSoup就够了（https://www.crummy.com/software/BeautifulSoup/bs4/doc/）

前端：
    1.框架：React + Dva  + Antd
    (http://www.runoob.com/react/react-tutorial.html)
    (https://www.jianshu.com/p/69f13e9123d9)
    (https://ant.design/docs/react/introduce-cn)
    2.编辑器使用 Webstorm

    或者
    1.框架：angularjs +bootstrap
     (https://angular.io/features)
     (https://getbootstrap.com/)

    2.编辑器使用 Webstorm

后端：
   1.Java (Servlet + Dao+DaoImpl+Javabean+Service)
   2.编辑器 myeclipse

   或者
   1.Python +Django
   2.编辑器使用 PyCharm
数据库：
   Mysql 5.5


另外需要掌握：javascript,html5,css3,json,ajax,es6,java,mysql这些知识点，不会自己百度一下




immutable.js之于react的好处
众所周知，react性能优化的核心在于处理shouldComponentUpdate方法来避免不必要的渲染。
虽然react提供了PureComponent，但它实质只是浅比较，无法很好地处理对象的比较，所以还是不能解决重复渲染的问题。
这个时候，immutable.js应运而生，它可以完美地解决这个问题，极大地提高react应用的性能。


immutable + react   demo
https://segmentfault.com/a/1190000008991820


自动头像生成

https://baijiahao.baidu.com/s?id=1593435750350049469&wfr=spider&for=pc

http://www.gravatar.com/avatar/5b5815d4cb01893e11a6f3d9?s=90&d=identicon





