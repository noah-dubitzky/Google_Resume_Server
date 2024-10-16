$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $send_message = $("#send_message");

    $full_name = $("#full_name");
    $email = $("#email");
    $message = $("#message");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});
    
    person_full_name = localStorage.getItem("sender_full_name");

    if(person_full_name != null)
    {

        $full_name.val(person_full_name);

    }

    $Main_Pic.animate({
        top: "20%",
        width: "17%",
        right: "73%",

    }, 1000);

    $send_message.on("click", function(){

      var content = $message.val();
      var subject = "Resume app message from " + $full_name.val();

      message = {
        service: "gmail.com",
        user: "noahdubitzky2745@gmail.com",
        password: "vhnc gjac wcpb yzpv",
        sender: "noahdubitzky2745@gmail.com",
        recipient: "noahdubitzky2745@gmail.com",
        subject: subject,
        text: content
      }

      if(content.length == 0 || subject.length == 0)
      {
        window.alert("Please fill out all fields");
        
      }else{

        localStorage.setItem("sender_full_name", $full_name.val());
        $send_post_request(message);
      }

    });

    function $send_post_request(message){

      $.post("/email", message, function(data, status){
					
        if(status == "success"){
      
          alert("Message Sent");
      
        }
        
      }).fail(function(jqXHR, textStatus, errorThrown){
      
        if(jqXHR.status == 420) {
  
          window.alert("Username is already taken");
        
        }	
    
      });
    }
});
