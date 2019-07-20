var firebaseConfig = {
  apiKey: "AIzaSyDYLpe8h2FUgrC8HbkY3VuyrFhJLb2T8cE",
  authDomain: "mytestproj-5b683.firebaseapp.com",
  databaseURL: "https://mytestproj-5b683.firebaseio.com",
  projectId: "mytestproj-5b683",
  storageBucket: "mytestproj-5b683.appspot.com",
  messagingSenderId: "87679041814",
  appId: "1:87679041814:web:75dabb1bed76630e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  var database = firebase.database();
function displaySeating (team){
// console.log (team)
}
    // Capture Button Click
    // $("#add-user").on("click", function(event) {
    
    // on resolution of submit from form ID "user-signup"
    $("#user-signup").submit(function(event) {                                  //

      var testingv = validateEntry(event);
      if(testingv === false) {
        return false;
      }

      // console.log(event); //db
      // prevent page from refreshing when form tries to submit itself
      event.preventDefault();
      // Capture user inputs and store them into variables
      var email = $("#inputEmail4").val().trim();
      var password = $("#inputPassword4").val().trim();
      var address = $("#inputAddress").val().trim();
      var city = $("#inputCity").val().trim();
      var state = $("#inputState").val().trim();
      var zip = $("#inputZip").val().trim();
      var team = $(".team option:selected").val();

      // if (validateEmail(email)) {                                            // tom

        
        localStorage.setItem("team", team)
        var user={
          email:email, 
          password:password,
          address:address,
          city:city,
          state:state,
          zip:zip,
          team:team,
        }
        database.ref('/users').push(user);
        // Console log each of the user inputs to confirm we are receiving them
        // console.log(email);
        // console.log(address);
        // console.log(city);
    
        // Replaces the content in the "recent-member" div with the new info
        $("#email-display").text(email);
        $("#password-display").text(password);
        $("#address-display").text(address);
        $("#city-display").text(city);
        // Clear sessionStorage
        sessionStorage.clear();
        // Store all content into sessionStorage
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("address", address);
        sessionStorage.setItem("city", city);
      // }                                                                      // tom      
    });

    // By default display the content from sessionStorage
    $("#email-display").text(sessionStorage.getItem("email"));
    $("#address-display").text(sessionStorage.getItem("address"));
    $("#city-display").text(sessionStorage.getItem("city"));
    

//click event on submission, on click call your function displaySeating
$("#add-user").click(displaySeating);
//displays the seating of selected team
function displaySeating (){
    var teamSeat = $(".team option:selected").val();

    // input validation
    if(teamSeat !== "Team") {
      var img = "assets/images/" + teamSeat + ".jpg";
      $(".seatImg").attr("src", img);
    }
}   
function tickets(){
    //window.location="./index.html"
}

//------------------------------------------------------------------------
// sign form validation
// function validateEmail(email) {             // tom
//   if (email.length === 0) {                 //
//     var alert = $("<div>");                 //
//     alert.css({"color":"red", "font-size":"15px"});   // font-size: 18px
//     alert.text("Entry is blank.");          //
//     $("#invalidation").append(alert);      // inputEmail4Errors
//     return false;                           //
//   }                                         //
//   return true;                              //
// }                                           //

function validateEntry(event) {


  // console.log(event); //db
  // console.log("above is validateEntry"); //db
  var email = $("#inputEmail4").val().trim();
  var password = $("#inputPassword4").val().trim();
  var address = $("#inputAddress").val().trim();
  var city = $("#inputCity").val().trim();
  var zip = $("#inputZip").val().trim();
  var msg;

  // need array to index specific validation per user entries
  var inputs = [email, password, address, city, zip]; 

                                    // arg a & b, could be index & current_input_object, respectively  
    var stateSelected = $("#inputState").val().trim();
    var teamSelected = $("#inputTeam").val().trim();
  

  // - curEl is current element, but curEl.val() would give you 405 error, da_hell!
  // index is same old integer index
  $($('form').prop('elements')).each(function(index, curEl){

    // console.log(curEl.val());                                          
    // console.log($(this).val());                   // $(this).val() is value of inputs
    // about line below: $(this).get() result in a string that
    // defined this element, meaning its element's [tag, id, class]
    // console.log($(this).get());                   
    // console.log("^ above is " + index);

    // testing State
    if(index === 4) {
      if($(this).val() === "State") {
        // console.log("state not entered");
        msg = "afaeradf";
        invalidationText(msg,  $(this).get());
      } 
    }

    // if(index === 6) {
    //   if($(this).val() === "Team") {
    //     // console.log("Team not entered");
    //     msg = "afaeradf";

    //   } 
    // }


    // console.log($(this));                         // $(this) is the current DOM element
    // console.log("^ $this");
    // console.info(this);                           // non-descriptive, check it out
  });


    // if(stateSelected === "State") {
    //   // code: that would link current element to output validation text
    //   msg = "Entry is blank";
    //   invalidationText(msg, stateSelected);
    // }

    // if(teamSelected === "Team") {
    //   // code: that would link current element to output validation text
    //   msg = "Entry is blank";
    //   invalidationText(msg, teamSelected);
    // }

    // console.log($(this));  //db
    // console.info(this)  //db

  return true;
}



function invalidationText(msg, atCurrent) {

  // console.log($(atCurrent));
  // console.log(atCurrent);
  var invalidText = $("<div>");
  invalidText.text(msg);
  invalidText.css({"color":"red", "font-size":"15px"});
  $($(atCurrent)).next().append(invalidText);
}



