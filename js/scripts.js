// UI
$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    console.log();
    var firstName =  $("input#new-first-name").val();
    var lastName = $("input#new-last-name").val();
    var newStreet = $("input#new-street").val();
    var newCity = $("input#new-city").val();
    var newState = $("input#new-state").val();

    var newContact = new Contact(firstName,lastName);
    $("ul#contacts").append("<li><span>" + "Your first name" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});

// UI

//When I have input jerery
    function Contact(firstName, lastName, newStreet, newCity, newState){
      this.firstName = firstName;
      this.lastName = lastName;
      this.newStreet = newStreet;
      this.newCity = newCity;
      this.newState = newState;
    }


    Contact.prototype.fullName = function(firstName, lastName){
      return this.firstName + " " + this.lastName;
    }
