$(".start").on("click", function(e) {
    e.preventDefault();
    $('#modalStart').modal({
        dismissible: true, 
        opacity: 0.5,
        inDuration: 500,
        outDuration: 200 // Transition in duration
    });
    $('#modalStart').modal('open');
});

// var formValidation = function(){
//     var valid = true;
//     $(".select").each(function(){
//         if ($(this).val() === ""){
//             valid = false;
//         }
//     });
//     $(".select").each(function(){
//         if ($(this).val() === null){
//             valid = false;
//         }
//     });
//     $("#name").each(function() {
//         if( $(this).val() === ""){
//             valid = false
//         }
//     });
// return valid;
// }
// formValidation();
// if (formValidation() === false){
//     console.log("please select a response")
// };
// if (formValidation() === true){
    
//     var user = $("#name").val();
//     var scores = [
//         $("#q1").val(),
//         $("#q2").val(),
//         $("#q3").val(),
//         $("#q4").val(),
//         $("#q5").val(),
//         $("#q6").val(),
//         $("#q7").val(),
//         $("#q8").val(),
//         $("#q9").val(),
//         $("#q10").val()
//     ]
// }

$("#q1btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ2').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300 
    });
    $('#modalQ2').modal('open');
});

$("#q2btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ3').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ3').modal('open');
});

$("#q3btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ4').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ4').modal('open');
});

$("#q4btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ5').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ5').modal('open');
});

$("#q5btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ6').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ6').modal('open');
});

$("#q6btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ7').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ7').modal('open');
});

$("#q7btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ8').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ8').modal('open');
});

$("#q8btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ9').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ9').modal('open');
});

$("#q9btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ10').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ10').modal('open');
});

$("#q10btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ11').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ11').modal('open');
});

$("#q11btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ12').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ12').modal('open');
});

$("#q12btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ13').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ13').modal('open');
});

$("#q13btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ14').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ14').modal('open');
});

$("#q14btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ15').modal({dismissible: true, 
        opacity: 0.5,
        inDuration: 800,
        outDuration: 300
    });
    $('#modalQ15').modal('open');
});

// $(".filled-in").on("click", function(){
//     $(".filled-in.checked").removeClass("checked");
//     $(this).addClass("checked");
// });

$(".item").on("click", function () {
    $(".item").removeProp("checked")
    $(this).prop("checked", this.checked);
});