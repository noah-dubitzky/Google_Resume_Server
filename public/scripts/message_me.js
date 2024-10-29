$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $send_message = $("#send_message");

    $full_name = $("#full_name");
    $email = $("#email");
    $message = $("#message");

    /*
    Fields: Full name, email, phone number, company, state, message
    Required Fields: Full name, email, phone number, message
    Unrequired fields: company, state


    Tables: Senders, states, messages, companies

        Senders: Name, Email, Number, stateID, companyID, 

        States: State Name

        Companies: Company Name

        Messages: SenderID, Message

    Sending new message protocol:

        1. Check if sender exists by checking for Identical first names
            -> If sender exists, get sender ID,
            -> then create a new item in messages table with sender ID and message text

        2. If sender doesnt exist, then create new sender
            -> first create new item in company table
            -> then create sender using company ID
            -> make sure to save sender ID
        
        3. Create new message item using sender ID
    */

    populateStatesDropdown();

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});
    
    person_full_name = localStorage.getItem("sender_full_name");
    person_email = localStorage.getItem("sender_email");

    if(person_full_name != null)
    {

        $full_name.val(person_full_name);
        $email.val(person_email);

    }

    //$Main_Pic.css({'transform': 'translate(0%, 100%)'});

    $Main_Pic.animate({
        top: "17%",
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

    function populateStatesDropdown() {
        var states = [
            { code: "AL", name: "Alabama" },
            { code: "AK", name: "Alaska" },
            { code: "AZ", name: "Arizona" },
            { code: "AR", name: "Arkansas" },
            { code: "CA", name: "California" },
            { code: "CO", name: "Colorado" },
            { code: "CT", name: "Connecticut" },
            { code: "DE", name: "Delaware" },
            { code: "FL", name: "Florida" },
            { code: "GA", name: "Georgia" },
            { code: "HI", name: "Hawaii" },
            { code: "ID", name: "Idaho" },
            { code: "IL", name: "Illinois" },
            { code: "IN", name: "Indiana" },
            { code: "IA", name: "Iowa" },
            { code: "KS", name: "Kansas" },
            { code: "KY", name: "Kentucky" },
            { code: "LA", name: "Louisiana" },
            { code: "ME", name: "Maine" },
            { code: "MD", name: "Maryland" },
            { code: "MA", name: "Massachusetts" },
            { code: "MI", name: "Michigan" },
            { code: "MN", name: "Minnesota" },
            { code: "MS", name: "Mississippi" },
            { code: "MO", name: "Missouri" },
            { code: "MT", name: "Montana" },
            { code: "NE", name: "Nebraska" },
            { code: "NV", name: "Nevada" },
            { code: "NH", name: "New Hampshire" },
            { code: "NJ", name: "New Jersey" },
            { code: "NM", name: "New Mexico" },
            { code: "NY", name: "New York" },
            { code: "NC", name: "North Carolina" },
            { code: "ND", name: "North Dakota" },
            { code: "OH", name: "Ohio" },
            { code: "OK", name: "Oklahoma" },
            { code: "OR", name: "Oregon" },
            { code: "PA", name: "Pennsylvania" },
            { code: "RI", name: "Rhode Island" },
            { code: "SC", name: "South Carolina" },
            { code: "SD", name: "South Dakota" },
            { code: "TN", name: "Tennessee" },
            { code: "TX", name: "Texas" },
            { code: "UT", name: "Utah" },
            { code: "VT", name: "Vermont" },
            { code: "VA", name: "Virginia" },
            { code: "WA", name: "Washington" },
            { code: "WV", name: "West Virginia" },
            { code: "WI", name: "Wisconsin" },
            { code: "WY", name: "Wyoming" }
        ];

        $.each(states, function(index, state) {
            $('#states').append($('<option>', { 
                value: state.code,
                text : state.name 
            }));
        });
    }

});

