$(document).ready(function(){

    $Main_Pic = $("#main_pic");
    $section_main = $(".section");

    $senders = $(".sender");

    $full_name = $("#full_name");
    $email = $("#email");
    
    $person_selected = $("#person_selected");

    $sidebar = $("#sidebar");

    senders = new Map();

    pic_metrics = {top: localStorage.getItem("pic_top"), width: localStorage.getItem("pic_width"), right: localStorage.getItem("pic_right")}

    $Main_Pic.css({top: pic_metrics.top, width: pic_metrics.width, right: pic_metrics.right});
    
    $Main_Pic.animate({
        top: "15%",
        width: "10%",
        right: "87%",
        
    }, 1000);

    class Sender{
        constructor(id){
            this.SenderID = id;
            this.First_Name;
            this.Last_name;
            this.Email;
            this.messages = [];
            this.Message_Counter = 0;
        }

        AddMessage(message){
            this.messages[this.Message_Counter] = message;
            this.Message_Counter++;
        }
    }

    class Message{
        constructor(content, date){
            this.Content = content;
            this.Date = date;
        }
    }


    Get_Senders();

    function Populate_Messages(sender)
    {

        $(".message").remove();

        messages = sender.messages;

        for(var i = 0; i < messages.length; i++)
        {

            $full_name.text(sender.First_Name + " " + sender.Last_Name);
            $email.text(sender.Email);

            $new_message = $("<div class='message'></div>");
            $new_message.html(messages[i].Content + "<br>");

            $date = $("<a></a>");
            $date.text(messages[i].Date);

            $date.appendTo($new_message);

            $new_message.appendTo($person_selected);

        }

    }

    function Get_Senders(){

        $.get("/senders/", function(data, status){
                        
            if(status == "success"){

                for(var i = 0; i < data.length; i++)
                {
                    sender = new Sender(data[i].PersonID);

                    sender.First_Name = data[i].First_Name;
                    sender.Last_Name = data[i].Last_Name;
                    sender.Email = data[i].Email;

                    senders.set(data[i].PersonID, sender);

                }

                Populate_Senders();
                Get_Messages();

            }
            
        }).fail(function(jqXHR, textStatus, errorThrown){
        
            if(jqXHR.status == 420) {

                window.alert("You have no messages");
            
            }	
        
        });

    }

    function Get_Messages(){

        $.get("/sendersmessages/", function(data, status){
                        
            if(status == "success"){

                for(var i = 0; i < data.length; i++)
                {
                    new_message = new Message(data[i].Content, data[i].Date);
                    senders.get(data[i].PersonID).AddMessage(new_message);
                }

                first_id = parseInt( $senders.first().attr('id') );
                first_sender = senders.get( first_id );

                Populate_Messages( first_sender );

            }
            
        }).fail(function(jqXHR, textStatus, errorThrown){
        
            if(jqXHR.status == 420) {

                window.alert("You have no messages");
            
            }	
        
        });

    }
    
    function Populate_Senders()
    {
        for (const sender of senders.values()) {

            $new_sender = $("<p class='sender'></p>");
            $new_sender.text(sender.First_Name + " " + sender.Last_Name);
            $new_sender.attr("id", sender.SenderID);

            $new_sender.appendTo($sidebar);

        }

        SetSenderEvents();
    }
    
    function SetSenderEvents(){

        $senders = $(".sender");

        $senders.on("mouseenter", function(){

            $(this).animate({
    
                backgroundColor: "rgba(37, 43, 60, 1)",
            });
        });
    
        $senders.on("mouseleave", function(){
    
            $(this).animate({
    
                backgroundColor: "rgba(22, 25, 35, 1)",
            });
        });

        $senders.on("click", function(){

            //get all of the messages from person in order from earliest to latest

            Populate_Messages( senders.get( parseInt( $(this).attr('id') ) ) );
    
        });

    }

});