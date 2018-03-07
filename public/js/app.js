$(document).ready(function(){

    $(".start").on("click", function(e) {
        e.preventDefault();
        $('#modalStart').modal({
            dismissible: false, 
            opacity: 0.5,
            inDuration: 500,
            outDuration: 200 // Transition in duration
        });
        $('#modalStart').modal('open');

    });


    $("#q1btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group1]:checked").val())
        $('#modalQ2').modal({dismissible: false, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300 
        });
        $('#modalStart').modal('close');
        $('#modalQ2').modal('open');

    });

    $("#q2btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group2]:checked").val())
        $('#modalQ3').modal({dismissible: false, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ2').modal('close');
        $('#modalQ3').modal('open');
    });

    $("#q3btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group3]:checked").val())
        $('#modalQ4').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ3').modal('close');
        $('#modalQ4').modal('open');
    });

    $("#q4btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group4]:checked").val())
        $('#modalQ5').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ5').modal('open');
    });

    $("#q5btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group5]:checked").val())
        $('#modalQ6').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ6').modal('open');
    });

    $("#q6btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group6]:checked").val())
        $('#modalQ7').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ7').modal('open');
    });

    $("#q7btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group7]:checked").val())
        $('#modalQ8').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ8').modal('open');
    });

    $("#q8btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group8]:checked").val())
        $('#modalQ9').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ9').modal('open');
    });

    $("#q9btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group9]:checked").val())
        $('#modalQ10').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ10').modal('open');
    });

    $("#q10btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group10]:checked").val())
        $('#modalQ11').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ11').modal('open');
    });

    $("#q11btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group11]:checked").val())
        $('#modalQ12').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ12').modal('open');
    });

    $("#q12btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group12]:checked").val())
        $('#modalQ13').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ13').modal('open');
    });

    $("#q13btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group13]:checked").val())
        $('#modalQ14').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ14').modal('open');
    });

    $("#q14btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group14]:checked").val())
        $('#modalQ15').modal({dismissible: true, 
            opacity: 0.5,
            inDuration: 800,
            outDuration: 300
        });
        $('#modalQ15').modal('open');
    });

    $("#q15btn").on("click", function(e) {
        e.preventDefault();
        console.log($("input[name=group15]:checked").val())
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
            console.log("user array scores", userScores);

    });

});
