(function(){

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
    return Pin.template(this) // builds the HTML string json and returns the object (pin) itself
  }

  function createPin(data){
    var pin = new Pin(data)
    var pinDisplay = pin.renderDisplay()
    $('#pinResults').html(pinDisplay)
    $('.js-next').attr('data-id', data['id'])
  }

  Pin.nextPage = function(){
    $('.js-next').on('click', function(e){
      e.preventDefault
      var currentId = parseInt($('.js-next').attr('data-id'))
      var nextId = parseInt($('.js-next').attr('data-id')) + 1
        $.get("/pins/" + nextId + ".json", function(data) {
          createPin(data)
        // if next pin page id does not exist
      }).fail(function(){
        $.get("/pins.json", function(data){
          for(let i = 0; i < data.length; i++){
            // find current id in data array
            if(data[i].id === currentId){
              // set new pin to the next nearest id in data array
              var pin = new Pin(data[i - 1])
              var pinDisplay = pin.renderDisplay()
              $('#pinResults').html(pinDisplay)
              $('.js-next').attr('data-id', data['id'])
            }
          }   
        })
      })
    })
  }

  Pin.destroy = function(){
    $('.deletePin').on('click', function(e){

      var action = $(this).attr('href')
      //debugger
      $.ajax({
        url: action,
        dataType: "json",
        method: "DELETE"
      }).success(function(){
        
      }).error(function(error){
        debugger
        alert("did not succeed")
      })
    return false
    })
  }

  $(function(){
    Pin.templateSource = $("#pin-template").html() // grabs source of template
    Pin.template = Handlebars.compile(Pin.templateSource) // Handlebars compiles the given template
    Pin.nextPage()
    Pin.destroy()
  })

})();