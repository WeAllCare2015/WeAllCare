var myimage = new google.maps.MarkerImage("images/house_icon.png", null, null, null, new google.maps.Size(41,50));
var infowindow = new google.maps.InfoWindow();

function createMarker(map, latlon, html, icon) {
    var newmarker = new google.maps.Marker({
        position: latlon,
        map: map,
	    title: 'Shelter',
		icon: icon
    });

    newmarker['infowindow'] = new google.maps.InfoWindow({
            content: html
        });

    google.maps.event.addListener(newmarker, 'click', function() {
        this['infowindow'].open(map, this);
    });
}

function initialize() {
var mapOptions = {center: mapcentre, zoom: 13, mapTypeId: google.maps.MapTypeId.TERRAIN };
var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); 

var shelter_location = [];
var BED = [];		

var contentString = [];
var infowindow = [];
var floodarea =[];

var contentString=[];


for (i=0;i<max_shelter_locations;i++)
    {
	  
	  contentString[i]='<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading"><b>Contact Details</b></h1>'+
      '<div id="bodyContent">'+'<p>Name: '+Name[i]+'<br>'+'Phone: '+Phone[i]+'<br>'+'Email: '+Email[i]+'<br>'+
	  'Address: '+Address[i]+'<br>'+PostCode[i]+' '+City[i]+'<br>'+Country[i]+'</p>'+
	  '<a href="http://weallcare.net16.net/request-shelter/" target="_top">'+
      'Request Shelter</a> '+
	  '</div></div>';
	  
	  var iCon = new google.maps.MarkerImage("images/icon"+Bed[i]+".png", null, null, null, new google.maps.Size(35,41));
	  createMarker(map, shelterLatLng[i], contentString[i], iCon);
    }



floodarea = new google.maps.Polygon({ paths: PolyCoords, strokeColor: '#0050FF', strokeOpacity: 0.8, strokeWeight: 3, fillColor: '#0050FF', fillOpacity: 0.35 });

floodarea.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);
