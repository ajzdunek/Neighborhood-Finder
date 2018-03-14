
$(document).ready(function () {

    $(".start").on("click", function (e) {
        e.preventDefault();
        window.location.href = "/survey.html#quizStart";
    });

    console.log("I am working");

    // Click Login to open modal
    $('#login-modal').modal();

    // When user clicks "submit + start" button, the user's email is saved into the database
    var checkEmail = function () {
        console.log("running")

        var newUser = $("#email").val().trim();
        console.log("User's email is ", newUser);
        $.get("/api/users/" + newUser, function (data) {
            $("#email").val("");
            if (data.length > 0 && data[0].Saved !== null) {
                var match = data[0].Saved;
                saveHoodName(match);
                window.location.href = "/survey.html#loadSaved";
            } else if (data.length > 0) {
                window.location.href = "/survey.html#quizStart";
            }
            if (data.length <= 0) {
                $.post("/api/users/" + newUser, function (data) {
                    window.location.href = "/survey.html#quizStart";
                });
            }
        })  
    };



    // var favorites = JSON.parse(localStorage.getItem("savedplaces"));
    var emailInfo = JSON.parse(localStorage.getItem("savedemail"));
    var savedHood = JSON.parse(localStorage.getItem("savedhood"));

    if (!Array.isArray(emailInfo)) {
        emailInfo = [];
    }

    if (!Array.isArray(savedHood)) {
        savedHood = [];
    }

    /** Saves restaurants and corresponding links in local storage 
     * @param {method} event - Prevents page from reloading
     * @return {function} putOnPage - runs putOnPage function
     */
    // function saveRestaurant(event) {
    function saveEmailInfo() {
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
    function saveHoodName(hood) {
        savedHood = [];
        savedHood.push(hood);
        localStorage.setItem("savedhood", JSON.stringify(savedHood));
        console.log("saved hood", savedHood);

        return savedHood;
    }

    // $("#submitStart").on("click", function () {
    //     if ($("#email").attr('data-error', 'please enter a valid email address')) {
    //         $("#submitStart").removeClass('modal-close')
    //         console.log("this email has error")
    //     }else if($("#email").attr('data-success', 'right')){
    //         if(!$("#submitStart").hasClass('modal-close')){
    //             $('#submitStart').addClass('modal-close')
    //         }
    //         saveEmailInfo();
    //     }
    // })

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
        saveEmailInfo();
    }

    $("#submitStart").on("click", function(){
        console.log("running");
        var email = $("#email").val();
        console.log(email);
            if(isValidEmailAddress(email)){
                if(!$("#submitStart").hasClass('modal-close')){
                $('#submitStart').addClass('modal-close')
                    }
                saveEmailInfo();
            }else{
                console.log("error");
                $("#submitStart").removeClass('modal-close')
            }
        })
});
