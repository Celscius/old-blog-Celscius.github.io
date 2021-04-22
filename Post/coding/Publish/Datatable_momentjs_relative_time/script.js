$(document).ready(function() {
    $('#example').DataTable( {
        "columnDefs": [
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                	var punctuationless = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                	finalString = punctuationless.replace(/\s{2,}/g," ");
                	time = moment(data, "YYYYMMDD").fromNow();  
                    return row[4]+' ('+time  +')';
                },
                "targets": 4
            },
            { "visible": false,  "targets": [ 3,5 ] }
        ]
    } );
} );

var localeData = moment.updateLocale('en', {
   relativeTime: {
      future: "in %s",
      past: "%s lalu",
      s: 'sedetik yang ',
      ss: '%d detik',
      m: "semenit yang ",
      mm: "%d menit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari yang",
      dd: "%d hari",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun"
   }
});