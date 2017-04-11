/**
 * Created by wangyongqiang on 17/4/11.
 */

//开发环境地址
//var SERVER_NEW_BASE_URL = "http://10.100.28.2/mbfun_manager_server_new/index.php?callback=?";
//var SERVER_NEW_URL = "http://10.100.28.2/mbfun_manager_server_new/index.php?";
//var MANAGER_SERVER_NEW = "http://10.100.28.2/mbfun_server_new/index.php?";
//var INFORMATION_TO_JUMP="http://stylistpay.51mb.com/wx-sp/special-insp.html?p=";
//var QUESTION_NAIRE_TO_JUMP="http://10.100.28.2/";

//外网
//var SERVER_NEW_BASE_URL = "http://admin.funwear.com/mbfun_manager_server/index.php?callback=?";
//var SERVER_NEW_URL = "http://admin.funwear.com/mbfun_manager_server/index.php?";
//var MANAGER_SERVER_NEW = "http://api.funwear.com/mbfun_server/index.php?";
//var INFORMATION_TO_JUMP="http://m.funwear.com/wx-sp/special-insp.html?p=";
//var QUESTION_NAIRE_TO_JUMP="http://api.funwear.com/";

//本地环境
var SERVER_NEW_BASE_URL = "http://localhost:8888/Orwel09/index.php?callback=?";
var SERVER_NEW_URL = "http://localhost:8888/Orwel09/index.php?";
//var QUESTION_NAIRE_TO_JUMP="http://localhost:8888/";


var CDN_BASE_URL = "http://7xjir4.com2.z0.glb.qiniucdn.com/";
var AJAX_STATUS_SUCCESS = 1; //AJAX返回数据正确
//
var COOKIE_PREFIX = 'YOUFAN_MANAGE_'; //cookie的工程前缀，避免不同项目的cookie重复
var COOKIE_USER_INFO = COOKIE_PREFIX + 'COOKIE_USER_INFO';  //用户
var COOKIE_MENU_LIST = COOKIE_PREFIX + 'COOKIE_MENU_LIST';  //左侧栏原始数据
var COOKIE_MENU_ID = COOKIE_PREFIX + 'COOKIE_MENU_ID';      //左侧栏选中ID
var COOKIE_MENU_LIST_TRANSIT = COOKIE_PREFIX + 'COOKIE_MENU_LIST_TRANSIT';  //左侧栏