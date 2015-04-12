// Definition of SHELTER
var allText = [];
readTextFile("http://weallcare.net16.net/trial2/shelter.csv");
var datainfile = allText.match(/[^\r\n]+/g);
var max_shelter_locations = (datainfile.length);
var shelterLatLng = [];
var ID = [];
var Bed = [];
var Name = [];
var Phone = [];
var Email = [];
var Address = [];
var City = [];
var PostCode = [];
var Country = [];
var source = [];

for (i=0;i<max_shelter_locations;i++)
    {	
		source = datainfile[i].split(",");
		ID[i]=source[0];
		shelterLatLng[i] = new google.maps.LatLng(source[1],source[2]);
		Bed[i]=source[3];
		Name[i]=source[4].replace("@@@"," ");
		Phone[i]=source[5];
		Email[i]=source[6];
		Address[i]=source[7];
		City[i]=source[8];
		PostCode[i]=source[9];
		Country[i]=source[10];
		
	}

// Definition of AFFECTED AREA
datainfile = [];
allText = [];	  
readTextFile("event.csv");
datainfile = allText.match(/[^\r\n]+/g); 
var offset = 2;
var datapoints =   Number(datainfile[0 + offset]);
var mapcentre =  new google.maps.LatLng(datainfile[0],datainfile[1]);
var PolyCoords = []; 

for (i=0;i<datapoints;i++)
    {
		PolyCoords[i] = new google.maps.LatLng(datainfile[(i*2)+1 + offset],datainfile[(i*2)+2 + offset])
	}
datainfile = [];


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}







	

	





