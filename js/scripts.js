$(document).ready(function() {
  $("#blank form").submit(function(event){

    var blanks = ["adjective1", "noun1", "verb1", "adverb1", "adjective2", "noun2", "noun3", "adjective3", "verb2", "adverb2", "verb3", "adjective4"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });


    // var adjective1Input = $("#adjective1").val();
    // var noun1Input = $("#noun1").val();
    // var verb1Input = $("#verb1").val();
    // var adverb1Input = $("#adverb1").val();
    // var adjective2Input = $("#adjective2").val();
    // var noun2Input = $("#noun2").val();
    // var noun3Input = $("#noun3").val();
    // var adjective3Input = $("#adjective3").val();
    // var verb2Input = $("#verb2").val();
    // var adverb2Input = $("#adverb2").val();
    // var verb3Input = $("#verb3").val();
    // var adjective4Input = $("#adjective4").val();
    //
    // $(".adjective1").text(adjective1Input);
    // $(".noun1").text(noun1Input);
    // $(".verb1").text(verb1Input);
    // $(".adverb1").text(adverb1Input);
    // $(".adjective2").text(adjective2Input);
    // $(".noun2").text(noun2Input);
    // $(".noun3").text(noun3Input);
    // $(".adjective3").text(adjective3Input);
    // $(".verb2").text(verb2Input);
    // $(".adverb2").text(adverb2Input);
    // $(".verb3").text(verb3Input);
    // $(".adjective4").text(adjective4Input);

    $(".story").slideDown();
    event.preventDefault();
  });
});
