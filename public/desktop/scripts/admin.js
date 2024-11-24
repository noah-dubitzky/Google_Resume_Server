$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $submit = $("#submit");

    $password = $("#password");
    $username = $("#user_name");

    $content = $("#Content");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    if( localStorage.getItem("logged_in") == "true")
    {
        window.location.href = "messages.html";
    }

    //$Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right, transform: "translate(0%, 0%)"});
    
    /*
    $Main_Pic.animate({
        top: "20%",
        width: "20%",
        right: "65%",

    }, 1000);
    */

    $submit.on("click", function(){

        admin = {

            username: $username.val(),
            password: $password.val(),
        }

        $.get("/admin/" + admin.username + "/" + admin.password, function(data, status){
					
			if(status == "success"){

                localStorage.setItem("logged_in", true);

                window.location.href = "messages.html";
		
			}
			
		}).fail(function(jqXHR, textStatus, errorThrown){
		
			if(jqXHR.status == 420) {

				window.alert("Admin doesn't exist");
			
			}	
		
		});

    });

});