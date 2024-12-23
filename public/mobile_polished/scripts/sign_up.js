
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

    });
});

