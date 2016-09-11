function Comment(attributes) {
  this.content= attributes.description
  this.userId = attributes.user_id
}

Comment.prototype.renderDisplay = function() {
  return Comment.template(this) // returns the object (comment) itself
}

$(function(){
  Pin.templateSource = $("#pin-template").html() // grabs source of template
  Pin.template = Handlebars.compile(Pin.templateSource) // Handlebars compiles the given template
})


$(function(){
  $('.new_comment').on('submit', function(e){
    e.preventDefault()

  })
})
