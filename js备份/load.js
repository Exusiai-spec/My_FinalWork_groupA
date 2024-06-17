let use = document.getElementById('use');
let pwd = document.getElementById('pwd');
let cbx = document.getElementById('cbx');
function login() {
    //登录
    //取出本地的用户的值
    let dateUse = localStorage.getItem(use.value);
    console.log(dateUse)
    let dateObj = JSON.parse(dateUse);//将取出的值转化为对象
    console.log(dateObj);

    if (use.value == dateObj.username && pwd.value == dateObj.password) {
        alert('登陆成功');
        dateObj.tag = cbx.checked;
        localStorage.setItem(use.value, JSON.stringify(dateObj));//再将取出的值转化为字符串类型
        location.href ='./myself.html';//登录成功则跳转

    } else {
        alert('用户名或者密码错误')
    }
}
use.onblur = function () {//用户失去焦点事件s
    //取出用户的值
    let res = localStorage.getItem(use.value);
    //将用户值转化为对象
    res = JSON.parse(res);
    if (res != null && res.tag) {//本地是否有该账号
        cbx.checked = true;
        pwd.value = res.password;
    }
}