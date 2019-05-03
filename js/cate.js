(function(){
    var listBox=$('.cate_list')
    var isdesc=true;
    $('#sortPrice').on('click',function(e){
        var fragment=document.createDocumentFragment();
        /* 调用多次document.body.append(),每次都要刷新页面一次。效率也就大打折扣了，而使用document_createDocumentFragment()创建一个文档碎片，
    把所有的新结点附加在其上，
    然后把文档碎片的内容一次性添加到document中，
    这也就只需要一次页面刷新就可。*/
        var list=listBox.children('li').toArray()
       
        var target=$(e.target);//返回出发此事件的元素；
        isdesc=!isdesc;
      
        list.sort(function(li1,li2){
            var price1=$('.price span',li1).text().slice(1);//得到每次的价格
            var price2=$('.price span',li2).text().slice(1);
            var diff=price1-price2;//得到差价
           
            return isdesc?-diff:diff;//进行差价对比
        })
        $.map(list,function(li){//将一个数组中的元素转换到另一个数组中
            fragment.appendChild(li);//重新排序添加到list里面去
        })
        listBox.empty()
        listBox.append(list)

    })
    
}
)()