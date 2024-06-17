
 // var flag1=false;
    // var flag2=false;
//布尔型变量

function $(id){
    return document.getElementById(id);
}
//检查账号
function checkId(){
    //获取输入的账号
    var userName =$("use").value;

//判断输入的内容是否为空
if(userName == "" || userName ==null){
    $("error_name").innerText ="*The username cannot be empty!";
    return;
}
//限制长度为2~20
if(userName.length <2 || userName.length>20){
    $("error_name").innerText ="*The value contains 2 to 20 characters.";
    return;
}
//正则表达式
var userMatch = /^[a-z0-9_u4e00-u9fa5]+[^_]$/g;
if(!userName.match(userMatch)){
  $("error_name").innerText ="*The value can only be lowercase Chinese characters, digits, and underscores (_). The value cannot be all digits, and the underscore cannot be at the end of the value";
  return;  
}
flag1=true;
}


//检查密码
function checkPwd(){
    var userPwd =$("pwd").value;

if(userPwd == "" || userPwd ==null){
   $("error_pwsd").innerText = "*enter your password!"
   return;
}
//限制密码长度为6~30位
if(userPwd.length <6 || userPwd.length>30){
    $("error_pwsd").innerText ="*The value ranges from 6 to 30 characters";
    return;
}
flag2=true;
}

//验证登陆
function login(){
if(flag1 && flag2){
    //当两者同时满足需求才能验证

    var userName = $("use").value;
    var userPwd = $("pwd").value;

    //判断对错
    if(userName == "Tenderness" && userPwd == "WyX233"){
        //认证成功即可跳转
        alert('login successfully');
        window.location.href="./myself.html";
    } else {
    alert('The user name or password is incorrect')}
}
}
