$(function(){
  $('.js-next').on('click', function(e){
    e.preventDefault
   var nextId = parseInt($('.js-next').attr('data-id')) + 1
   $.get("/pins/" + nextId + ".json", function(data) {
    debugger;
    });
  })
})
