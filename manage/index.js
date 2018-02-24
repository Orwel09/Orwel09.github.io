(function(){
    //页面初始化
    window.onload = function(){

    };

    function onEnter() {
        //页面事件
        bindLabelEventInit ();
        //页面初始化
        paging ();
    }

    function paging(){
        var home = new Vue({
            el:"#home",
            data:{},
            methods:{
            }
        })
    }

    //长期存在事件
    function bindLabelEventInit(){
    }
    onEnter();
})();
//另一种页面初始化，开启需关闭第一种
//$(document).ready(function(){
//
//});