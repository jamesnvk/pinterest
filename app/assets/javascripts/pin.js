$(function(){
  $('.js-next').on('click', function(e){
    e.preventDefault
   var nextId = parseInt($('.js-next').attr('data-id')) + 1
   $.get("/pins/" + nextId + ".json", function(data) {
    var pin = new Pin(data)
    });
  })
})


function Pin(attributes) {
  this.description = attributes.description
  this.userId = attributes.user_id
  this.id = attributes.id
  this.imageFileName = attributes.image_file_name
  this.imageContentType = attributes.image_content_type
  this.imageFileSize = attributes.image_file_size
  this.imageUpdatedAt = attributes.image_updated_at
}

