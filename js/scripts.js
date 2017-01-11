$(document).ready(function() {
  $("#blank form").submit(event){

    $(".story").show();
    event.preventDefault();
  }
});
