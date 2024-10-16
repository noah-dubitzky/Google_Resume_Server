var nodemailer = require('nodemailer');

// constructor
const Email = function(email) {
  this.service = email.service;
  this.user = email.user;
  this.password = email.password;
  this.sender = email.sender;
  this.recipient = email.recipient;
  this.subject = email.subject;
  this.text = email.text;
};

Email.send = (email, result) => {

    var transporter = nodemailer.createTransport({
            
        service: email.service,
        port: 465,
        secure: true, // use SSL
        auth: {
          user: email.user,
          pass: email.password
        }
    });
      
    var mailOptions = {
        from: email.sender,
        to: email.recipient,
        subject: email.subject,
        text: email.text
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          result(error, null);
        } else {
          console.log('Email sent: ' + info.response);
          result(null, 'Email sent: ' + info.response);
        }
    });
    
};

module.exports = Email;

/*
from: 'youremail@gmail.com',
to: 'myfriend@yahoo.com',
subject: 'Sending Email using Node.js',
text: 'That was easy!'
*/