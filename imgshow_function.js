var big_img = document.querySelectorAll(".priduct_img > img")[0];
var small_imgs = document.querySelectorAll(".priduct_img_small > ul > li > img");
var small_imgs_tag = document.querySelectorAll(".priduct_img_small > ul > li > div");

for (var i=0;i<small_imgs.length;i++){
    small_imgs[i].onmouseover = function (){
        for (var j=0;j<small_imgs.length;j++){
            small_imgs_tag[j].removeAttribute("class");
        }
        var smallImgSrc = this.getAttribute("src");
        big_img.setAttribute("src",smallImgSrc);
        $(this).parent().children("div").attr("class","img_choose");
    }
}