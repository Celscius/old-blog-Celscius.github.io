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

      var baris = table.row( $(this).closest('tr') ).index();
      var kolom = table.column( $(this).closest('td') ).index();
      function startTimer()
     {
        var startTimestamp = moment().startOf("day");
        setInterval(function() {
        startTimestamp.add(1, 'second');
        table.cell({row:baris, column:2}).data(startTimestamp.format('mm:ss'));
            
        }, 1000);
    }
    startTimer();
    var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("Name").innerHTML = t;
}
function myStopFunction() {
  clearInterval(myVar);
}
    } );
    
} );

