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
    * ||