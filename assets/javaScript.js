$(()=> {

    var config = {
        apiKey: "AIzaSyD2odY5xcmS2nSXzWYwO16xg90kF-GfF4s",
        authDomain: "weat-bde5f.firebaseapp.com",
        databaseURL: "https://weat-bde5f-default-rtdb.firebaseio.com",
        projectId: "weat-bde5f",
        storageBucket: "weat-bde5f.appspot.com",
        messagingSenderId: "760459252475",
        appId: "1:760459252475:web:fd68f7fc096d73c1ded65e",
        measurementId: "G-RXLEC4XSB0"
      };
    firebase.initializeApp(config);

    
    
    var database = firebase.database();
    // Button click event to display data
    $("#displayDataBtn").click(() => {
        // Reference to your database node
        var dataRef = database.ref('/Recipes');
        console.log (dataRef)

        // Fetch data once from the database
        dataRef.once('value', (snapshot) => {
            // Clear previous data from the container
            $("#dataContainer").empty();

            // Loop through each child node and display the values
            snapshot.forEach((childSnapshot) => {
                var data = childSnapshot.val();
                $("#dataContainer").append(`<p>${JSON.stringify(data)}</p>`);
            });
        });
    });


});
