# note on JS
## Lecture 1 初始化JS
* JS 输出
    * window.alert()警告框
        * window.可以省略
    * document.write()写到html文档中
    * innerHTML写道html元素中
        * 先get到html元素
        * getHTMLelementbyID("one").innerHTML = "content";
    * console.log()写道浏览器的控制台中

* JS语句与注释
    * 分号
        * 语句的结尾
    * JS代码
        * var a = 1;
    * JS语句标识符
        * var，if，for等等
    * 代码块
        * 函数内容等用{}包围的东西
    * 单行注释和多行注释

* JS 数据类型
    * String
    * Number
    * Boolean
    * Array
    * Object
    * Null
    * Undefined 
    
* JS 函数
    * 函数是由事件驱动的或者当他被调用时执行的可重复使用的代码块
    * function a(参数){} 声明会前置
    * var a = function(参数){}
    * 函数中的return
 
* JS 运算符
    * 赋值运算符， =, +=, -=等
    * 算数运算符 +-*/等
    * 字符串的运算符 + 运算符
        * 相当于字符串的拼接，中间没有空格
        
* JS 逻辑运算符
    * <
    * \>
    * ==
        * 等于
        * 1 == ”1“
            * 返回的true
    * ===
        * 绝对等于(值和类型都相等)
        * 1=== ‘1’
            * 返回的是false
    * !=
        * 不等于
    * &&
<<<<<<< HEAD
    * ||
    
## Lecture2  JavaScript中条件控制语句和循环语句
* JS条件语句与switch语句
    * 条件语句:if, else if, else
    * switch语句:switch, case, break, default
* js中for循环与while循环
    * for
        * 循环代码块一定的次数
        * for循环内部的变量在循环体外仍然还能用
    * for/in
        * 循环遍历对象
    * while
        *  当指定条件为true时循环指定的代码块

*  js中的break和continue语句
    * break
        * 跳出当前循环
    * continue
        * 跳出本次循环，继续执行
        
## Lecture3 JavaScript中的DOM操作
* DOM HTML
    * 修改html内容
        * document.getElementById(id).innerHTML = "helloworld";
    * 修改html属性
        * element.getAttribute()
        * element.setAtrribute()
        * element.src
        * element.href
=======
<<<<<<< HEAD
    * ||
=======
    * ||
    



## Lecture 3 JavaScript中DOM操作
* HTML DOM
    * 修改html内容
        * document.getElementById(id).innerHTML("hello world");
    * 修改html属性
        * element.getAttribute();
        * element.setAttribute();
            * 用来添加或者修改属性
        * element.src
            * 可以用来重新定义链接
            * element.src = "url";
        * element.href
* DOM CSS
    * element.style.color = "blue";
* DOM 事件
    * 元素
    * 动作
    * 反应结果
    
    1. <h1 onclick="this.innerHTML='谢谢'">请点击该文本</h1>
        * 事件内嵌元素中
    2. Element.onclick=function(){displayDate()}
    3. Element.addEventListener("click",function(){});
    
* DOM 节点
    * document.createElement("p");
	* document.createTextNode("新增");
	* parent.appendChild(child);
	* parent.removeChild(child);

## Lecture4 Window
* 认识
    * 所有浏览器都支持window对象,它表示浏览器的窗口
    * 所有JS全局对象,函数和变量均自动成为window的成员
    * 全局变量是window对象的属性
    * 全局函数是window对象的方法
* window的方法
    * window.open()
    * window.close()
    * window.moveTo()
    * window.resizeTo()

* window.screen 
    * window.screen 对象在编写时可以不使用window这个前缀
    * screen.availWidth 
        * 可用的屏幕宽度
    * screen.availHeight
        * 可用的屏幕高度
* window Location
    * window 可以省略
    * location.hostname
        * 返回web主机的域名
    * location.pathname
        * 返回当前页面的路径和文件名
    * location.protocol
        * 返回所使用的web协议
    * location.href
        * 返回(当前页面的)整个url
* window history 
    * 可以不使用window这个前缀
    * history.back()
    * history.forward()
    * history.go()
        * history.go(0)
            * 刷新当前页面
        * history.go(-2)
            * 往前走2页
>>>>>>> workflow
>>>>>>> 3e74968859c65e51ae15abdf841897ac2628c5a6
