var imageLoader = document.getElementById('filePhoto');
    imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
    var reader = new FileReader();
    console.log('lida');
    reader.onload = function (event) {
        // $('#uploader img').attr('src',event.target.result);
        var img = "<img src='"+ event.target.result+"' >";
        $("#uploader").append(img);
    }
    reader.readAsDataURL(e.target.files[0]);
    
}

var dropbox;
dropbox = document.getElementById("uploader");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  //Para ver as propriedades de (e) digite
  //console.log(e);
  var dt = e.dataTransfer;
  var files = dt.files;
  
  //Esta linha de código dispara a função 'handleImage' (evento de mudança imageLoader)
  imageLoader.files = files;
}

  var boolean=false;
function mostrar(){

  if(!boolean){
$("#uploader").css("visibility", "visible")
    boolean=true;

  }
  else{
  $("#uploader").css("visibility", "hidden");
  boolean=false;
  }    
  
}