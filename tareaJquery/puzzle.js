

$(document).ready(function () {

   var imagenes = [8];
   imagenes[0] = "<img src='img/fila-1-col-1.jpg'>";
   imagenes[1] = "<img src='img/fila-1-col-2.jpg'>";
   imagenes[2] = "<img src='img/fila-1-col-3.jpg'>";
   imagenes[3] = "<img src='img/fila-2-col-1.jpg'>";
   imagenes[4] = "<img src='img/fila-2-col-2.jpg'>";
   imagenes[5] = "<img src='img/fila-2-col-3.jpg'>";
   imagenes[6] = "<img src='img/fila-3-col-1.jpg'>";
   imagenes[7] = "<img src='img/fila-3-col-2.jpg'>";
   imagenes[8] = "<img src='img/fila-3-col-3.jpg'>";


 
   $('#div-1').html(imagenes[6]);
   $('#div-2').html(imagenes[3]);
   $('#div-3').html(imagenes[7]);
   $('#div-4').html(imagenes[8]);
   $('#div-5').html(imagenes[0]);
   $('#div-6').html(imagenes[2]);
   $('#div-7').html(imagenes[1]);
   $('#div-8').html(imagenes[5]);
   $('#div-9').html(imagenes[4]);



   //console.log("Solución:" + imagenes);
   $("#puzzle").sortable({
      update: function () {
         var imagenesReordenadas = $("#puzzle").sortable("serialize", { key: "pieza" });
         //console.log(imagenesReordenadas);
         if (imagenesReordenadas == "pieza=5&pieza=7&pieza=6&pieza=2&pieza=9&pieza=8&pieza=1&pieza=3&pieza=4") {
            $('img').css('border', 'none');
            alert("Lo has logrado! Bonito lobo ¿no?");
         }
      }
   });
});




