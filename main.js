// $(document).$(document).ready(function () {
//     var interval = setInterval(function() {
//         var momentNow = moment();
//         $('#tiempo').val(momentNow.format('YYYY MMMM DD') + ' '
//                             + momentNow.format('dddd')
//                              .substring(0,3).toUpperCase());
       
//     }, 100);
// });

$(document).ready(function() {
    var horaActual
    var fechaActual
    var interval = setInterval(function() {
        var momentNow = moment();
        //Hora Actual
         horaActual = (momentNow.format('YYYY MMMM DD') + ' '
        + momentNow.format('dddd')
         .substring(0,3).toUpperCase());
        $('#fecha').val(horaActual);
        //Fecha Actual
        fechaActual = momentNow.format('A hh:mm:ss');
        $('#tiempo').val(fechaActual);
    }, 100);
    
    $('#stop-interval').on('click', function() {
        clearInterval(interval);
        
        $('#tiempotext').html(fechaActual);
        $('#horatext').html(horaActual);
    });
});

