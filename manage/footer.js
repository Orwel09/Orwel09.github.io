/**
 * Created by wangyongqiang on 17/9/25.
 */
(function(){
    //页面初始化
    window.onload = function(){

    };
    function onEnter(){
        var template = '<div style="padding-top: 60px;">\
            <div style="width: 100%;height: 169px;background-color: #3C5F95;">\
                <div style="text-align: center;padding-top: 28px;color:#fff;">\
                    <a href="contact.html" style="font-size: 16px;color: #fff;">联系我们</a>&nbsp;&nbsp;|\
                    <a href="privacy.html" style="font-size: 16px;color: #fff;">隐私权政策</a>&nbsp;&nbsp;|\
                    <a href="" style="font-size: 16px;color: #fff;">网站布局</a>&nbsp;&nbsp;\
                </div>\
                <div style="text-align: center;margin-top: 28px;font-size: 16px;color: #fff;">\
                    IEITEK专注于光学测量及光电子信息处理技术的发展\
                </div>\
                <div style="text-align: center;margin-top: 28px;font-size: 16px;color: #fff;">\
                    CopyRight © 2017-2018 awellcure.com 沪ICP备05000000号\
                </div>\
            </div>\
        </div>';

        var footerObj = Vue.extend({
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
                },
            }
        });

        Vue.component('app-footer', footerObj);
    }
    onEnter();
})();

