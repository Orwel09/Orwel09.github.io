/**
 * Created by wangyongqiang on 17/10/12.
 */
/*
 *
 * <app-news-center></app-news-center>
 *
 */

(function(){
    //页面初始化
    window.onload=function(){
    };

    function onEnter(){
        var template = '<!--新闻模块-->\
            <div style="margin-left: 105px;margin-top:20px;">\
                <!--产品介绍-->\
                <div id="product" class="inline" style="width: 400px;vertical-align: top">\
                <div class="title" style="font-size: 24px;color: #3C5F95;">\
                    IEITEK公司主要产品\
                </div>\
                <div style="font-size:16px;margin-top: 32px;">\
                    UV测量仪器，在线式UV测量系统，光源均匀化检测系统，光谱分析测试仪，透过率检测仪，膜厚度检测仪。\
                </div>\
                <div style="margin-top: 25px;"><a href="product.html">点击查看全文</a></div>\
                <a class="blueButton">下载产品手册</a>\
                </div>\
                    <!--应用行业-->\
                <div id="industry" class="inline" style="width: 400px;margin-left: 24px;vertical-align: top">\
                <div class="title" style="font-size: 24px;color: #3C5F95;">\
                    团队与能力\
                </div>\
                <div style="font-size:16px;margin-top: 32px;">\
                    拥有贰十余年的核心技术研发与科技人才培养经验<br>\
                    拥有一支光机电一体化综合系统开发团队<br>\
                    拥有十余年的工业制造经验<br>\
                    有能力为客户量身定制OEM/ODM项目<br>\
                </div>\
                <div style="margin-top: 25px;"><a href="">点击查看全文</a></div>\
                    <a class="blueButton">了解更多>></a>\
                </div>\
                    <!--应用行业-->\
                <div id="aboutUs" class="inline" style="width: 360px;margin-left: 24px;vertical-align: top">\
                    <div class="title" style="font-size: 24px;color: #3C5F95;">\
                        关于IEITEK\
                    </div>\
                    <div style="font-size:16px;margin-top: 32px;">\
                        艾宜尔（苏州）测量技术有限公司（IEITEK) 专注于光学测量及光电子信息处理技术的发展，提供从产品设计、工艺制造、技术支持到售后维护等全方位的解决方案。公司研发以中科院长春光学精密机械与物理研究所光电测控中心和苏州科技大学光电技术研究所为依托，技术团队主要来自高校研究所和工业领域中具备创新、制造经验的专家，先后研制生产了数十种光学测量仪器，在国内处于领先水平，填补国内光电测量仪器领域的空白，产品远销美国、德国、韩国、日本等市场。<br/><br/>\
                        ——联系方式——<br/>\
                        电话：+86-21-3765 7189<br/>\
                        传真：+86-21-3765 7189<br/>\
                        E-mail: iei@ieitek.com<br/>\
                    </div>\
                    <a class="blueButton">关于我们>></a>\
                </div>\
            </div>';

        var newsCenterObj = Vue.extend({
            template: template,
            methods:{
            }
        });

        Vue.component('app-news-center',newsCenterObj);
    }

    onEnter();
})();
