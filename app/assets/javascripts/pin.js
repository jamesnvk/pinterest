function Pin(attributes) {
  this.description = attributes.description
  this.userId = attributes.user_id
  this.id = attributes.id
  this.imageFileName = attributes.image_file_name
  this.imageContentType = attributes.image_content_type
  this.imageFileSize = attributes.image_file_size
  this.imageUpdatedAt = attributes.image_updated_at
  this.username = attributes.user.name
}

Pin.prototype.renderDisplay = function() {
  return Pin.template(this) // returns the object (pin) itself
}

$(function(){
  Pin.templateSource = $("#pin-template").html() // grabs source of template
  Pin.template = Handlebars.compile(Pin.templateSource) // Handlebars compiles the given template
})

//show page next pin
$(function(){
  $('.js-next').on('click', function(e){
    e.preventDefault
   var nextId = parseInt($('.js-next').attr('data-id')) + 1
   $.get("/pins/" + nextId + ".json", function(data) {
    var pin = new Pin(data)
    var pinDisplay = pin.renderDisplay()
    $('#pinResults').html(pinDisplay)
    $('.js-next').attr('data-id', data['id'])
    });
  })
})
