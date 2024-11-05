$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $send_message = $("#send_message");

    $full_name = $("#full_name");
    $email = $("#email");
    $message = $("#message");
    $phone = $("#phone");
    $company = $("#company");
    $state = $("#states");

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

    $send_message.on("click", async function(){
        
        full_name = $full_name.val();
        phone = parseInt($phone.val());
        email = $email.val();
        company = $company.val();
        state = $state.val();

        const date = new Date();

        formatted_date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();

        var sender = {

            name: full_name,
            number: phone,
            email: email,
            company_id: parseInt( await GetCompanyId(company) ),
            state_id: parseInt( await GetStateId(state) )
        }

        alert("sender state Id " + sender.state_id);

        newMessage = {

            sender_id: 1,
            content: $message.val(),
            date: formatted_date,
        }

        //localStorage.setItem("sender_full_name", full_name[0] + " " + full_name[1]);
        //localStorage.setItem("sender_email", newPerson.Email);

        SendMessage(sender, newMessage);

    });

    async function GetCompanyId(company) {

        return new Promise((resolve) => {

            $.get("/companies/" + company, function(data, status){

                resolve(data.id);

            }).fail(function(jqXHR, textStatus, errorThrown){
            
                if(jqXHR.status == 404) {

                    newCompany = {

                        company_name: company
                    };

                    $.post("/companies", newCompany, function(data, status){

                        resolve(data.id);
            
                    });
                
                }
            
            });

        });
    }

    function GetStateId(state) {

        return new Promise((resolve) => {

            $.get("/states/" + state, function(data, status){

                resolve(data.id);

            });

        });
    }

    function CreateSenderAndMessage(sender, message){

        $.post("/sender", sender, function(data, status){
					
			if(status == "success"){
		
                message.sender_id = data.id;
                CreateMessage(message);
		
			}
			
		});
    }

    function CreateMessage(message){

        $.post("/message", message, function(data, status){
					
			if(status == "success"){
		
                alert("Message Sent");
		
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
                value: state.name,
                text : state.name 
            }));
        });
    }

    function SendMessage(sender, message){
        
        alert("sent");

        $.get("/sender/" + sender.name, function(data, status){

			if(status == "success"){
		
                //create message
                message.sender_id = data.id;

                CreateMessage(message);
		
			}
			
		}).fail(function(jqXHR, textStatus, errorThrown){
		
            if(jqXHR.status == 404) {

				CreateSenderAndMessage(sender, message);
			
			}
		
		});
    }

});

