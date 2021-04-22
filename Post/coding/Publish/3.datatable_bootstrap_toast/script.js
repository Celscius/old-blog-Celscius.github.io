$(document).ready(function() {
    var table = $('#example').DataTable( {
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": '<button class="btn btn-light" >Click!</button>'
        } ]
    } );
 
    $('#example tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
        var name = data[0] ;
        var salary = data[4];
        $('.toast').toast('show',);
    } );
    
} );

