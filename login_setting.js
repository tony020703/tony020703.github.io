var register_button=document.getElementsByClassName("main_box")[0].getElementsByTagName('li')[0];
var login_button=document.getElementsByClassName("main_box")[0].getElementsByTagName('li')[1];

login_button.onclick= function(){
    if(login_button.className=="box_login_active"){
        return false;
    } else if(login_button.className=="box_login"){
        $(".table_content_register_active").addClass("table_content_register");
        $(".table_content_register_active").removeClass("table_content_register_active");
        $(".table_content_login").addClass("table_content_login_active");
        $(".table_content_login").removeClass("table_content_login");
        $(".box_login").addClass("box_login_active");
        $(".box_login").removeClass("box_login");
        $(".box_register_active").addClass("box_register");
        $(".box_register_active").removeClass("box_register_active");
    } else{
        return false;
    }
}
register_button.onclick= function(){
    if(register_button.className=="box_register_active"){
        return false;
    } else if(register_button.className=="box_register"){
        $(".table_content_login_active").addClass("table_content_login");
        $(".table_content_login_active").removeClass("table_content_login_active");
        $(".table_content_register").addClass("table_content_register_active");
        $(".table_content_register").removeClass("table_content_register");
        $(".box_register").addClass("box_register_active");
        $(".box_register").removeClass("box_register");
        $(".box_login_active").addClass("box_login");
        $(".box_login_active").removeClass("box_login_active");
    } else{
        return false;
    }
}