$(document).ready(function() {
  // Muestra menú lateral en side nav
  $('.button-collapse').sideNav();

  // Selecciona elementos
  var area = $('#text-post');
  var publish = $('#btn-post');
  var containerPost = $('#container-post');
  var addPhoto = $('#add-photo');
  var sendPhoto = $('.send-photo');
  var inputPhoto = $('.input-file');

  // Añade evento al botón 'publish' para crear posts
  $(publish).on('click', function(event) {
    // Creamos elementos    
    var comment = $(area).val();
    var infoUser = 
      '<div class="row">' + 
        '<div class="col s2 m2">' + 
          '<img class="circle responsive-img" src="../assets/images/user-data/user.jpg" alt="foto del usuario">' +
        '</div>' +
        '<div class="col s10 m10">' + 
          '<label class="black-text">' +
            '<h5>Hanna Dick</h5>' + moment().format('LLL') +
          '</label>' +
        '</div>' + 
      '</div>';
    var textPost = 
      '<div class="card-content">' +
        '<p class="col s12 m12">' + comment + '</p>' +
      '</div>';
    var buttons =
      '<div class="card-action right-align">' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">favorite_border</i>' +
        '</a>' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">comment</i>' +
        '</a>' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">share</i>' +
        '</a>' +
      '</div>';
    
    if ($(area).val()) {
      var containerNewPost = '<div class="row"><div class="col s12 m12"><div class="card">' + infoUser + textPost + buttons + '</div></div></div>';
      
      $(containerPost).prepend(containerNewPost);

      $(area).val('');
      $(area).focus();
    } 
    // else {
    //   $(this).attr('disabled', 'true');
    // }
  });

  // Añade evento al botón 'addPhoto' para crear posts con imagen
  $(addPhoto).on('click', function(event) {
    console.log(inputPhoto);
    // muestra el nombre del archivo a subir y botón OK.
    $(inputPhoto).attr({'class': 'show-on-small'});
    // crea elementos
    var infoUser = 
            '<div class="row">' + 
              '<div class="col s2 m2">' + 
                '<img class="circle responsive-img valign-wrapper user-post" src="../assets/images/user-data/user.jpg" alt="foto del usuario">' +
              '</div>' +
              '<div class="col s10 m10">' + 
                '<label for="user-post" class="black-text">' +
                  '<h5>Hanna Dick</h5>' + moment().format('LLL') +
                '</label>' +
              '</div>' + 
            '</div>';
    var img = 
        '<div class="card-content col s12 m12">' + photo +
        '</div>';
    var buttons =
        '<div class="card-action right-align">' +
          '<a href="#">' +
            '<i class="material-icons red-text lighten-3-text">favorite_border</i>' +
          '</a>' +
          '<a href="#">' +
            '<i class="material-icons red-text lighten-3-text">comment</i>' +
          '</a>' +
          '<a href="#">' +
            '<i class="material-icons red-text lighten-3-text">share</i>' +
          '</a>' +
        '</div>';
    
    var photo = new FileReader(); 
    $(photo).on('load', function(e) {
      $(img).attr({'src': e.target.result});
    });
   
    $(sendPhoto).on('click', function() {
      var postImg = '<div class="row"><div class="col s12 m12"><div class="card">' + infoUser + img + buttons + '</div></div></div>';
    
      $(containerPost).prepend(postImg);
    });
  });
  //     var photo = new FileReader();console.log(photo);

  //     // $('inputPhoto[type=file]').change(function() {
  //     //   var file = (this.files[0].toString);
  //     //   // permite que las aplicaciones web lean ficheros (o información en buffer) almacenados en el cliente de forma asíncrona
  //     //   var reader = new FileReader();

  //     //   $(inputPhoto).text('');
  //     //   $(inputPhoto).text(file);
        
  //       // $(reader).onload(function(e){
  //       //   $('#preview img').attr({'src', e.target.result});
  //       // });

  //       //reader.readAsDataURL(this.files[0]);
  //     });


  // Genera modal
  $('.modal').modal();

  // funcion para filtrado
  var container = $('#container-posts');
  for (i = 0; i < data.length; i++) {
    var grupo = 
  '<div class="col s6 m4 l3 collection card-image card-border hoverable" data-type=' + data[i].type + ' >' + 
    '<div class="card">' +
      '<div class="card-image">' +
      '<img id="post-height" class="responsive-img modal-trigger content" data-name =' + data[i].name + ' data-image =' + data[i].image + ' data-user =' + data[i].user + ' data-description = "' + data[i].description + '" href="#modal-post" src=' + data[i].image + '>' +
    '</div>' +
    '<div class="card-content">' +
    '<p>' + data[i].name + '</p>' +
    '</div>' +
  '</div>';
    container.append(grupo);
  }
 
  $('.heart').click(function(event) {
    console.log(event.target);
    $(this).toggleClass('favorite');
  });
     
  // FILTRO DE POSTS
  $('#search-post').keyup(function() {
    var name = $(this).val().toLowerCase();
    $('.collection').hide();
    $('.collection').each(function() {
      var search = $(this).text();
      if (search.indexOf(name) !== -1) { // filtrado por nombre
        $(this).show();
      }
    });
    $('.collection').each(function() { 
      var search = $(this).text();
      var type = $(this).data('type');// filtrado por tipo
      if (type.indexOf(name) !== -1) {
        $(this).show();
      }
    });
  });
 
  // MODAL
  $('.content').click(function() {
    var name = $(this).data('name'),
      image = $(this).data('image'),
      description = $(this).data('description'),
      user = $(this).data('user');
       
    $('.name').text(name);
    $('.image').attr('src', image);
    $('.description').text(description);
    $('.user-post').attr('src', user);
  });
});