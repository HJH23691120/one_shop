(function(){
    var recommendList={
        list:[],
        count:1,
        totalSum:0
    }
    var teamList=$('.team_list');
    var check=$('.checkbox input');
    var sumIpt=$('.sum_ipt');
    var totalSum=$('.team_sum span');
    //初始化
    teamList.each(function(index,item){
        var price=$(item).find('.price>span').text().slice(1)-0;
        //得到价格
        console.log(price);
        var checked=$(item).find('.checkbox input').is(':checked');
        //得到复选框的选中状态
        console.log(checked);
        recommendList.list.push({
            price:price,
            checked:checked
        });
    });
    recommendList.count=sumIpt.val() ||1;//保证数量不为零。免得出现零推荐的报错；
    console.log( recommendList.count=sumIpt.val());
    //得到每次的总数量。
    //选中
    check.on('click',function(){
      
        var index=check.index(this);
        console.log(index);
        var checked=$(this).is(":checked");
        recommendList.list[index].checked=checked;
        render();
    })
    //数量变化
    sumIpt.on('change',function(e){
        var newCount=$(this).val();
     //数字匹配。匹配一至九的数字，0次或者多次
        if(/^[1-9]\d*$/.test(newCount)){
            recommendList.count=newCount-0;//如果匹配成功则添加到总数量里面
        }else{
            $(this).val(recommendList.count);//如果匹配不成功，则按照默认数字来写；
        }
        render();
    })
    //渲染
    function render(){
recommendList.totalSum=recommendList.list.reduce(function(previousvalue,item){
    var price=item.checked?item.price:0
    //price在这并非指代上面声明的变量价格而是一个新的变量，后面的元素运算符用于检测复选框有没有被选中。选中的话就则将价格添加到price里面。否则的话就为零
    return previousvalue+price;//返回新的总价
},0)*recommendList.count//商品数量，注意商品是论套卖的。这时只会计算三者的总价。
    totalSum.text(recommendList.totalSum);
    }
    render();
})();
//尺码颜色选择功能
(function(){
    var li1=$('#choice1 li')
    var li2=$('#choice2 li')
change(li1);
change(li2);
    function change(obj){
        obj.on('click',function(){//点击事件
            index=obj.index($(this));//得到当前li的下标
        obj.eq(index).addClass('checked').siblings().removeClass('checked');
        });
    }
})();
// 数量变化
(function(){
    var num=1;
    $('.j_nums').each(function(index,item){
        var n=$(item).find('.n_ipt').val()-0;
        console.log(n);
    })
    $('.n_btn_1').on('click',function(){
        num++;
        $('.n_ipt').val(num);
    })
    $('.n_btn_2').on('click',function(){
        num--;
        if(num<1){
            num=1;
            return false;
        }
        $('.n_ipt').val(num);
    })
})();
//分享
