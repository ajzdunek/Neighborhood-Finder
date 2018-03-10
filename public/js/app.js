$(document).ready(function () {

    $(".start").on("click", function (e) {
        e.preventDefault();
        $('#modalStart').modal({
            dismissible: false,
            opacity: 0.5,
            inDuration: 500,
            outDuration: 200 // Transition in duration
        });
        $('#modalStart').modal('open');

    });


    $("#q1btn").on("click", function (e) {
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

            $.get("/api/results/" + match, function (data) {
                $('#modal1').modal({
                    dismissible: false,
                    opacity: 0.5,
                    inDuration: 2000,
                    outDuration: 300
                });
                $('#modal1').modal('open');
                console.log("data", data.data.nameData.Name);
                console.log("data for neigh", data.data.detailData[0]);

                $("#neighborhoodName").text(data.data.nameData.Name);
                $(".description").text(data.data.nameData.Description);
                $(".foodAppend").html("<div class='leftDiv col s12 l3'>" + "<h4>" + data.data.detailData[0].Name + "</h4>" + "<p>" + data.data.detailData[0].Description + "</p>" + "</div>" + "<div class='middleDiv col s12 l3'>" + "<h4>" + data.data.detailData[1].Name + "</h4>" + "<p>" + data.data.detailData[1].Description + "</p>" + "</div>" + "<div class='rightDiv col s12 l3'>" + "<h4>" + data.data.detailData[2].Name + "</h4>" + "<p>" + data.data.detailData[2].Description + "</p>" + "</div>");
                $(".funAppend").html("<div class='leftDiv col s12 l3'>" + "<h4>" + data.data.detailData[3].Name + "</h4>" + "<p>" + data.data.detailData[3].Description + "</p>" + "</div>" + "<div class='middleDiv col s12 l3'>" + "<h4>" + data.data.detailData[4].Name + "</h4>" + "<p>" + data.data.detailData[4].Description + "</p>" + "</div>" + "<div class='rightDiv col s12 l3'>" + "<h4>" + data.data.detailData[5].Name + "</h4>" + "<p>" + data.data.detailData[5].Description + "</p>" + "</div>");
                // $(".walkAppend").html("<div class='transit col s12 l4>" + "<img src='" + data.data.nameData.Walkscore_transit + "'>");
            });
        }

        // Clear the question values on submit
        $("input[name=group1]:checked").val(""),
            $("input[name=group2]:checked").val(""),
            $("input[name=group3]:checked").val(""),
            $("input[name=group4]:checked").val(""),
            $("input[name=group5]:checked").val(""),
            $("input[name=group6]:checked").val(""),
            $("input[name=group7]:checked").val(""),
            $("input[name=group8]:checked").val(""),
            $("input[name=group9]:checked").val(""),
            $("input[name=group10]:checked").val(""),
            $("input[name=group11]:checked").val(""),
            $("input[name=group12]:checked").val(""),
            $("input[name=group13]:checked").val(""),
            $("input[name=group14]:checked").val(""),
            $("input[name=group15]:checked").val("")



    });

});

// module.exports = app;