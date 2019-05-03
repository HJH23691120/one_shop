//购物车
$('.car_t').hover(function(){//鼠标移入移出效果展示
    $('.last').show().hover(function(){
        $(this).show();
    },function(){
        $(this).hide()
    });
},function(){
    $('.last').hide();
});
var shopcar={//声明空的对象
    sumNum:0,
    sumPrice:0,
    shopList:[]
}
var $lis = $('.shop>ul>li');
$lis.each(function (index, item) {//循环数组，得到初始的单价和数量。
     var n = $(item).find('.J_inputCount').val() - 0;  
    var p = $(item).find('.J_smallTotalPrice').text().slice(1)-0;  
    shopcar.shopList.push({ num: n, pirce: p, tprice: n * p });   
})
$('.J_btnAddCount').on('click',function(){
    // 点击按钮增加数量，同时计算单价和总价
    var c_index=$(this).parents('li').index();  
    //调用后直接赋值；以防止出现数量价格不同步的问题
    $(this).parent('div').next().text('￥'+shopcar.shopList[c_index].tprice);
    var newNum=++shopcar.shopList[c_index].num;  
    change(c_index,newNum);
})
$('.J_btnDelCount').on('click',function(){
      // 点击按钮减少数量，同时计算单价和总价
    var c_index=$(this).parents('li').index(); 
    //调用后直接赋值；以防止出现数量价格不同步的问题
    $(this).parent('div').next().text('￥'+shopcar.shopList[c_index].tprice);
    var newnum = shopcar.shopList[c_index].num;
             --newnum;
             change(c_index, newnum);
             if (newnum <= 0) {
                //  数量为零的时候删除购物车，该函数只能在这个位置，不然会出现删除完毕后出现underfind问题
                var c_index = $(this).parents('li').index();
                $(this).parents('li').remove();
                shopcar.shopList.splice(c_index,1);            
               change(-1);
               if(shopcar.shopList.length===0){
                $('.shop').hide();
                $('.noshop').show();
            }}})
function change(index, num) {
    // 改变每次的单价、以及数量。所有商品总价
             if(index>-1){    
             shopcar.shopList[index].num = num;
             shopcar.shopList[index].tprice = shopcar.shopList[index].pirce * num;//每个商品的总价；             
             }    
             shopcar.sum_num = 0;
             shopcar.sum_price = 0;
             $.each(shopcar.shopList, function (index, item) {
                 shopcar.sum_num += item.num;
                 shopcar.sum_price += item.tprice;
             })
             html(index);
            }
     function html(index) {
        //  把内容输出到页面上去
         if(index>-1){
         $lis.eq(index).find('.J_smallTotalPrice').text(Math.round(shopcar.shopList[index].tprice));
         $lis.eq(index).find('.J_inputCount').val(shopcar.shopList[index].num);
         }
        $('.J_totalCount').text('('+shopcar.sum_num+')');
        $('.J_totalPrice').text('￥'+shopcar.sum_price);       
     }
     $('.J_btnDelete').on('click',function(){
        //  删除页面内容，同时删除数据库的内容
                 var c_index = $(this).parents('li').index();
                 $(this).parents('li').remove();
                 shopcar.shopList.splice(c_index,1);            
                change(-1);
                  if(shopcar.shopList.length===0){
                     $('.shop').hide();
                     $('.noshop').show();
                 }
                 }
             )
//左侧导航
$('.leftNav>ul>li').hover(function(){
    $(this).find('.zj').show().hover(function(){
        $(this).show();
    },function(){
        $(this).hide()
    })
},function(){
    $(this).find('.zj').hide()
})
//轮播图
function changeImg(){
    var index=0;
    var stop=false;
    var $img=$('.slide_box').children('li')//得到图片的数组
    var $num=$('.num').children('li')//得到数字数组
    $num.hover(function(){
        stop=true;
        index=$num.index($(this));//鼠标移入的时候得到当前的下标.
        $img.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        // 当鼠标移入大时候，当前下表一样的图片停止动画效果，显示出来，其他图片隐藏
        $(this).addClass("active").stop(true,true).siblings().removeClass("active");
        //当鼠标移入的时候，当前数字添加样式，其他数字移除样式，并且停止动画；
    },function(){
        stop=false;
    });
    setInterval(function(){
        //当鼠标移入的时候停止计时器，因为stop初始值位false所以只有当鼠标移入的时候才会阻止计时器执行
        if(stop) return;
        index++;
        if(index>=$img.length){index=0;}
        $img.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
        $num.eq(index).addClass("active").stop(true,true).siblings().removeClass("active");
    },3000)
}
changeImg();


//轮播广告
$(function(){
    function move_down(){
        var marginTop=0;
        var stop=false;
        var interval=setInterval(function(){
            //当鼠标移入的时候停止计时器，因为stop初始值位false所以只有当鼠标移入的时候才会阻止计时器执行
            if(stop) return;
            $('#express').children('li').first().animate({
                'margin-top':marginTop--},
                0, 
                function(){
                    var first=$(this);
                    if(!first.is(':animated')){
                        if((-marginTop)>first.height()){
                            
                            first.css({'margin-top':0}).appendTo($('#express'));
                            marginTop=0;
                        }
                    }
                });
        },50);
        $('#express').hover(function(){
            stop=true;
        },function(){
            stop=false;
        });
    }
    move_down();
})




