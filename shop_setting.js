var button = document.getElementsByClassName('shop_setting')[0].getElementsByTagName('li');
var product = document.querySelectorAll('.productlist > ul> li'); 
var product_len = product.length;
var price = document.getElementsByTagName('i');
var date = document.getElementsByClassName('product_date');
var arr_price=[];
var arr_date=[];
var temp = 0;

function sort_arr(arr,flag,arr2){
    console.log(arr)
    for(var i = 0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]*flag>arr[j+1]*flag){
                console.log(j)
                console.log(arr[j])
                console.log(arr[j+1])
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

for(var i=0;i<product_len;i++){
    arr_date[i] = new Date(date[i].innerHTML);
}
for(var i=0;i<product_len;i++){
    arr_price[i] = parseFloat(price[i].innerHTML);
}

button[0].onclick= function(){
    sort_arr(arr_date,-1,arr_price);
}
button[1].onclick= function(){
    sort_arr(arr_date,-1,arr_price);
}
button[2].onclick= function(){
    sort_arr(arr_date,1,arr_price);
}
button[3].onclick= function(){
    sort_arr(arr_price,-1,arr_date);
}
button[4].onclick= function(){
    sort_arr(arr_price,1,arr_date);
}
