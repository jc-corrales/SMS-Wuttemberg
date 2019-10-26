let map;
let directionsService;
let directionsRenderer;
let geocoder;
function initMap()
{
    map = new google.maps.Map(document.getElementById('map'),
    {
        center: {lat: 4.66421, lng: -74.07861},
        zoom: 16
    });
    //var marker0 = new google.maps.Marker({
    //    position: {lat:4.67909, lng: -74.07723},
    //    map: map,
    //    title: 'Esto es un marcador'
    //});

    let mCoordinates= [
        {lat: 4.67909, lng: -74.07723},
        {lat: 4.66421, lng: -74.07861},
        {lat: 4.68251, lng: -74.11792},
    ];
    //let mPath = new google.maps.Polyline({
    //    path: mCoordinates,
    //    geodesic: true,
    //    strokeColor: '#FF0000',
    //    storkeOpacity: 1.0,
    //    strokeWeight: 2
    //});
    //mPath.setMap (map);
    let triangle = new google.maps.Polygon({
        paths: mCoordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8, 
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });
    triangle.setMap(map);
    directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });
    directionsRenderer.setMap(map);
    directionsService = new google.maps.DirectionsService();
    let request = {
        origin: mCoordinates[0],
        language: 'de',
        provideRouteAlternatives: true,
        avoidHighways: false,
        //travelMode: 'WALKING',
        destination: mCoordinates[2],
        travelMode: 'DRIVING',
        //travelMode: 'TRANSIT',
        //transitOptions: {
        //    departureTime: new Date(1337675679473),
        //    modes: ['BUS'],
        //    routingPreference: 'FEWER_TRANSFERS'
        //  },
        waypoints: [{location:mCoordinates[1],stopover: true}]
        
    };
    directionsService.route(request, function (result,status)
    {
        console.log(result);
        if(status == 'OK')
        {
            directionsRenderer.setDirections(result);
        }
    });
    
    geocoder = new google.maps.Geocoder();
    //var address = "Universidad de los andes, Bogotá, Colombia";
    //geocoder.geocode({'address': address}, function(results, status){
    //    console.log(results);
    //    if(status=='OK')
    //    {
    //        map.setCenter(results[0].geometry.location);
    //        var marker = new google.maps.Marker({
    //            map: map,
    //            position:results[0].geometry.location,
    //            title: address
    //        });
            //mCoordinates= [
            //    {lat: 4.67909, lng: -74.07723},
            //    {lat: 4.66421, lng: -74.07861},
            //    {lat: 4.68251, lng: -74.11792},
            //    results[0].geometry.location
            //];  
    //    }
    //    else{
    //        alert('Gecode was not successful for the following reason: ' + status);
    //    }
    //});
    geocoder.geocode({'location': {lat:4.67909,lng: -74.07723}}, function(results,status)
    {
        console.log(results);
        if(status == 'OK'){
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title : results[0].formatted_address
            });
        }
        else{
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
    
    
}




//var marker0 = new google.maps.Marker(
//    {
//        position: {lat: 4.67909, lng: -74.07723},
//        map : map,
//        title: 'Esto es un marcador'
//    }
//);
//Forma alternativa de agregar al mapa
//marker0.setMap(map);