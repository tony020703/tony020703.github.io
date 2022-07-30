var button = document.getElementsByClassName('shop_setting')[0].getElementsByTagName('li');
var product = document.querySelectorAll('.productlist > ul> li'); 
var product_len = product.length;
var price = document.getElementsByTagName('i');
var date = document.getElementsByClassName('product_date');
var arr_price=[];
var arr_date=range(0,product_len);
var temp = 0;

function sort_arr(arr,flag,arr2){
    for(var i = 0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]*flag>arr[j+1]*flag){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                temp = product[j].innerHTML;
                product[j].innerHTML = product[j+1].innerHTML;
                product[j+1].innerHTML = temp;

                temp = arr2[j];
                arr2[j] = arr2[j+1];
                arr2[j+1] = temp;                

            }
        }
    }
    return arr;
}
function range(start,end){
    var arr = [];
    for(var i = start;i < end;i++){
      arr.push(i);
    }
    return arr;
  }

for(var i=0;i<product_len;i++){
    arr_price[i] = parseFloat(price[i].innerHTML);
}

button[0].onclick= function(){
    sort_arr(arr_date,1,arr_price);
    $(".shop_setting span").eq(0).html("商品排序");
}
button[1].onclick= function(){
    sort_arr(arr_date,1,arr_price);
    $(".shop_setting span").eq(0).html("上架時間: 由新到舊");
}
button[2].onclick= function(){
    sort_arr(arr_date,-1,arr_price);
    $(".shop_setting span").eq(0).html("上架時間: 由舊到新");
}
button[3].onclick= function(){
    sort_arr(arr_price,-1,arr_date);
    $(".shop_setting span").eq(0).html("價格: 由高至低");
}
button[4].onclick= function(){
    sort_arr(arr_price,1,arr_date);
    $(".shop_setting span").eq(0).html("價格: 由低至高");
}





$(".productlist ul li:gt(23)").hide()
var current_page=24;
var current_num=1;
var total_page= Math.ceil(product_len/current_page);
var button_page = document.getElementsByClassName('shop_setting')[1].getElementsByTagName('li');

function pagination(page, totalPage) {
    if(totalPage==1){
        return false;
    }else {
        var str='<li class="page-active">'+page+'</li>';
        for(var i=1;i<=3;i++){
            if(page-i>1){
                str='<li class="page-item">'+(page-i)+'</li>'+' '+str;
            }
            if(page+i<totalPage){
                str=str+" "+'<li class="page-item">'+(page+i)+'</li>';
            }
        }
        if(page-4>1){
            str='<li class="page-item_omit"> ...</li>'+str;
        }
        if(page>1){
            str='<li class="page-up">上一頁</li>'+' '+'<li class="page-item">1</li>'+' '+str;
        }
        if(page+4<totalPage){
            str=str+'<li class="page-item_omit"> ...</li>';
        }
        if(page<totalPage){
            str=str+" "+'<li class="page-item">'+totalPage+'</li>'+" "+'<li class="page-down">下一頁</li>'
        }
        return str;
    }
}

var str=pagination(1, total_page);
$("#pagination-list").html(str).on('click', '.page-down',function(){
    if(current_num==total_page){
        return false;
    }else {
        current_num++;
        $.each($('.productlist ul li'),function(index,productlist){
            var start = current_page* (current_num-1);
            var end = current_page * current_num;
            if(index >= start && index < end){
                $(this).show();
            }else {
                $(this).hide();
            }
        });
    }
    str=pagination(current_num, total_page)
    $("#pagination-list").html(str);
});

$("#pagination-list").html(str).on('click', '.page-up',function(){
    if(current_num==1){
        return false;
    }else {
        current_num--;
        $.each($('.productlist ul li'),function(index,productlist){
            var start = current_page* (current_num-1);
            var end = current_page * current_num;
            if(index >= start && index < end){
                $(this).show();
            }else {
                $(this).hide();
            }
        });
    }
    str=pagination(current_num, total_page)
    $("#pagination-list").html(str);
});

$("#pagination-list").html(str).on('click', '.page-item',function(){
    current_num=parseInt($(this).html());
    $.each($('.productlist ul li'),function(index,productlist){
        var start = current_page* (current_num-1);
        var end = current_page * current_num;
        if(index >= start && index < end){
            $(this).show();
        }else {
            $(this).hide();
        }
    });
    str=pagination(current_num, total_page)
    $("#pagination-list").html(str);
});

button_page[0].onclick= function(){
    if(current_page==24){
        return false;
    }else {
        $(".shop_setting span").eq(1).html("每頁顯示 24 個");
        current_page=24;
        total_page=Math.ceil(product_len/current_page);
        if(current_num>total_page){
            current_num=total_page;
        }
        $.each($('.productlist ul li'),function(index,productlist){
            var start = current_page* (current_num-1);
            var end = current_page * current_num;
            if(index >= start && index < end){
                $(this).show();
            }else {
                $(this).hide();
            }
        });
        str=pagination(current_num, total_page)
        $("#pagination-list").html(str);
    }
}

button_page[1].onclick= function(){
    if(current_page==48){
        return false;
    }else {
        $(".shop_setting span").eq(1).html("每頁顯示 48 個");
        current_page=48;
        total_page=Math.ceil(product_len/current_page);
        if(current_num>total_page){
            current_num=total_page;
        }
        $.each($('.productlist ul li'),function(index,productlist){
            var start = current_page* (current_num-1);
            var end = current_page * current_num;
            if(index >= start && index < end){
                $(this).show();
            }else {
                $(this).hide();
            }
        });
        str=pagination(current_num, total_page)
        $("#pagination-list").html(str);
    }
}

button_page[2].onclick= function(){
    if(current_page==72){
        return false;
    }else {
        $(".shop_setting span").eq(1).html("每頁顯示 72 個");
        current_page=72;
        total_page=Math.ceil(product_len/current_page);
        if(current_num>total_page){
            current_num=total_page;
        }
        $.each($('.productlist ul li'),function(index,productlist){
            var start = current_page* (current_num-1);
            var end = current_page * current_num;
            if(index >= start && index < end){
                $(this).show();
            }else {
                $(this).hide();
            }
        });
        str=pagination(current_num, total_page)
        $("#pagination-list").html(str);
    }

}
