
$(document).ready(function () {

    $("#Sign_Up > button").click(function (event) {

        event.preventDefault(); // Prevent the default form submission behavior

        const email = $("#email_input").val(); // Get the email input value

        var new_email = {

            address: email
        }

        $.post("/email_list", new_email, function(data, status){
					
			if(status == "success"){
		
                alert("You have been added to my email list!");
		
			}
			
		});

        send_email(email);

    });
});

function send_email(address){
            
    const email_sent = {
        service: "gmail.com",
        user: "noahdubitzky2745@gmail.com",
        password: "vhnc gjac wcpb yzpv",
        sender: "noahdubitzky2745@gmail.com",
        recipient: address,
        subject: "NoahDubitzky.com email list",
        text: "Welcome to my email list",
      };

      alert("sending email")

    $.post("/email", email_sent, function(data, status){
                
        if(status == "success"){
    
            alert("email sent");
    
        }
        
    });

}

