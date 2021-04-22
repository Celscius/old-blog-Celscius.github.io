$(document).ready(function() {
    var table = $('#example').DataTable( {
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": '<div class="togglebutton"> <label> <input type="checkbox"> <span class="toggle"></span></label></div> '
        } ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        }
    } );
 
    $('#example tbody').on( 'click', 'checkbox', function () {
        var data = table.row( $(this).parents('tr') ).data();
        alert( data[0] +"'s salary is: "+ data[ 3 ] );
    } );
} );