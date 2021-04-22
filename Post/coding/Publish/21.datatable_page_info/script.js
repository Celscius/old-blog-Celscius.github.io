$(document).ready(function() {
   tabel = $('#example').DataTable({
	"initComplete": function(settings, json){ 
            var info = this.api().page.info();
            document.getElementById("total").innerHTML = info.recordsTotal;
            $('#start').html(info.start);
            $('#end').html(info.end);
            $('#page').html(info.page);
            $('#pages').html(info.pages);
            $('#length').html(info.length);

        }
    });
} );