// $(".modal-trigger").on("click", function(e){
//     e.preventDefault();
//     $('#modal1').modal('open');
//   });

$(".start").on("click", function(e) {
    e.preventDefault();
    $('#modalStart').modal({dismissible: true, opacity: 0.5});
    $('#modalStart').modal('open');
});

$("#q1btn").on("click", function(e) {
    e.preventDefault();
    $('#modalQ2').modal({dismissible: true, opacity: 0.5});
    $('#modalQ2').modal('open');
});