
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
                        // var href = $("#submitStart").attr("href");
                        window.location.href = "/survey.html"
                        // quizStart();
                    });
                }
                else if (data.length > 0 && data[0].Saved !== null) {
                    console.log(data[0].Saved);
                    var match = data[0].Saved;
                    saveHoodName(match);
                    window.location.href = "/survey.html"
                    // var href = $("#submitStart").attr("href");
                    // window.location.href = href;
                    $(document).ready(function(){
                        console.log("saved match", data[0].Email)
                        $(".loggedIn").removeClass("hidden");
                        $("#localEmail").text("Hi, " + data[0].Email);
                    
                    $.get("/api/results/" + match, function (data) {
                            console.log(data);

                    })
                    })

                }else if(data[0].Email.length > 0) {
                    console.log(data[0].Email);
                    window.location.replace = ("/survey.html");
                }
            })

    }; //End of button click function



// var favorites = JSON.parse(localStorage.getItem("savedplaces"));
var emailInfo = JSON.parse(localStorage.getItem("savedemail"));
var savedHood = JSON.parse(localStorage.getItem("savedhood"));

if (!Array.isArray(emailInfo)) {
    emailInfo = [];
}

if (!Array.isArray(savedHood)) {
    savedHood= [];
}

/** Saves restaurants and corresponding links in local storage 
 * @param {method} event - Prevents page from reloading
 * @return {function} putOnPage - runs putOnPage function
 */
// function saveRestaurant(event) {
    function saveEmailInfo(){
    emailInfo = [];
    var email = $("#email").val().trim();
    emailInfo.push(email);
    localStorage.setItem("savedemail", JSON.stringify(emailInfo));
    console.log("saved", emailInfo);
    checkEmail();

    }

/** Saves restaurants and corresponding links in local storage 
 * @param {method} event - Prevents page from reloading
 * @return {function} putOnPage - runs putOnPage function
 */
// function saveRestaurant(event) {
    function saveHoodName(hood){
    savedHood = [];
    savedHood.push(hood);
    localStorage.setItem("savedhood", JSON.stringify(savedHood));
    console.log("saved hood", savedHood);

    return savedHood;
    }



$("#submitStart").on("click", saveEmailInfo);




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


