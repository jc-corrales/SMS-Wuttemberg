let map;
let directionsService;
let directionsRenderer;
let geocoder;
let coordenadasIniciales;
let coordenadasIntermedias;
let coordenadasFinales;
//let arregloTemporal1;

function initMap()
{
    map = new google.maps.Map(document.getElementById('map'),
    {
        center: {lat: 4.66421, lng: -74.07861},
        zoom: 16
    });
    geocoder = new google.maps.Geocoder();
    coordenadasIniciales = {lat: 4.67000, lng: -74.07000};
    coordenadasIntermedias= [
            {lat: 4.67909, lng: -74.07723},
            {lat: 4.66421, lng: -74.07861},
            {lat: 4.68251, lng: -74.11792},

        ]; 
    coordenadasFinales = {lat: 4.69000, lng: -74.12000};
    arregloTemporal1 = [];
    generarMarcadores();
}



function generarMarcadores()
{
    var latitudInicial = coordenadasIniciales.lat;
    var longitudInicial = coordenadasIniciales.lng;
    geocoder.geocode({'location': {lat: latitudInicial,lng: longitudInicial}}, function(results,status)
        {
            console.log(results);
            if(status == 'OK'){
               // map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title : "Origen: " + results[0].formatted_address
                });
            }
            else{
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    
    var i;
    var arregloTemporal1 = [];
    for(i = 0; i < coordenadasIntermedias.length; i++)
    {   
        var latitud = coordenadasIntermedias[i].lat;
        var longitud = coordenadasIntermedias[i].lng;
        geocoder.geocode({'location': {lat: latitud,lng: longitud}}, function(results,status)
        {
            console.log(results);
            arregloTemporal1.push(results);
            if(status == 'OK'){
                var marker = new google.maps.Marker
                ({
                    map: map,
                    position: results[0].geometry.location,
                    
                    title : "Punto Intermedio " + (arregloTemporal1.length)+ ": " + results[0].formatted_address
                });
            }
            else{
                alert('Geocode was not successful for the following reason: ' + status);
            }
          
        });

        

    }

    var latitudFinal = coordenadasFinales.lat;
    var longitudFinal = coordenadasFinales.lng;
    geocoder.geocode({'location': {lat: latitudFinal,lng: longitudFinal}}, function(results,status)
        {
            console.log(results);
            if(status == 'OK'){
                //map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title : "Destino:" + results[0].formatted_address
                });
            }
            else{
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });



}

function imprimirMarcadoresIntermedios(arregloTemporal1)
{
    var j;
    console.log("tamanio:" + arregloTemporal1.length);
    console.log(arregloTemporal1);
    for(j = 0; j < arregloTemporal1.length; j++)
    {
        console.log(j);
        resultados = arregloTemporal1[j];
       //map.setCenter(resultados[0].geometry.location);
        var marker = new google.maps.Marker
        ({
            map: map,
            position: resultados[0].geometry.location,
            title : "Punto Intermedio " + j + ":" + resultados[0].formatted_address
        });
    }
}