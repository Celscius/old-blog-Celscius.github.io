$(document).ready(function() {
    $('#example').DataTable( {
      "columnDefs": [ {
            "targets": 5,
            "data": null,
            "defaultContent": "<button>Click!</button>"
        } ]
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