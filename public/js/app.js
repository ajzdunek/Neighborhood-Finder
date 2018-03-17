    var video = document.getElementById("vimeo-player");

    //Create a new Vimeo.Player object
    var player = new Vimeo.Player(video);

    //When the player is ready, set the volume to 0
    player.ready().then(function() {
        player.setVolume(0);
    });


$(document).ready(function () {

    /** on click of start button redirects to survey page and calls quizStart
     * @param {event} - prevents page from reloading
     */
    $(".start").on("click", function (e) {
        e.preventDefault();
        window.location.href = "/survey.html#quizStart";
    });


    $('#login-modal').modal();

    /** checks to see if email exists in database and if so, if they have a saved neighborhood 
     * @return {Object} - returns data from user table in db
     */
    var checkEmail = function () {

        var newUser = $("#email").val().trim();
        console.log("User's email is ", newUser);
        $.get("/api/users/" + newUser, function (data) {
            if (data.length > 0 && data[0].Saved !== null) {
                var match = data[0].Saved;
                console.log("match", data[0].Saved);
                saveHoodName(match);
                window.location.href = "/survey.html#loadSaved";
            } else if (data.length > 0 && data.email ) {
                window.location.href = "/survey.html#quizStart";
                console.log("email but no saved")
            }
            if (data.length <= 0) {
                $.post("/api/users/" + newUser, function (data) {
                    window.location.href = "/survey.html#quizStart";
                });
            }
        }) 
        $("#email").val(""); 
    };


    var emailInfo = JSON.parse(localStorage.getItem("savedemail"));
    var savedHood = JSON.parse(localStorage.getItem("savedhood"));

    if (!Array.isArray(emailInfo)) {
        emailInfo = [];
    }

    if (!Array.isArray(savedHood)) {
        savedHood = [];
    }

    /** Saves email in local storage and replaces if one already exists
     * @return {function} checkEmail - runs function to check if email exists in db
     */
    function saveEmailInfo() {
        emailInfo = [];
        var email = $("#email").val().trim();
        emailInfo.push(email);
        localStorage.setItem("savedemail", JSON.stringify(emailInfo));
        console.log("saved", emailInfo);
        checkEmail();
    }

    /** Saves neighborhood name in local storage if it exists in db
     * @param {method} hood - takes in variable that holds saved neighborhood name from db
     * @return {string} savedHood - returns name of the saved neighborhood
     */
    function saveHoodName(hood) {
        savedHood = [];
        savedHood.push(hood);
        localStorage.setItem("savedhood", JSON.stringify(savedHood));
        console.log("saved hood", savedHood);

        return savedHood;
    }

    /** Checks to see if the email address user enters is valid with regex
     * @param {method} emailAddress - takes in variable that holds email address user inputed
     * @return {function} saveEmailInfo - runs function to save email in local storage
     */
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    /** On click of submit email runs
     * @param {event} click - passes in click listener on button
     * @param {callback} cb - runs function to check for valid email address
     */
    $("#submitStart").on("click", function(){
        var email = $("#email").val();
            if(isValidEmailAddress(email) === true){
                if(!$("#submitStart").hasClass('modal-close')){
                $('#submitStart').addClass('modal-close')
                    }
                saveEmailInfo();
            }else{
                $("#submitStart").removeClass('modal-close')
            }
    })

});
