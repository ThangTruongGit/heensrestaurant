﻿

var myCenter = new google.maps.LatLng(51.3590100, -0.19189960000000000);
function initialize()

{

    var mapProp = {

        center:myCenter,

        zoom:17

    ,

        mapTypeId:google.maps.MapTypeId.ROADMAP

    };



    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    



    var marker=new google.maps.Marker({

        position: myCenter,

        animation: google.maps.Animation.BOUNCE

    }); 
    marker.setMap(map);
}



google.maps.event.addDomListener(window, 'load', initialize);

