/**
 * Created by wangyongqiang on 17/9/22.
 */
/*
 * <app-slide-box></app-slide-box>
 *
 * */
(function(){
    //页面初始化
    window.onload = function(){

    };
    function onEnter(){
        var template = '<div id="myCarousel" class="carousel slide marTop10 marBottom10">\
            <!-- 轮播（Carousel）指标 -->\
            <ol class="carousel-indicators">\
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\
                <li data-target="#myCarousel" data-slide-to="1"></li>\
                <li data-target="#myCarousel" data-slide-to="2"></li>\
            </ol>\
                <!-- 轮播（Carousel）项目 -->\
            <div class="carousel-inner">\
            <div class="item active">\
                <img src="http://www.iuvot.com/member/uploadfile/201610/11ddd30dc3.jpg" alt="First slide">\
            </div>\
            <div class="item">\
                <img src="http://www.iuvot.com/member/uploadfile/201606/b8c3419519.jpg" alt="Second slide">\
            </div>\
            <div class="item">\
                <img src="http://www.iuvot.com/member/uploadfile/201606/e78e484fef.jpg" alt="Third slide">\
            </div>\
            </div>\
                <!-- 轮播（Carousel）导航 -->\
            <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>\
            <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>\
        </div>';

        var slideBoxObj = Vue.extend({
            template: template,
            methods: {
                showMenu:function(){
                    var e = event.target;
                    if($(e).next().css("display")=='none'){
                        $(".secondMenu").css("display","none");
                        $(e).next().css("display","block");
                    }else{
                        $(".secondMenu").css("display","none");
                        $(e).next().css("display","none");
                    }
                }
            }

        });

        Vue.component('app-slide-box', slideBoxObj);
    }

    onEnter();
})();