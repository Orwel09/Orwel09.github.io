/**
 * Created by wangyongqiang on 17/4/6.
 */
(function(){
    //页面初始化
    window.onload = function(){

    };
    function paging(){
        var application = new Vue({
            el:"#technology",
            data:{
                list:[
                    {
                        name:"印刷行业",
                        image:"yingshua.jpg",
                        text:"LED固化技术具有低温，高效，节能的特点，在经济效益、系统功能和环境保护等方面具有显著的优势，使之迅速取代传统的汞灯UV技术。UV LED 固化技术是数字化喷墨、网屏、柔版印刷以及其他印刷工艺中油墨 UV固化的理想之选。数字化喷墨印刷常用于直邮、标签、横幅、海报、标牌、编码和标识等材料的 UV 印刷；网屏印刷用在制造DVD/CD、衬衫、帽子、玻璃、传单、海报、木材等网屏印刷材料的 UV 印刷；柔版印刷可用于塑料、纸张或纸板材料在轮转印刷机上的 UV 印刷。"
                    },
                    {
                        name:"医疗行业",
                        image:"yiliao.jpg",
                        text:"UVLED光源系统能迅速固化光引发粘结剂,因此可避免使用挥发性粘结剂，非常适合医疗领域的应用。使用紫外固化胶水提供有很多优势, 比如节能,缩短固化时间, 提升生产率, 容易自动化。 目前UV LED固化已经应用于麻醉面罩，注射器，导液管 ，静脉输液管，血管植入配件，内窥镜，动脉定位，管状排水装置，气管管道，血液氧合器，助听器，探测,监控,以及图像器械及生物芯片等的应用。"
                    },
                    {
                        name:"工业组装",
                        image:"zuzhuang.jpg",
                        text:"UV LED 技术可用于各种工业组装工艺过程，从小型的光学镜头到大型的汽车飞机制造业，其灵活性与可靠性均可获得令人满意的效果。晶固（上海）智能系统有限公司产品具有使用寿命长，即时开关性及平稳UV输出性能等优势，可普遍应用于各种工艺过程。晶固（上海）智能系统有限公司可根据客户的具体工艺过程帮助您设计特定的UV LED固化设备，为您提供最满意的高生产率，廉价生产过程的解决方案。"
                    },
                    {
                        name:"工业应用",
                        image:"gongye.jpg",
                        text:"UVLED可用于工业制造，设计与维修应用。工业流程通常要求产品在恶劣甚至时苛刻的制造，设计和维修的环境中工作。 UV LED 固化灯使用固态半导体技术，其优点在于它允许即时开关及 UV 输出能量的控制，方便于客户在苛刻的环境条件下成功地实现固化。UV LED 工业组装应用案例可见于风电叶片的修复与零部件生产和精加工。"
                    },
                    {
                        name:"工业应用",
                        image:"gongye.jpg",
                        text:"UVLED可用于工业制造，设计与维修应用。工业流程通常要求产品在恶劣甚至时苛刻的制造，设计和维修的环境中工作。 UV LED 固化灯使用固态半导体技术，其优点在于它允许即时开关及 UV 输出能量的控制，方便于客户在苛刻的环境条件下成功地实现固化。UV LED 工业组装应用案例可见于风电叶片的修复与零部件生产和精加工。"
                    }
                ]
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