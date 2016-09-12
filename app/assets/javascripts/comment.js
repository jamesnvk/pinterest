function Comment(attributes) {
  this.content= attributes.content
  this.userId = attributes.user_id
  this.id = attributes.id
}

Comment.success = function(json){
 // debugger
  var comment = new Comment(json)
  var commentDisplay = comment.renderDisplay()
  $('#feedbackResults').append(commentDisplay)
}


Comment.prototype.renderDisplay = function() {
  return Comment.template(this) // builds the HTML string json and returns the object (comment) itself
}

$(function(){
  Comment.templateSource = $("#comment-template").html() // grabs source of template
  Comment.template = Handlebars.compile(Comment.templateSource) // Handlebars compiles the given template
})


$(function(){
  $('.new_comment').on('submit', function(e){
    e.preventDefault()
    var $form = $(this)
    var action = $form.attr("action")
    var params = $form.serialize()

    $.ajax({
      url: action,
      data: params,
      dataType: "json",
      method: "POST"
    }).success(Comment.success)
  })
})
