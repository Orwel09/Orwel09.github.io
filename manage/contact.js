/**
 * Created by wangyongqiang on 17/4/6.
 */
(function(){
    //页面初始化
    window.onload = function(){

    };
    function paging(){
        $("#interesting").val('');
        var application = new Vue({
            el:"#contact",
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
        var mail = "";name = "";country = "";company = "";phone = "";city = "";interesting="";information = {};
        $("#submit").on("click",function(){
            mail = $("#mail").val();
            name = $("#name").val();
            country = $("#country").val();
            company = $("#company").val();
            phone = $("#phone").val();
            city = $("#city").val();
            interesting = $("#interesting").val();
            if(mail==""||mail.indexOf("@")==-1){
                alert("请输入正确的电子邮箱");
                return;
            }
            if(name==""){
                alert("请输入姓名");
                return;
            }
            if(country==""){
                alert("请输入国家");
                return;
            }
            if(company==""){
                alert("请输入您的公司名");
                return;
            }
            information = {
                mail:mail,
                name:name,
                country:country,
                company:company,
                phone:phone,
                city:city,
                interesting:interesting
            };
            alert(JSON.stringify(information));
        })
    }
    function onEnter () {
        bindLabelEventInit ();
        paging ();
    }
    onEnter();
})();