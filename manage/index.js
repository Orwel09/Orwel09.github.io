(function(){
    //页面初始化
    window.onload = function(){

    };

    function onEnter () {
        bindLabelEventInit ();
        paging ();
    }

    function paging(){
        var home = new Vue({
            el:"#home",
            data:{},
            methods:{
                showMenu:function(){
                    var e = event.target;
                    if($(e).next().css("display")=='none'){
                        $(".secondMenu").css("display","none");
                        $(e).next().css("display","block");
                    }else{
                        $(".secondMenu").css("display","none");
                        $(e).next().css("display","none");
                    }
                },
            }
        })
    }

    //长期存在事件
    function bindLabelEventInit(){
        var slideBox = $(".slideBox");
        var ul = slideBox.find("ul");
        var oneWidth = slideBox.find("ul li").eq(0).width();
        var number = slideBox.find(".spanBox span");            //注意分号 和逗号的用法
        var timer = null;
        var sw = 0;
        //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
        number.on("click",function (){
            $(this).addClass("active").siblings("span").removeClass("active");
            sw=$(this).index();
            ul.animate({
                "right":oneWidth*sw    //ul标签的动画为向左移动；
            });
        });
        //左右按钮的控制效果
        $(".next").stop(true,true).click(function (){
            sw++;
            if(sw==number.length){sw=0}
            number.eq(sw).trigger("click");
        });
        $(".prev").stop(true,true).click(function (){
            sw--;
            if(sw==number.length){sw=0}
            number.eq(sw).trigger("click");
        });
        //定时器的使用，自动开始
        timer = setInterval(function (){
            sw++;
            if(sw==number.length){sw=0}
            number.eq(sw).trigger("click");
        },2000);
        //hover事件完成悬停和，左右图标的动画效果
        slideBox.hover(function(){
            $(".next,.prev").animate({
                "opacity":1,
            },200);
            clearInterval(timer);
        },function(){
            $(".next,.prev").animate({
                "opacity":0.5
            },500);
            timer = setInterval(function (){
                sw++;
                if(sw==number.length){sw=0}
                number.eq(sw).trigger("click");
            },2000);
        })
    }
    onEnter();
})();
//$(document).ready(function(){
//
//});