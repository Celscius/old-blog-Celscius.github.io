$(document).ready(function() {
    var table = $('#example').DataTable( {
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button>Click!</button>"
        } ]
    } );
 
    $('#example tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
         $("#exampleModal").modal();
         $('#Name').html(data[0]);
         $('#Salary').html(data[4]);

    } );
    
} );

