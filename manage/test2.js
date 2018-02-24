/**
 * Created by wangyongqiang on 17/11/9.
 */
(function(){
    //页面初始化
    window.onload = function(){

    };

    function onEnter(){
        var template= '<div class="container">\
            <header>\
            <slot name="header"></slot>\
                </header>\
                <main>\
                <slot></slot>\
                </main>\
                <footer>\
                <slot name="footer"></slot>\
                </footer>\
        </div>';
        var appLayout = Vue.extend({
            template: template,
            methods: {
            }
        });
        Vue.component('app-layout', appLayout);
    }
    onEnter();
})();