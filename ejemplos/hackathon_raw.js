let map;



function initMap()
{
    let directionsRenderer;
    map = new google.maps.Map(document.getElementById('map'),
    {
        center: {lat: 4.66121, lng: -74.07161},
        zoom: 16
    });
    directionService = new google.maps.DirectionsService();
    // directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: false});
    // geocoder = new google.maps.Geocoder();

    // directionsRenderer.setMap(map);

    // geocoder.geocode({'location': {lat: 4.67909, lng: -74.07723}}, function(results,status){
    //     console.log(results);
    //     if(status == 'OK')
    //    {
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location
    //         });
    //     }
    //     else{
    //         alert("No se encontró");
    //     }

    // });
    // var address= "Universidad de los Andes, Bogotá, Colombia" 
    // geocoder.geocode({ 'address': address}, function(results, status)  {
    //    console.log(results)
    //    if(status == 'OK')
    //    {
    //         map.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location,
    //             tittle: address
    //         });
    //         console.log(results[0].geometry.location.lat())
    //         marker.setMap(map);
    //     }
    //     else{
    //         alert("No se encontró");
    //     }
                
    //    });

     var nCoordinates = [
        {lat: 4.66121, lng: -74.07161},
        {lat: 4.66221, lng: -74.07261},
        {lat: 4.66321, lng: -74.07361},
        {lat: 4.66421, lng: -74.07461},
        {lat: 4.66521, lng: -74.07561},
        {lat: 4.66621, lng: -74.07661},
        {lat: 4.66721, lng: -74.07761},
        {lat: 4.66821, lng: -74.07861}
    ]
    for ( var i = 0, l = nCoordinates.length, ar = []; i < l; i++ ) {
        ar[ i ] = nCoordinates[i];
     }
    var ar = nCoordinates;
    var origin1= ar.shift();
    var destination1= ar.pop();
    for ( var i = 0, l = ar.length, ar2 = []; i < l; i++ ) {
        ar2[ i ] = ar[i];
     }
    var i = ar.length;
    var ways = [];

    while (i > 0) {
        ways.push({location:ar.pop()});
        i=-1;
    }

    let request = {
        origin: origin1,
        destination: destination1,
        waypoints: ways
    }

    var marker0 = new google.maps.Marker({
            position: {lat: origin1.lat, lng: origin1.lng},
            map : map,
            title: 'Inicio'
        });

     marker0.setMap(map);

    var marker1 = new google.maps.Marker({
        position: {lat: destination1.lat, lng: destination1.lng},
        map : map,
        title: 'Destino'
    });

    marker1.setMap(map);

    i = ar2.length;

    while(i >= 0)
    {
        var j= ar2.shift();
        var markerResto = new google.maps.Marker({
            position: {lat: j.lat, lng: j.lng},
            map : map,
            title: 'Parada'
        });
    
        markerResto.setMap(map);
        i=i-1;
    }



    // directionService.route(request, function(result, status){

    //     console.log(result);
    //     if(status == 'OK')
    //     {
    //         directionsRenderer.setDirections(result);
    //     }
    //     });

    // var marker0 = new google.maps.Marker({
    //     position: {lat: 4.66422, lng: -74.07861},
    //     map : map,
    //     title: 'Inicio'
    // });

    // var marker1 = new google.maps.Marker({
    //     position: {lat: 4.66722, lng: -74.07461},
    //     map : map,
    //     title: 'llegada'
    // });

    // marker0.setMap(map);
    // marker1.setMap(map);

    // var nPath = new google.maps.Polyline({
    //     path : nCoordinates,
    //     geodesic: true,
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 1,
    //     strokeWeight: 2
    // });

    // var ntrian = [
    //     {lat: 4.66421, lng: -74.07861},
    //     {lat: 4.66521, lng: -74.07961},
    //     {lat: 4.66621, lng: -74.07361},
    //     {lat: 4.66421, lng: -74.07861}
    // ]

    // var nPath2 = new google.maps.Polygon({
    //     path : ntrian,
    //     geodesic: true,
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 1,
    //     strokeWeight: 2,
    //     fillColor: '#FFFFF00',
    //     fillOpacity: 0.35
    // });

    // nPath.setMap(map);
    // nPath2.setMap(map);
    // latGen = marker0.getPosition();
    // lngGen = marker1.getPosition();

    // num1 = (latGen.lat() + lngGen.lat())/2;
    // num2 = (latGen.lng() + lngGen.lng())/2;
    // console.log(num1 + "," + num2);
    // console.log(latGen.lat());

    // map.setCenter(new google.maps.LatLng(num1, num2));
    }