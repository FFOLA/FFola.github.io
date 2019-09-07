function validate()
{
  var namefield = document.forms['contactform']['Name'];
  var emailfield = document.forms['contactform']['EMail'];
  var messagefield = document.forms['contactform']['Message'];
  var titlefield = document.forms['contactform']['Title']

  if (emailfield.value.indexOf("@", 0) < 0){
        window.alert("Please enter a valid e-mail address.");
    }

  if (emailfield.value.indexOf(".", 0) < 0){
        window.alert("Please enter a valid e-mail address.");
    }

  if (messagefield.value < 20){
        window.alert("Your message should not be less than 20 characters")
    }

  if (namefield.value.length < 4){
     window.alert("Please your name should not be less than 4 characters")
    }
}
