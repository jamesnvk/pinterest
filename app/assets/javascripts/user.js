// load comments
$(function(){
  $('#load-more').on('click', function(){
    var userId = parseInt($('#load-more').attr('data-id'))
    $.get("/users/" + userId, function(data){
      $('#load-more').remove()
        $.each(data.comments, function(i, item){
          $('.data').append(item.content)
        })
    })
  })
})


