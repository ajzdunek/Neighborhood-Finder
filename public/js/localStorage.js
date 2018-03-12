
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
    function saveEmailInfo(){

    // event.preventDefault();

    var email = $("#email").val().trim();
    emailInfo.push(email);
    localStorage.setItem("savedplaces", JSON.stringify(emailInfo));
    console.log("saved", emailInfo);
    // putOnPage();
    return emailInfo;
    }

// $("#submitStart").on("click", saveEmailInfo);
$(document).on("click", ".saveNeighborhood", saveNeighborhood);

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
    $(".savedemail").empty();

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