var config = {
    apiKey: "AIzaSyCzeQiIeIZBrN7JNRo9aE3xYYVKXLTc400",
    authDomain: "myfood-26cb7.firebaseapp.com",
    databaseURL: "https://myfood-26cb7.firebaseio.com",
    storageBucket: "myfood-26cb7.appspot.com",
    messagingSenderId: "46630304077"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  

    // Capture Button Click
$("#itemSubmitButton").on("click", function(event) {
 event.preventDefault();

  // Capture Inputs and store them into variables

  var itemName = $("#itemName").val().trim();
  var itemQuantity = $("#itemQuantity").val().trim();
  var currentDate = $("#currentDate").val().trim();
  var expiryDate = $("#expiryDate").val().trim();


  database.ref().push({
    itemName: itemName,
    itemQuantity: itemQuantity,
    currentDate: currentDate,
    expiryDate: expiryDate,
         
  });

  $("#itemName").val("");
  $("#itemQuantity").val("");
  $("#currentDate").val("");
  $("#expiryDate").val("");

});



database.ref().on("child_added", function(snapshot) {

  // Log everything that's coming out of snapshot
      
  
  var tableRow = $("<tr>");
  $("#ingredientsTable").append(tableRow);     

  var itemName = snapshot.val().itemName;
  var itemQuantity = snapshot.val().itemQuantity;

 var currentDate = snapshot.val().currentDate;
 var expiryDate = snapshot.val().expiryDate;

 

  var ingredientsArray = [itemName, itemQuantity, currentDate, expiryDate];

  for(var i = 0; i<ingredientsArray.length; i++) {

    var tableData = $("<td>");
    tableData.text(ingredientsArray[i]);
    tableRow.append(tableData);

  };
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code)
});
