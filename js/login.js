$('.tableBtn').on('click',function(){
  
    // pattern=""/
    var user=$('.userHead').siblings().val();
    console.log(user);
    var pwd=$('.userLock').siblings().val();
    console.log(pwd)
    var reg1=/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/;//验证用户名
    var reg2=/^\w{6,10}$/;
    if(!reg1.test(user)){
    alert('用户名格式不对');
    }else if(reg2.test(pwd)){
        alert("登陆成功")
    }else{
        alert('密码格式不对哦');
    }
})