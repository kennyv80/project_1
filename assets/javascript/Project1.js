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


function validateEntry(event) {


  $(".invalidation").empty();

  var invalMsg = "Invalid entry";
  

  $($('form').prop('elements')).each(function(index, curEl){




    // testing state input
    if(index === 4) {
      if($(this).val() === "State") {
        invalidationText(invalMsg,  $(this).get());
      } 
    }

    // testing zip input
    if(index === 5) {
      var temp = evalZip($(this).val());
      if(temp == false) {
        invalidationText(invalMsg,  $(this).get());
      } 
    }

    // testing team input
    if(index === 6) {
      if($(this).val() === "Team") {
        msg = "afaeradf";
        invalidationText(invalMsg,  $(this).get());
      } 
    }

  });


    // if(teamSelected === "Team") {
    //   // code: that would link current element to output validation text
    //   msg = "Entry is blank";
    //   invalidationText(msg, teamSelected);
    // }

  return true;
}


// injecting invalidation msg into DOM
function invalidationText(msg, atCurrent) {
  var invalidText = $("<div>");
  invalidText.text(msg);
  invalidText.css({"color":"red", "font-size":"15px"});
  $($(atCurrent)).next().append(invalidText);
}

// validating zip criteria:
// only numerical digits, five digits len
function evalZip(inputs) {
  // search criteria: any non-digits
  var patternz = /[^0-9]/;
  var result = inputs.match(patternz);
        // 5-digits length
  if(result === null && inputs.length === 5) {
    return  true;
  } else {
    return false;
  }
}



