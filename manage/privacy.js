/**
 * Created by wangyongqiang on 17/4/6.
 */
(function(){
    //页面初始化
    window.onload = function(){

    };
    function paging(){
        var application = new Vue({
            el:"#privacy",
            data:{
            },
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
                downMenu:function(){
                    $(".secondMenu").css("display","none");
                }
            }
        })
    }
    function bindLabelEventInit(){

    }
    function onEnter () {
        bindLabelEventInit ();
        paging ();
    }
    onEnter();
})();