// .jumbotron.clickable-items

$( ".note-element" ).click(function() {
  if(!$( "#main-content" ).hasClass("background-blur")){
    $( "#main-content" ).addClass( "background-blur" );
    $("#selected-content-parent").removeClass( "hide-element" );
    $("#click-space").removeClass( "hide-element" );
  }
});

$( "#click-space" ).click(function() {
  if($( "#main-content" ).hasClass("background-blur")){
    $( "#main-content" ).removeClass( "background-blur" );
    $("#selected-content-parent").addClass( "hide-element" );
    $("#click-space").addClass( "hide-element" );
  }
});
click-space
