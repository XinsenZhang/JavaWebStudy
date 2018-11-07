//封装一个代替document.getElementById()的方法
function byId(id) {
    return typeof(id) === "string"?document.getElementById(id):id;
}

//全局变量
var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    dots = byId("dots").getElementsByTagName("span"),
    len = pics.length;

    console.log(dots);

function slideImage() {
    var main = byId("main");
    //划过清除定时器，离开继续
    main.onmouseover = function () {
        //清除定时器
        if(timer){clearInterval(timer)}
    }
    main.onmouseout = function () {
        //继续定时器
        timer = setInterval(function () {
            //做一些事情
            index ++;
            if(index >= len){
                index = 0;
            }
            //切换图片
            changeImage();
        },3000);
    }
    main.onmouseout();

    //遍历所有点击，且绑定点击事件，点击圆点切换图片
    for(var d = 0 ; d < len ; d++){
        dots[d].setAttribute("index",d);
        dots[d].onclick = function () {
            index = this.getAttribute("index");
            changeImage();
        };
    }
}

function changeImage(){
    //隐藏所有图片
    for(var i = 0 ; i < len ; i++){
        pics[i].style.display = "none";
        dots[i].className = "";

    }
    //显示index的图片，并且使得圆点激活
    pics[index].style.display = "block";
    dots[index].className =  "active";
}



slideImage();
