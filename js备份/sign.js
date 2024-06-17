//获取用户名;
let useA = localStorage.getItem('username');
console.log(useA);
//封装注册方法
function login() {
    //获取事件的value 
    let username = document.querySelector('#use').value;
    let password = document.querySelector('#pwd').value;
    //这里调用存入本地的数据
    Date(username, password);

}
//将数据存入本地
function Date(username, password) {
    localStorage.setItem(username, JSON.stringify({
        username,
        password,
        tag: false
    }))
    if (username === '' && password === '') {
        alert('请先注册');
    }
    //判断两次密码是否一样
    else if (pwd.value !=pwd2.value) {
        //不一样的话重新输入
        alert('两次输入密码不一样 请重新输入');
    } else {
        //一样则提示注册成功
        alert('注册成功 ! ! !')
    }

}