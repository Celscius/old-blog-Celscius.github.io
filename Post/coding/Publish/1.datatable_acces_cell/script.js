$(document).ready(function() {
    var table = $('#example').DataTable( {
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button>Click!</button>"
        } ]
    } );
 
    $('#example tbody').on( 'click', 'td', function () {
        var data = table.row( $(this).parents('tr') ).data();
        alert(table.cell( this ).data()+' = '
        +'Column : '+table.column( $(this).closest('td') ).index()
        +' Row : '+table.row( $(this).closest('tr') ).index());
    } );
    
} );

