$(document).ready(function () {

    $(".start").on("click", function (e) {
        e.preventDefault();
        window.location.replace('/survey.html');
    });

    console.log("I am working");

    // Click Login to open modal
    $('.modal').modal();

    // When user clicks "submit + start" button, the user's email is saved into the database
    var checkEmail = function(){
        // event.preventDefault();
        console.log("running")

        var newUser = $("#email").val().trim();
        console.log("User's email is ", newUser);
            $.get("/api/users/" + newUser, function (data) {
                console.log("email", data);
                if (data.length <= 0) {
                    $.post("/api/users/" + newUser, function (data) {
                        //not working
                            // window.location.replace('/survey.html');
                            // quizStart();
                    });
                }
                else if (data.length > 0 && data[0].Saved !== null) {
                    console.log("saved!")
                    var match = data[0].Saved;
                    $.get("/api/results/" + match, function (data) {
                        var href = $("#submitStart").attr("href");
                        window.location.href = href;
                        // window.location.replace('/survey.html');
                        console.log("saved match", data)
                        $(document).ready(function(){
                            $(".loggedIn").removeClass("hidden");
                            $("#localEmail").text("Hi, " + data[0].Email);
                        })

                    })
                }
                else if (data[0].Email.length > 0) {
                    // console.log(data[0].Email);
                    window.location.replace = ("/survey.html");
                }
            })

    }; //End of button click function



// var favorites = JSON.parse(localStorage.getItem("savedplaces"));
var emailInfo = JSON.parse(localStorage.getItem("savedemail"));

if (!Array.isArray(emailInfo)) {
    emailInfo = [];
}
/** Saves restaurants and corresponding links in local storage 
 * @param {method} event - Prevents page from reloading
 * @return {function} putOnPage - runs putOnPage function
 */
// function saveRestaurant(event) {
    function saveEmailInfo(event){


    event.preventDefault();

    var email = $("#email").val().trim();
    emailInfo.push(email);
    localStorage.setItem("savedemail", JSON.stringify(emailInfo));
    console.log("saved", emailInfo);
    checkEmail();
    // putOnPage();
    }

$("#submitStart").on("click", saveEmailInfo);
// $(document).on("click", ".saveNeighborhood", saveNeighborhood);

/** Saves restaurants and corresponding links in local storage 
 * @param {method} event - Prevents page from reloading
 * @return {function} putOnPage - runs putOnPage function
 */
// function saveRestaurant(event) {
    // function saveNeighborhood(event){

    //     event.preventDefault();
    
    //     var hood = $("#email").val().trim();
    //     emailInfo.push(email);
    //     localStorage.setItem("savedplaces", JSON.stringify(emailInfo));
    //     console.log("saved", emailInfo);

    // }




/** 
 * Gets restaurant names and links from local storage and appends to My Favorites div
 * */
function putOnPage() {

    // var insideFavorites = JSON.parse(localStorage.getItem("savedplaces"));
    var insideStorage = JSON.parse(localStorage.getItem("savedemail"));


    if (!Array.isArray(emailInfo)) {
        emailInfo = [];
    }
        $(".loggedIn").removeClass("hidden");
        $("#localEmail").text("Hi, " + emailInfo[0]);

}

/**
 * On click removes corresponding restaurant name and link from My Favorites and local storage 
 * @param {method} event 
 * @return {function} putOnPage - calls putOnPage to push to favorites
*/
$(document).on("click", "savePlace", function () {

    var savedList = JSON.parse(localStorage.getItem("savedplace"));
    savedList.splice();
    emailInfo = savedList;
    localStorage.setItem("savedplace", JSON.stringify(savedList));

});



    //End of document ready
});