/* Quiz is running through fifteen questions and appends result.
* @function save
* @param {string} 
* @function store
* @param {string} 
* @function getValues
* @return 
* @param {string}
*/



$(document).ready(function () {
    $('.modal').modal();
    console.log("this is loading");

    var quizStart = function () {
        var isLoggedIn = JSON.parse(localStorage.getItem("savedemail"));
        if(isLoggedIn === null){
            $(".modal-close").addClass("hidden")
        }
        $('#modalStart').modal({
            dismissible: false,
            opacity: 0.5,
            inDuration: 500,
            outDuration: 200
        });
        $('#modalStart').modal('open');


        $("#q1btn").on("click", function (e) {
            console.log("q1 button works");
            e.preventDefault();
            if ($("input[name=group1]:checked").val() === undefined) {
                console.log($("input[name=group1]:checked").val())
                if ($("#error1").hasClass("hidden")) {
                    $("#error1").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error1").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {
                $('#modalQ2').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalStart').modal('close');
                $('#modalQ2').modal('open');
            }
        });

        $("#q2btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group2]:checked").val() === undefined) {
                console.log($("input[name=group2]:checked").val())
                if ($("#error2").hasClass("hidden")) {
                    $("#error2").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error2").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ3').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ2').modal('close');
                $('#modalQ3').modal('open');
            }

        });

        $("#q3btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group3]:checked").val() === undefined) {
                console.log($("input[name=group3]:checked").val())
                if ($("#error3").hasClass("hidden")) {
                    $("#error3").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error3").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ4').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ3').modal('close');
                $('#modalQ4').modal('open');
            }
        });

        $("#q4btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group4]:checked").val() === undefined) {
                console.log($("input[name=group4]:checked").val())
                if ($("#error4").hasClass("hidden")) {
                    $("#error4").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error4").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {
                $('#modalQ5').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ4').modal('close');
                $('#modalQ5').modal('open');
            }
        });

        $("#q5btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group5]:checked").val() === undefined) {
                console.log($("input[name=group5]:checked").val())
                if ($("#error5").hasClass("hidden")) {
                    $("#error5").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error5").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ6').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ5').modal('close');
                $('#modalQ6').modal('open');
            }
        });

        $("#q6btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group6]:checked").val() === undefined) {
                console.log($("input[name=group6]:checked").val())
                if ($("#error6").hasClass("hidden")) {
                    $("#error6").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error6").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ7').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ6').modal('close');
                $('#modalQ7').modal('open');
            }
        });

        $("#q7btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group7]:checked").val() === undefined) {
                console.log($("input[name=group7]:checked").val())
                if ($("#error7").hasClass("hidden")) {
                    $("#error7").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error7").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {
                $('#modalQ8').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ7').modal('close');
                $('#modalQ8').modal('open');
            }
        });

        $("#q8btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group8]:checked").val() === undefined) {
                console.log($("input[name=group8]:checked").val())
                if ($("#error8").hasClass("hidden")) {
                    $("#error8").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error8").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ9').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ8').modal('close');
                $('#modalQ9').modal('open');
            }
        });

        $("#q9btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group9]:checked").val() === undefined) {
                console.log($("input[name=group9]:checked").val())
                if ($("#error9").hasClass("hidden")) {
                    $("#error9").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error9").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {
                $('#modalQ10').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ9').modal('close');
                $('#modalQ10').modal('open');
            }
        });

        $("#q10btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group10]:checked").val() === undefined) {
                console.log($("input[name=group10]:checked").val())
                if ($("#error10").hasClass("hidden")) {
                    $("#error10").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error10").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ11').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ10').modal('close');
                $('#modalQ11').modal('open');
            }
        });

        $("#q11btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group11]:checked").val() === undefined) {
                console.log($("input[name=group11]:checked").val())
                if ($("#error11").hasClass("hidden")) {
                    $("#error11").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error11").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ12').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ11').modal('close');
                $('#modalQ12').modal('open');
            }
        });

        $("#q12btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group12]:checked").val() === undefined) {
                console.log($("input[name=group12]:checked").val())
                if ($("#error12").hasClass("hidden")) {
                    $("#error12").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error12").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ13').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ12').modal('close');
                $('#modalQ13').modal('open');
            }
        });

        $("#q13btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group13]:checked").val() === undefined) {
                console.log($("input[name=group13]:checked").val())
                if ($("#error13").hasClass("hidden")) {
                    $("#error13").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error13").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ14').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ13').modal('close');
                $('#modalQ14').modal('open');
            }
        });

        $("#q14btn").on("click", function (e) {
            e.preventDefault();
            if ($("input[name=group14]:checked").val() === undefined) {
                console.log($("input[name=group14]:checked").val())
                if ($("#error14").hasClass("hidden")) {
                    $("#error14").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error14").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {

                $('#modalQ15').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 800,
                    outDuration: 300
                });
                $('#modalQ14').modal('close');
                $('#modalQ15').modal('open');
            }
        });

        // var getTotal = function(scores){
        //     var scoreNums = scores.map(function (i) {
        //         return parseInt(i, 10);
        //     });
        //     var userTotal = scoreNums.reduce((a, b) => a + b)
        //     return userTotal;

        // }

        $("#q15btn").on("click", function (e) {
            e.preventDefault();
            if ($("#saveNeighborhood").hasClass("hidden")) {
                $("#saveNeighborhood").removeClass("hidden");
            } 

            if ($("input[name=group15]:checked").val() === undefined) {
                console.log($("input[name=group15]:checked").val())
                if ($("#error15").hasClass("hidden")) {
                    $("#error15").removeClass("hidden").fadeIn(100).fadeTo(2000, 0);
                } else {
                    $("#error15").fadeTo(2000, 100).fadeTo(2000, 0);
                }
            } else {
                $('#modalQ15').modal('close');
                var userScores = [
                    $("input[name=group1]:checked").val(),
                    $("input[name=group2]:checked").val(),
                    $("input[name=group3]:checked").val(),
                    $("input[name=group4]:checked").val(),
                    $("input[name=group5]:checked").val(),
                    $("input[name=group6]:checked").val(),
                    $("input[name=group7]:checked").val(),
                    $("input[name=group8]:checked").val(),
                    $("input[name=group9]:checked").val(),
                    $("input[name=group10]:checked").val(),
                    $("input[name=group11]:checked").val(),
                    $("input[name=group12]:checked").val(),
                    $("input[name=group13]:checked").val(),
                    $("input[name=group14]:checked").val(),
                    $("input[name=group15]:checked").val()
                ];

                var scoreNums = userScores.map(function (i) {
                    return parseInt(i, 10);
                });
                var userTotal = scoreNums.reduce((a, b) => a + b);
                var match;

                if (userTotal <= 105) {
                    match = "Pilsen";
                } else if (userTotal <= 135) {
                    match = "Logan Square";
                } else if (userTotal <= 165) {
                    match = "Hyde Park";
                } else if (userTotal <= 195) {
                    match = "Wicker Park";
                } else if (userTotal <= 225) {
                    match = "Ukrainian Village";
                } else if (userTotal <= 255) {
                    match = "Andersonville";
                } else if (userTotal <= 285) {
                    match = "West Loop";
                } else if (userTotal <= 315) {
                    match = "Lincoln Park";
                } else if (userTotal <= 345) {
                    match = "Wrigleyville";
                } else if (userTotal <= 375) {
                    match = "River North";
                };
                console.log("match", match);

                $.get("/api/results/" + match, function (data) {
                    var isLoggedIn = JSON.parse(localStorage.getItem("savedemail"));
                    console.log("email", isLoggedIn);
                    if(isLoggedIn === null){
                        $("#saveNeighborhood").addClass("hidden")
                        $(".results-close").removeClass("modal-close").text("");

                    }
                    $('#modal1').modal({
                        dismissible: false,
                        opacity: 0.5,
                        inDuration: 2000,
                        outDuration: 300
                    });
                    $('#modal1').modal('open');
                    console.log("data", data);
                    console.log("data for neigh", data.data.detailData);

                    $("#neighborhoodName").text(data.data.nameData.Name);
                    $("#neighborhoodName").val(data.data.nameData.Name);
                    $(".description").text(data.data.nameData.Description);
                    $('body').css('background', "url(.." + data.data.nameData.Image + ")");

                    $(".mapAppend").html("<img class='map' src='" + data.data.nameData.Map_image + "'>");
                    $(".foodAppend").html("<div class='leftDiv col s12 l4' id='food1'>" + "<a class='link1'>" + data.data.detailData[0].Name + "</a>" + "<p>" + data.data.detailData[0].Description + "</p>" + "<img class='img-responsive imageThumbs' src='" + data.data.detailData[0].Image + "'>" + "</div>" + "<div class='middleDiv col s12 l4' id='food2'>" + "<a class='link2'>" + data.data.detailData[1].Name + "</a>" + "<p>" + data.data.detailData[1].Description + "</p>" + "<img class='img-responsive imageThumbs' src='" + data.data.detailData[1].Image + "'>" + "</div>" + "<div class='rightDiv col s12 l4' id='food3'>" + "<a class='link3'>" + data.data.detailData[2].Name + "</a>" + "<p>" + data.data.detailData[2].Description + "</p>" + "<img class='img-responsive imageThumbs' src='" + data.data.detailData[2].Image + "'>" + "</div>");
                    $(".funAppend").html("<div class='leftDiv col s12 l4'>" + "<a class='link4'>" + data.data.detailData[3].Name + "</a>" + "<p>" + data.data.detailData[3].Description + "</p>" + "<img class='img-responsive imageThumbs' src='" + data.data.detailData[3].Image + "'>" + "</div>" + "<div class='middleDiv col s12 l4'>" + "<a class='link5'>" + data.data.detailData[4].Name + "</a>" + "<p>" + data.data.detailData[4].Description + "</p>" + "<img class='img-responsive imageThumbs' src='" + data.data.detailData[4].Image + "'>" + "</div>" + "<div class='rightDiv col s12 l4'>" + "<a class='link6'>" + data.data.detailData[5].Name + "</a>" + "<p>" + data.data.detailData[5].Description + "</p>" + "<img class='img-responsive imageThumbs' src='" + data.data.detailData[5].Image + "'>" + "</div>");
                    $("#transit").attr('src', data.data.nameData.Walkscore_transit);
                    $("#walk").attr('src', data.data.nameData.Walkscore_walk);
                    $("#bike").attr('src', data.data.nameData.Walkscore_bike);

                    $(".link1").attr({ href: data.data.detailData[0].Link, target: '_blank', class: 'resultLink' });
                    $(".link2").attr({ href: data.data.detailData[1].Link, target: '_blank', class: 'resultLink' });
                    $(".link3").attr({ href: data.data.detailData[2].Link, target: '_blank', class: 'resultLink' });
                    $(".link4").attr({ href: data.data.detailData[3].Link, target: '_blank', class: 'resultLink' });
                    $(".link5").attr({ href: data.data.detailData[4].Link, target: '_blank', class: 'resultLink' });
                    $(".link6").attr({ href: data.data.detailData[5].Link, target: '_blank', class: 'resultLink' });

                    $("#walkbtn").on("click", function () {
                        $(".description").text(data.data.nameData.Walkscore_desc);
                    })
                    $("#foodbtn").on("click", function () {
                        $(".description").text(data.data.nameData.Restaurant_desc);
                    });
                    $("#funbtn").on("click", function () {
                        $(".description").text(data.data.nameData.Attraction_desc);
                    });
                    $("#mapbtn").on("click", function () {
                        $(".description").text(data.data.nameData.Description);
                    });

                });
            }
            // Clear the question values on submit
            $('.radio-button').prop('checked', false);
            
        });

    };
    
    if (window.location.hash === '#quizStart') {quizStart();}

