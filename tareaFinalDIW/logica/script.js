$(document).ready(function () {

    var imagenes = [11];
    imagenes[0] = "<img title='Tren Nocturno' alt='Tren Nocturno' src='../assets/img/japan-2014614_1280.jpg'>";
    imagenes[1] = "<img title='Personas bajo la luz roja' alt='Personas bajo la luz roja' src='../assets/img/japan-2014615_1280.jpg'>";
    imagenes[2] = "<img title='De bares en taxi' alt='De bares en taxi' src='../assets/img/japan-2014617_1280.jpg'>";
    imagenes[3] = "<img title='Tokyo Skytree' alt='Tokyo Skytree' src='../assets/img/tokyo-2086596_1920.jpg'>";
    imagenes[4] = "<img title='Rainbow Bridge' alt='Rainbow Bridge' src='../assets/img/sunset-4872552_1920.jpg'>";
    imagenes[5] = "<img title='Vendedora de lotería' alt='Vendedora de lotería' src='../assets/img/street-4807328_1280.jpg'>";
    imagenes[6] = "<img title='Mujer bajo el paraguas, por una callejuela' alt='Mujer bajo el paraguas, por una callejuela' src='../assets/img/japan-2014619_1280.jpg'>";
    imagenes[7] = "<img title='Bicicletas durmientes' alt='Bicicletas durmientes' src='../assets/img/japan-2014618_1280.jpg'>";
    imagenes[8] = "<img title='Noche azul' alt='Noche azul'src='../assets/img/japan-2014621_1280.jpg'>";
    imagenes[9] = "<img title='El Cruce de Shibuya en Tokio' alt='El Cruce de Shibuya en Tokio' src='../assets/img/shibuya-crossing-923000_1280.jpg'>";
    imagenes[10] = "<img title='Geisha frente a máquina dispensadora (contraste tradición y modernismo)' alt='Geisha frente a máquina dispensadora (contraste tradición y modernismo)' src='../assets/img/japan-5021733_1280.jpg'>";
    imagenes[11] = "<img title='La Torre de Tokio' alt='La Torre de Tokio' src='../assets/img/tokyo-1900649_1920.jpg'>";





    $('#main-galeria img').click(function (e) {

        var imgClikeada = $(this).attr('id');

        $('.volver').show();

        for (let i = 0; i < imagenes.length; i++) {
            const element = imagenes[i];

            if (imgClikeada == "img-" + i) {
                console.log(imgClikeada);
                $('#main-galeria').hide();
                $('#container-img-grande').html(element);
                $('#container-img-grande img').css({ width: '100%', height: '100%', 'margin-top': '5px' });
            }
        }
        e.preventDefault();
    });

    $(document).mousemove(function (event) {
        $("#samurai").css({
            left: event.pageX,
            top: event.pageY
        });
    })

    $(document).mousemove(function (event) {
        $("#coordenadas p span").html(' Eje X:' + event.pageX + ", " + ' Eje Y:' + event.pageY);
    });

    var attrDesplegable = $('.menu-desplegable').css('display');
    console.log(attrDesplegable);
    if (attrDesplegable == 'none') {
        $('#menu').css('margin-top' ,'0px');
    }
        
    
    $('ul li:has(ul)').hover(function(e) {
        $(this).find('ul').css({display: "block"});
    },
    function(e) {
        $(this).find('ul').css({display: "none"});
    });
});
