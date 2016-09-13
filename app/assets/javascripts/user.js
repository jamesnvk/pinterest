// load comments
$(function(){
  $('.load-more').on('click', function(){
    //debugger
    var userId = $(this).data('id')
    $.get("/users/" + userId).done(function(data){
        $.each(data.comments, function(i, item){
          $('#data-' + item.user_id).append(i + 1 + ". ", item.content + "<br>")
        })
    })
  })
})
