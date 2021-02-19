const file = document.querySelector("#file");

file.onchange = function(e) {
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();
    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(e.target.files[0]);
    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function(){  
      let preview = document.getElementById('preview')
          image = document.createElement('img');
          image.src = reader.result;
          preview.appendChild(image);

          let widthImg =image.width;
          let heigthImg =image.offsetHeight;
          console.log(widthImg);
          console.log(heigthImg);
          if(widthImg > heigthImg){
            image.classList.add("imagen");
            image.classList.add("imgVertical");
          }else{
            image.classList.add("imagen");
            
          }

    };
  }
