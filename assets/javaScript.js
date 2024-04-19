$(()=> {

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