/* Emails.
* @function save
* @param {string} 
* @function store
* @param {string} 
* @function getValues
* @return 
* @param {string}
*/


    $("#saveNeighborhood").click(function () {
        var userEmail = JSON.parse(localStorage.getItem("savedemail"));
        userEmail = userEmail.toString();
        var emailInfo = { email: userEmail };
        var neighborhood = JSON.parse(localStorage.getItem("savedhood"));
        neighborhood = [];
        var hoodName = $("#neighborhoodName").val();
        var hoodObj = {
            hood: hoodName
        };
        console.log(hoodObj);
        neighborhood.push(hoodName);
        localStorage.setItem("savedhood", JSON.stringify(neighborhood));
        
        loadSaved();
        updateNeighborhood(hoodObj);

        function updateNeighborhood(hood) {
            console.log("hood", hood);
            $.ajax({
                method: "PUT",
                url: "/api/users/" + userEmail,
                data: hood
            })
            .then(function (data) {
                console.log(data)
            });
        }
    })

/* Save Neigborhood.
* @function save
* @param {string} 
* @function store
* @param {string} 
* @function getValues
* @return 
* @param {string}
*/


    $(document).on("click", "#savedHood", function () {
        var email = JSON.parse(localStorage.getItem("savedemail"));
        $.get("/api/users/" + email, function (emaildata) {
            console.log(emaildata)

        }).then(function (data) {
            $.get("/api/results/" + data[0].Saved, function (data) {
                console.log("hood", data);
                $('#modal1').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 2000,
                    outDuration: 300
                });
                $('#modal1').modal('open');
                console.log("data", data);
                console.log("data for neigh", data.data.detailData);

                $("#neighborhoodName").text(data.data.nameData.Name);
                $("#neighborhoodName").val(data.data.nameData.Name);
                $(".description").text(data.data.nameData.Description);
                $('body').css('background', "url(.." + data.data.nameData.Image + ")");
                // $('body').css('background', "url(.." + data.data.nameData.Image + ")no-repeat center center-fixed");

                $(".mapAppend").html("<img class='map' src='" + data.data.nameData.Map_image + "'>");
                $(".foodAppend").html("<div class='leftDiv col s12 l4' id='food1'>" + "<a class='link1'>" + data.data.detailData[0].Name + "</a>" + "<p>" + data.data.detailData[0].Description + "</p>" + "<img src='" + data.data.detailData[0].Image + "'>" + "</div>" + "<div class='middleDiv col s12 l4' id='food2'>" + "<a class='link2'>" + data.data.detailData[1].Name + "</a>" + "<p>" + data.data.detailData[1].Description + "</p>" + "<img src='" + data.data.detailData[1].Image + "'>" + "</div>" + "<div class='rightDiv col s12 l4' id='food3'>" + "<a class='link3'>" + data.data.detailData[2].Name + "</a>" + "<p>" + data.data.detailData[2].Description + "</p>" + "<img src='" + data.data.detailData[2].Image + "'>" + "</div>");
                $(".funAppend").html("<div class='leftDiv col s12 l4'>" + "<a class='link4'>" + data.data.detailData[3].Name + "</a>" + "<p>" + data.data.detailData[3].Description + "</p>" + "<img src='" + data.data.detailData[3].Image + "'>" + "</div>" + "<div class='middleDiv col s12 l4'>" + "<a class='link5'>" + data.data.detailData[4].Name + "</a>" + "<p>" + data.data.detailData[4].Description + "</p>" + "<img src='" + data.data.detailData[4].Image + "'>" + "</div>" + "<div class='rightDiv col s12 l4'>" + "<a class='link6'>" + data.data.detailData[5].Name + "</a>" + "<p>" + data.data.detailData[5].Description + "</p>" + "<img src='" + data.data.detailData[0].Image + "'>" + "</div>");
                $("#transit").attr('src', data.data.nameData.Walkscore_transit);
                $("#walk").attr('src', data.data.nameData.Walkscore_walk);
                $("#bike").attr('src', data.data.nameData.Walkscore_bike);

                $(".link1").attr({ href: data.data.detailData[0].Link, target: '_blank', class: 'resultLink' });
                $(".link2").attr({ href: data.data.detailData[1].Link, target: '_blank', class: 'resultLink' });
                $(".link3").attr({ href: data.data.detailData[2].Link, target: '_blank', class: 'resultLink' });
                $(".link4").attr({ href: data.data.detailData[3].Link, target: '_blank', class: 'resultLink' });
                $(".link5").attr({ href: data.data.detailData[4].Link, target: '_blank', class: 'resultLink' });
                $(".link6").attr({ href: data.data.detailData[5].Link, target: '_blank', class: 'resultLink' });

                $("#walkbtn").on("click", function () {
                    $(".description").text(data.data.nameData.Walkscore_desc);
                })
                $("#foodbtn").on("click", function () {
                    $(".description").text(data.data.nameData.Restaurant_desc);
                });
                $("#funbtn").on("click", function () {
                    $(".description").text(data.data.nameData.Attraction_desc);
                });
                $("#mapbtn").on("click", function () {
                    $(".description").text(data.data.nameData.Description);
                });
            });
        })
    })



    // var favorites = JSON.parse(localStorage.getItem("savedplaces"));
    var emailInfo = JSON.parse(localStorage.getItem("savedemail"));
    var savedHood = JSON.parse(localStorage.getItem("savedhood"));

    if (!Array.isArray(emailInfo)) {
        emailInfo = [];
    }

    if (!Array.isArray(savedHood)) {
        savedHood = [];
    }

    /** Saves email in local storage and replaces if one already exists
     * @return {function} checkEmail - after saving, runs check email to validate
     */
    
    function saveEmailInfo() {
        emailInfo = [];
        var email = $("#email").val().trim();
        emailInfo.push(email);
        localStorage.setItem("savedemail", JSON.stringify(emailInfo));
        console.log("saved", emailInfo);
        checkEmail();
    }



    $("#retake").on("click", function () {
        $('.radio-button').prop('checked', false);
    
        quizStart();
    });

    $(".restart-quiz").on("click", function(){
        console.log("retake button clicked")
        $('.radio-button').prop('checked', false);
        $('#modal1').modal('close');
        quizStart();
    });


    $("#logout").on("click", function(){
        emailInfo = [];
        localStorage.setItem("savedemail", JSON.stringify(emailInfo));
        hoodInfo = [];
        localStorage.setItem("savedhood", JSON.stringify(hoodInfo));
    })

    $(".home").on("click", function(){
        window.location.href = "/index.html";
    })


    function loadSaved() {
        var email = JSON.parse(localStorage.getItem("savedemail"));
        var hood = JSON.parse(localStorage.getItem("savedhood"));
        $("#savedName").text(hood);
        $(".loggedIn").removeClass("hidden");
        $("#localEmail").text("Hi, " + email);
    }

    if (window.location.hash === '#loadSaved') { loadSaved(); }

});