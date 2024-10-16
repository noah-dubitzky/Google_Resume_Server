$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $send_message = $("#send_message");

    $full_name = $("#full_name");
    $email = $("#email");
    $message = $("#message");

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});
    
    person_full_name = localStorage.getItem("sender_full_name");
    person_email = localStorage.getItem("sender_email");

    if(person_full_name != null)
    {

        $full_name.val(person_full_name);
        $email.val(person_email);

    }

    $Main_Pic.animate({
        top: "20%",
        width: "17%",
        right: "73%",

    }, 1000);

    $send_message.on("click", function(){

        full_name = ParseFullName($full_name.val());

        const date = new Date();

        formatted_date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();

        alert(formatted_date)

        newPerson = {

            First_Name: full_name[0],
            Last_Name: full_name[1],
            Email: $email.val()
        }

        newMessage = {

            personID: 1,
            content: $message.val(),
            date: formatted_date,
        }

        localStorage.setItem("sender_full_name", full_name[0] + " " + full_name[1]);
        localStorage.setItem("sender_email", newPerson.Email);

        Send_Message(newMessage, newPerson);

    });

    function ParseFullName(full_name){

        var name = full_name.split(" ");

        return name;
    }

    function Send_Message(message, person){

        $.post("/person", person, function(data, status){

			if(status == "success"){
		
                message.personID = data.id;

                FinishMessage(message)
		
			}
			
		}).fail(function(jqXHR, textStatus, errorThrown){
		
            if(jqXHR.status == 500) {

				Send_Message_Existing_User(message, person);
			
			}
		
		});

    }

    function Send_Message_Existing_User(message, person){

        $.get("/person" + "/" + person.Email, function(data, status){

            if(status == "success"){
		
                message.personID = data.PersonID;

                FinishMessage(message)
		
			}

        })

    }

    function FinishMessage(message){

        $.post("/message", message, function(data, status){
					
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

