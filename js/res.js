 //表单验证
    var form=document.getElementById('registerForm')
    // 得到form对象的值
    form.addEventListener('submit',function(){//添加监听事件        
        var in1=document.getElementsByTagName('input')[0].value;
        var in2=document.getElementsByTagName('input')[2].value;
        var in3=document.getElementsByTagName('input')[3].value;     
        var reg1=/^1[3578]\d{9}$/;//验证手机号
        var reg2=/^\w{6,10}$/;//验证密码
        if(!reg1.test(in1)){
            $('.tableItem').eq(0).append($('<span>用户手机格式不对</span>'));
        }else if(!reg2.test(in2)){
            $('.tableItem').eq(2).append($('<span>用户密码格式不对</span>'));
        }else if(in2!==in3){
            $('.tableItem').eq(3).append($('<span>两次输入的密码不同</span>'));
        }else{
            alert('注册成功，请妥善保管你的用户名和密码');
        }
    })  
// 倒计时效果
var min=60;
var timer=null;
$('.tableText').on('click',function(){
    timer=setInterval(function(){
        console.log(1);
        min--;
        if (min>0){
            $('.tableText').text(min+'秒后重新发送');//在节点输出内容
            $('.tableText').disabled=true;
        } else{
            clearInterval(timer);//清除定时器
            $('.tableText').text('请重新发送验证码');
            $('.tableText').disabled=false;
        }
    
    },1000)

      
})
