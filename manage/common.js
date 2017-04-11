/**
 * Created by wangyongqiang on 17/4/11.
 */

//get请求
function actionCallForGet ( actionParam , onSuccess , onFail , target ) {
    if ( ! actionParam ) {
        actionParam = {};
    }

    if ( actionParam.loginType == undefined ) {
        var user = getValueFromLocation ( COOKIE_USER_INFO , false );
        actionParam.login_user_id = user.user_info.id;
        actionParam.session_id = user.session_id;
        actionParam.new_version = 'new';
    }

    //获取sessionkey
    $.get ( SERVER_NEW_URL , actionParam ).done ( function ( json ) {
        if ( json.status == AJAX_STATUS_SUCCESS ) {
            onSuccess.apply ( target , [ json.data ] );
        } else {
            if ( onFail ) {
                onFail.apply ( target , [ json ] );
            } else {
                commonErrorHandler ( json );
            }
        }
    } ).fail ( function ( jqxhr , textStatus , error ) {
        alert ( 'URL请求处理中:' + textStatus );
    } );
}

//判断是非支持html5
function getValueFromLocation ( key , isStrType ) {
    var str;
    if ( window.applicationCache ) {
        str = localStorage.getItem ( key );
    } else {
        str = $.cookie ( key );
    }

    if ( isStrType ) {
        return str;
    } else {
        if ( ! str ) {
            return {};
        } else {
            return JSON.parse ( str );
        }

    }
}