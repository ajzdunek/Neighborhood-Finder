
$(document).ready(function () {

        $(".start").on("click", function (e) {
            var email = false;
            e.preventDefault();
            window.location.href = "/survey.html#quizStart" + email;
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
                if (data.length > 0 && data[0].Saved !== null) {
                    var email = true;
                    var match = data[0].Saved;
                    saveHoodName(match);
                    window.location.href = "/survey.html#loadSaved" + email;
                } else if (data.length > 0) {
                    email = true;
                    window.location.href = "/survey.html#quizStart" + email;
                }
                if (data.length <= 0){
                    email = true;
                    $.post("/api/users/" + newUser, function (data) {
                        window.location.href = "/survey.html#quizStart" + email;
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
    
    // $(document).on("click", "#retake", function(){
    //     quizStart();
    // });


});
