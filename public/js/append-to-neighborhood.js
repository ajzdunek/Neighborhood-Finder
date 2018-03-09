<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"
/>;

$(document).ready(function() {
  //JavaScript test
  // console.log("I am working");

  //   //Click "Results" to find match
  //   $("#resultsBtn").click(function() {
  //     //Values of user's inputs
  //     var input = {
  //       name: $("#name").val(),
  //       imageURL: $("#imageURL").val(),
  //       scores: [
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
  //       ]
  //     };

  //Push user's inputs into friend arrays
  $.post("/api/_____", input).done(function(data) {
    // Neighborhood name at top of modal
    $("#neighborhoodName").html(data._____.______);

    // Modal tabs
    $(".mapTab").attr("src", data._____.______); //Google Maps?

    $(".walkScoreTab").attr(
      "src",
      data.______._____,
      data.______._____,
      data.______._____
    ); //Three image links

    $(".foodTab").attr("src", data.______.______);
    $(".funTab").attr("src", data.______._______);

    $("neighborhoodImage").attr("src", data.______._______);
  });
});
// });
