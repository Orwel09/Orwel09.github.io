/**
 * Created by wangyongqiang on 17/9/22.
 */
/*
 * <app-nav></app-nav>
 *
 * */
(function(){
    //页面初始化
    window.onload = function(){

    };
    function onEnter(){
        var template = '<div class="top" style="margin-top: 30px;">\
            <a href="index.html"> \
                <img src="media/image/IEITEK.png" class="top-inline pointer" style="margin-left:25px;width:165px;height: 50px;">\
            </a> \
            <div class="top-inline" style="margin-left: 20px;">\
                <div style="border: 2px solid#3C5F95;width: 400px;"></div>\
                <ul id="menu" class="mar0" style="margin-top: 10px;">\
                    <li>\
                        <div class="firstMenu">\
                            <a class="text" @click.stop="showMenu()">产品中心</a>\
                            <div class="secondMenu">\
                                <a class="secondMenuText" href="product.html">Ulticure</a>\
                                <a class="secondMenuText" href="product.html">Procure</a>\
                                <a class="secondMenuText" href="product.html">Ekocure</a>\
                            </div>\
                        </div>\
                    </li>\
                    <li>\
                        <div class="firstMenu">\
                            <a class="text" @click.stop="showMenu()">技术简介</a>\
                            <div class="secondMenu">\
                                <a class="secondMenuText" href="technology.html">LED封装&nbsp;</a>\
                                <a class="secondMenuText" href="technology.html">智能控制</a>\
                                <a class="secondMenuText" href="technology.html">散热技术</a>\
                                <a class="secondMenuText" href="technology.html">光学技术</a>\
                                <a class="secondMenuText bottom7" href="technology.html">制程管理</a>\
                            </div>\
                        </div>\
                    </li>\
                    <li>\
                        <div class="firstMenu">\
                            <a class="text" @click.stop="showMenu()">应用行业</a>\
                            <div class="secondMenu">\
                                <a class="secondMenuText" href="application.html">柔版印刷</a>\
                                <a class="secondMenuText" href="application.html">标签印刷</a>\
                                <a class="secondMenuText" href="application.html">喷墨印刷</a>\
                                <a class="secondMenuText bottom7" href="application.html">数码印刷</a>\
                            </div>\
                        </div>\
                    </li>\
                    <li>\
                        <div class="firstMenu">\
                            <a class="text" @click.stop="showMenu()">关于我们</a>\
                            <div class="secondMenu">\
                                <a class="secondMenuText" href="company.html">公司概况</a>\
                                <a class="secondMenuText" href="company.html">发展历程</a>\
                                <a class="secondMenuText" href="business-activity.html">企业活动</a>\
                                <a class="secondMenuText" href="business-activity.html">行业活动</a>\
                                <a class="secondMenuText" href="file-download.html">文件下载</a>\
                                <a class="secondMenuText bottom7" href="contact.html">联系我们</a>\
                            </div>\
                        </div>\
                    </li>\
                </ul>\
            </div>\
        </div>';

        var navObj = Vue.extend({
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

        Vue.component('app-nav', navObj);
    }
    onEnter();
})();