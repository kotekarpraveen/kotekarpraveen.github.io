'use strict';
var data;
var result= [];
var datedata = [];
var markerslist = [];
var markupdata= [];
var latlng =[];
var cords = [];
var country = [];
var states = [];
var markerslistdata = [
  {latLng: [41.90, 12.45], name: 'Vatican City'},
  {latLng: [43.73, 7.41], name: 'Monaco'},
  {latLng: [-0.52, 166.93], name: 'Nauru'},
  {latLng: [-8.51, 179.21], name: 'Tuvalu'},
  {latLng: [43.93, 12.46], name: 'San Marino'},
  {latLng: [47.14, 9.52], name: 'Liechtenstein'},
  {latLng: [7.11, 171.06], name: 'Marshall Islands'},
  {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
  {latLng: [3.2, 73.22], name: 'Maldives'},
  {latLng: [35.88, 14.5], name: 'Malta'},
  {latLng: [12.05, -61.75], name: 'Grenada'},
  {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
  {latLng: [13.16, -59.55], name: 'Barbados'},
  {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
  {latLng: [-4.61, 55.45], name: 'Seychelles'},
  {latLng: [7.35, 134.46], name: 'Palau'},
  {latLng: [42.5, 1.51], name: 'Andorra'},
  {latLng: [14.01, -60.98], name: 'Saint Lucia'},
  {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
  {latLng: [1.3, 103.8], name: 'Singapore'},
  {latLng: [1.46, 173.03], name: 'Kiribati'},
  {latLng: [-21.13, -175.2], name: 'Tonga'},
  {latLng: [15.3, -61.38], name: 'Dominica'},
  {latLng: [-20.2, 57.5], name: 'Mauritius'},
  {latLng: [26.02, 50.55], name: 'Bahrain'},
  {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'},
  {latLng: [21, 78], name: "India"},
  {latLng: [15,101], name: "Thailand"}];

  

	$.ajax({
	  type: "GET",  
	  url: "https://raw.githubusercontent.com/datasets/covid-19/master/time-series-19-covid-combined.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
    data = $.csv.toArrays(response);

   // var groups = {};
    //data = JSON.stringify(data);
   // console.log(data);
    data.forEach(function(val) {
        //var date = val.time.split('T')[0];
        if (val[4] in datedata) {
          datedata[val[4]].push(val);
        } else {
          datedata[val[4]] = new Array(val);
        }


    })
   // console.log(datedata);
//console.log(datedata['2020-03-17']);
    var currentdate = moment().add(-1, 'days').format("YYYY-MM-DD");
    for(var i in datedata[currentdate])
    {
      var obj = {};

      var cordltlg = [];
      cordltlg.push(parseInt(datedata[currentdate][i][2]));
      cordltlg.push(parseInt(datedata[currentdate][i][3]));
      cords.push(cordltlg);
      var ltlgarray = [parseInt(datedata[currentdate][i][2]),parseInt(datedata[currentdate][i][3])];
     // ltlgarray = ltlgarray.push(datedata[currentdate][i][2]);
      //ltlgarray = ltlgarray.push(datedata[currentdate][i][3]);
      /* {latLng: ['+datedata[currentdate][i][2]+','+datedata[currentdate][i][2]+'], name: '+datedata[currentdate][i][1]+'}; */

      obj.latLng= ltlgarray;
      
      obj.name = datedata[currentdate][i][1];
      var mar= "{latLng:["+parseInt(datedata[currentdate][i][2])+","+parseInt(datedata[currentdate][i][3])+"], name:'"+datedata[currentdate][i][1]+"'}";
      /* markerslist.push([[datedata[currentdate][i][2],datedata[currentdate][i][3]],datedata[currentdate][i][1]]); */

      markerslist.push(obj);
     var html = "</br>Confrimed cases:"+datedata[currentdate][i][5]+"</br>Recoverd cases:"+datedata[currentdate][i][6]+"</br>Death cases:"+datedata[currentdate][i][7];
     markupdata.push(html);
      country.push(datedata[currentdate][i][1]);
      states.push(datedata[currentdate][i][0]);
      /* var statesValues = jvm.values.apply({}, jvm.values(data.states)),
        metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
        metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment)); */
    
    }

   //console.log(JSON.stringify(markerslist));
   //console.log(cords);
  // console.log(country);
  // console.log(states);
  } 
  
  
  });

  



console.log(moment().add(-1, 'days').format("YYYY-MM-DD"));

/* google.charts.load('current', {
  'packages':['geomap'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyADq20tboVF0thhK__Q_BSZ0SMvP7pvWgo'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable(markerslist);

  var options = {};
  
  options['region'] = 'world';
      options['colors'] = [0xFF8747, 0xFFB581, 0xc06000]; //orange colors
      options['dataMode'] = 'markers';
  /* var chart = new google.visualization.GeoMap(document.getElementById('regions_div')); 
chart.draw(data, options);*/

/*var container = document.getElementById('regions_div');
      var geomap = new google.visualization.GeoMap(container);
      geomap.draw(data, options);
} */

/*$(function () {
  
  //Simple implementation of direct chat contact pane toggle (TEMPORARY)
  $('[data-widget="chat-pane-toggle"]').click(function(){
    $("#myDirectChat").toggleClass('direct-chat-contacts-open');
  });

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */
  /* $('#world-map-markers').vectorMap({
    map: 'world_mill_en',
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: 'rgba(210, 214, 222, 1)',
        "fill-opacity": 1,
        stroke: '#ff0000',
        "stroke-width": 0,
        "stroke-opacity": 1
      },
      hover: {
        "fill-opacity": 0.7,
        cursor: 'pointer'
      },
      selected: {
        fill: 'yellow'
      },
      selectedHover: {
      }
    },
    markerStyle: {
      initial: {
        fill: '#f0a65a',
        stroke: '#1111'
      }
    },
    markers: [
      {latLng: [41.90, 12.45], name: 'Vatican City'},
      {latLng: [43.73, 7.41], name: 'Monaco'},
      {latLng: [-0.52, 166.93], name: 'Nauru'},
      {latLng: [-8.51, 179.21], name: 'Tuvalu'},
      {latLng: [43.93, 12.46], name: 'San Marino'},
      {latLng: [47.14, 9.52], name: 'Liechtenstein'},
      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
      {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
      {latLng: [3.2, 73.22], name: 'Maldives'},
      {latLng: [35.88, 14.5], name: 'Malta'},
      {latLng: [12.05, -61.75], name: 'Grenada'},
      {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
      {latLng: [13.16, -59.55], name: 'Barbados'},
      {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
      {latLng: [-4.61, 55.45], name: 'Seychelles'},
      {latLng: [7.35, 134.46], name: 'Palau'},
      {latLng: [42.5, 1.51], name: 'Andorra'},
      {latLng: [14.01, -60.98], name: 'Saint Lucia'},
      {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
      {latLng: [1, 103], name: 'Singapore'},
      {latLng: [1.46, 173.03], name: 'Kiribati'},
      {latLng: [-21.13, -175.2], name: 'Tonga'},
      {latLng: [15.3, -61.38], name: 'Dominica'},
      {latLng: [-20.2, 57.5], name: 'Mauritius'},
      {latLng: [26.02, 50.55], name: 'Bahrain'},
      {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'},
      {latLng:[15,101],name:"Thailand"},{latLng:[36,138],name:"Japan"},{latLng:[1,103],name:"Singapore"},{latLng:[28,84],name:"Nepal"},{latLng:[2,112],name:"Malaysia"},{latLng:[49,-123],name:"Canada"},{latLng:[-33,151],name:"Australia"},{latLng:[-37,144],name:"Australia"},{latLng:[-28,153],name:"Australia"},{latLng:[11,104],name:"Cambodia"},{latLng:[7,81],name:"Sri Lanka"},{latLng:[51,9],name:"Germany"},{latLng:[64,26],name:"Finland"},{latLng:[24,54],name:"United Arab Emirates"},{latLng:[13,122],name:"Philippines"},{latLng:[21,78],name:"India"},{latLng:[43,12],name:"Italy"},{latLng:[63,16],name:"Sweden"},{latLng:[40,-4],name:"Spain"},{latLng:[-34,138],name:"Australia"},{latLng:[50,4],name:"Belgium"},{latLng:[26,30],name:"Egypt"},{latLng:[35,139],name:"Australia"},{latLng:[33,35],name:"Lebanon"},{latLng:[33,44],name:"Iraq"},{latLng:[21,57],name:"Oman"},{latLng:[33,65],name:"Afghanistan"},{latLng:[26,50],name:"Bahrain"},{latLng:[29,47],name:"Kuwait"},{latLng:[28,1],name:"Algeria"},{latLng:[45,15],name:"Croatia"},{latLng:[46,8],name:"Switzerland"},{latLng:[47,14],name:"Austria"},{latLng:[31,35],name:"Israel"},{latLng:[30,69],name:"Pakistan"},{latLng:[-14,-51],name:"Brazil"},{latLng:[42,43],name:"Georgia"},{latLng:[39,21],name:"Greece"},{latLng:[41,21],name:"North Macedonia"},{latLng:[60,8],name:"Norway"},{latLng:[45,24],name:"Romania"},{latLng:[58,25],name:"Estonia"},{latLng:[43,12],name:"San Marino"},{latLng:[53,27],name:"Belarus"},{latLng:[64,-19],name:"Iceland"},{latLng:[55,23],name:"Lithuania"},{latLng:[23,-102],name:"Mexico"},{latLng:[-40,174],name:"New Zealand"},{latLng:[9,8],name:"Nigeria"},{latLng:[-31,115],name:"Australia"},{latLng:[53,-7],name:"Ireland"},{latLng:[49,6],name:"Luxembourg"},{latLng:[43,7],name:"Monaco"},{latLng:[25,51],name:"Qatar"},{latLng:[-1,-78],name:"Ecuador"},{latLng:[40,47],name:"Azerbaijan"},{latLng:[40,45],name:"Armenia"},{latLng:[18,-70],name:"Dominican Republic"},{latLng:[0,113],name:"Indonesia"},{latLng:[39,-8],name:"Portugal"},{latLng:[42,1],name:"Andorra"},{latLng:[-41,145],name:"Australia"},{latLng:[56,24],name:"Latvia"},{latLng:[31,-7],name:"Morocco"},{latLng:[24,45],name:"Saudi Arabia"},{latLng:[14,-14],name:"Senegal"},{latLng:[-38,-63],name:"Argentina"},{latLng:[-35,-71],name:"Chile"},{latLng:[31,36],name:"Jordan"},{latLng:[48,31],name:"Ukraine"},{latLng:[47,19],name:"Hungary"},{latLng:[-12,130],name:"Australia"},{latLng:[47,9],name:"Liechtenstein"},{latLng:[51,19],name:"Poland"},{latLng:[34,9],name:"Tunisia"},{latLng:[43,17],name:"Bosnia and Herzegovina"},{latLng:[46,14],name:"Slovenia"},{latLng:[-30,22],name:"South Africa"},{latLng:[27,90],name:"Bhutan"},{latLng:[3,11],name:"Cameroon"},{latLng:[4,-74],name:"Colombia"},{latLng:[9,-83],name:"Costa Rica"},{latLng:[-9,-75],name:"Peru"},{latLng:[44,21],name:"Serbia"},{latLng:[48,19],name:"Slovakia"},{latLng:[8,0],name:"Togo"},{latLng:[35,14],name:"Malta"},{latLng:[14,-61],name:"Martinique"},{latLng:[42,25],name:"Bulgaria"},{latLng:[3,73],name:"Maldives"},{latLng:[23,90],name:"Bangladesh"},{latLng:[-23,-58],name:"Paraguay"},{latLng:[51,-85],name:"Canada"},{latLng:[53,-116],name:"Canada"},{latLng:[52,-73],name:"Canada"},{latLng:[41,20],name:"Albania"},{latLng:[35,33],name:"Cyprus"},{latLng:[4,114],name:"Brunei"},{latLng:[47,-121],name:"US"},{latLng:[42,-74],name:"US"},{latLng:[36,-119],name:"US"},{latLng:[42,-71],name:"US"},{latLng:[35,139],name:"US"},{latLng:[37,-122],name:"US"},{latLng:[33,-83],name:"US"},{latLng:[39,-105],name:"US"},{latLng:[27,-81],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[44,-122],name:"US"},{latLng:[31,-97],name:"US"},{latLng:[40,-88],name:"US"},{latLng:[40,-77],name:"US"},{latLng:[42,-93],name:"US"},{latLng:[39,-76],name:"US"},{latLng:[35,-79],name:"US"},{latLng:[33,-80],name:"US"},{latLng:[35,-86],name:"US"},{latLng:[37,-78],name:"US"},{latLng:[33,-111],name:"US"},{latLng:[39,-86],name:"US"},{latLng:[37,-84],name:"US"},{latLng:[38,-77],name:"US"},{latLng:[38,-117],name:"US"},{latLng:[43,-71],name:"US"},{latLng:[45,-93],name:"US"},{latLng:[41,-98],name:"US"},{latLng:[40,-82],name:"US"},{latLng:[41,-71],name:"US"},{latLng:[44,-89],name:"US"},{latLng:[41,-72],name:"US"},{latLng:[21,-157],name:"US"},{latLng:[35,-96],name:"US"},{latLng:[40,-111],name:"US"},{latLng:[12,-1],name:"Burkina Faso"},{latLng:[41,12],name:"Holy See"},{latLng:[46,103],name:"Mongolia"},{latLng:[8,-80],name:"Panama"},{latLng:[38,-96],name:"US"},{latLng:[31,-91],name:"US"},{latLng:[38,-92],name:"US"},{latLng:[44,-72],name:"US"},{latLng:[61,-152],name:"US"},{latLng:[34,-92],name:"US"},{latLng:[39,-75],name:"US"},{latLng:[44,-114],name:"US"},{latLng:[44,-69],name:"US"},{latLng:[43,-84],name:"US"},{latLng:[32,-89],name:"US"},{latLng:[46,-110],name:"US"},{latLng:[34,-106],name:"US"},{latLng:[47,-99],name:"US"},{latLng:[44,-99],name:"US"},{latLng:[38,-80],name:"US"},{latLng:[42,-107],name:"US"},{latLng:[30,112],name:"China"},{latLng:[32,53],name:"Iran"},{latLng:[36,128],name:"Korea, South"},{latLng:[46,2],name:"France"},{latLng:[23,113],name:"China"},{latLng:[33,113],name:"China"},{latLng:[29,120],name:"China"},{latLng:[27,111],name:"China"},{latLng:[31,117],name:"China"},{latLng:[27,115],name:"China"},{latLng:[36,118],name:"China"},{latLng:[35,139],name:"Cruise Ship"},{latLng:[32,119],name:"China"},{latLng:[30,107],name:"China"},{latLng:[30,102],name:"China"},{latLng:[47,127],name:"China"},{latLng:[56,9],name:"Denmark"},{latLng:[40,116],name:"China"},{latLng:[31,121],name:"China"},{latLng:[39,116],name:"China"},{latLng:[26,117],name:"China"},{latLng:[23,108],name:"China"},{latLng:[35,108],name:"China"},{latLng:[24,101],name:"China"},{latLng:[19,109],name:"China"},{latLng:[26,106],name:"China"},{latLng:[39,117],name:"China"},{latLng:[37,112],name:"China"},{latLng:[37,101],name:"China"},{latLng:[22,114],name:"China"},{latLng:[41,122],name:"China"},{latLng:[43,126],name:"China"},{latLng:[49,15],name:"Czechia"},{latLng:[41,85],name:"China"},{latLng:[44,113],name:"China"},{latLng:[37,106],name:"China"},{latLng:[23,121],name:"Taiwan*"},{latLng:[16,108],name:"Vietnam"},{latLng:[60,90],name:"Russia"},{latLng:[35,95],name:"China"},{latLng:[22,113],name:"China"},{latLng:[47,28],name:"Moldova"},{latLng:[-16,-63],name:"Bolivia"},{latLng:[61,-6],name:"Denmark"},{latLng:[18,-63],name:"France"},{latLng:[15,-86],name:"Honduras"},{latLng:[49,-2],name:"United Kingdom"},{latLng:[46,-66],name:"Canada"},{latLng:[31,88],name:"China"},{latLng:[-4,21],name:"Congo (Kinshasa)"},{latLng:[7,-5],name:"Cote d'Ivoire"},{latLng:[17,-62],name:"France"},{latLng:[18,-77],name:"Jamaica"},{latLng:[38,35],name:"Turkey"},{latLng:[36,-5],name:"United Kingdom"},{latLng:[47,-122],name:"US"},{latLng:[38,-121],name:"US"},{latLng:[37,-121],name:"US"},{latLng:[38,-122],name:"US"},{latLng:[34,-119],name:"US"},{latLng:[42,-71],name:"US"},{latLng:[33,-84],name:"US"},{latLng:[33,-84],name:"US"},{latLng:[37,-82],name:"US"},{latLng:[33,-84],name:"US"},{latLng:[32,-94],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[39,-75],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[39,-106],name:"US"},{latLng:[40,-105],name:"US"},{latLng:[39,-104],name:"US"},{latLng:[38,-106],name:"US"},{latLng:[41,-88],name:"US"},{latLng:[41,-75],name:"US"},{latLng:[39,-75],name:"US"},{latLng:[36,-76],name:"US"},{latLng:[38,-77],name:"US"},{latLng:[38,-77],name:"US"},{latLng:[39,-77],name:"US"},{latLng:[38,-76],name:"US"},{latLng:[41,-95],name:"US"},{latLng:[34,-80],name:"US"},{latLng:[32,-111],name:"US"},{latLng:[41,-85],name:"US"},{latLng:[39,-77],name:"US"},{latLng:[40,-86],name:"US"},{latLng:[43,-89],name:"US"},{latLng:[44,-92],name:"US"},{latLng:[41,-81],name:"US"},{latLng:[41,-111],name:"US"},{latLng:[43,-73],name:"US"},{latLng:[44,-93],name:"US"},{latLng:[26,-81],name:"US"},{latLng:[34,-84],name:"US"},{latLng:[33,-96],name:"US"},{latLng:[38,-85],name:"US"},{latLng:[29,-90],name:"US"},{latLng:[40,-121],name:"US"},{latLng:[34,-81],name:"US"},{latLng:[38,-84],name:"US"},{latLng:[41,-91],name:"US"},{latLng:[42,-73],name:"US"},{latLng:[36,-86],name:"US"},{latLng:[43,-123],name:"US"},{latLng:[36,-119],name:"US"},{latLng:[39,-76],name:"US"},{latLng:[39,-86],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[38,-94],name:"US"},{latLng:[47,-120],name:"US"},{latLng:[27,-82],name:"US"},{latLng:[44,-122],name:"US"},{latLng:[30,-86],name:"US"},{latLng:[34,-85],name:"US"},{latLng:[33,-117],name:"US"},{latLng:[35,-89],name:"US"},{latLng:[38,-90],name:"US"},{latLng:[40,-72],name:"US"},{latLng:[41,-74],name:"US"},{latLng:[29,-81],name:"US"},{latLng:[38,-77],name:"US"},{latLng:[42,-71],name:"US"},{latLng:[38,-77],name:"US"},{latLng:[40,-75],name:"US"},{latLng:[37,-121],name:"US"},{latLng:[26,-80],name:"US"},{latLng:[26,-81],name:"US"},{latLng:[32,-111],name:"US"},{latLng:[41,-73],name:"US"},{latLng:[43,-73],name:"US"},{latLng:[32,-79],name:"US"},{latLng:[45,-122],name:"US"},{latLng:[33,-84],name:"US"},{latLng:[40,-112],name:"US"},{latLng:[38,-104],name:"US"},{latLng:[21,-157],name:"US"},{latLng:[42,-122],name:"US"},{latLng:[47,-123],name:"US"},{latLng:[34,-80],name:"US"},{latLng:[42,-121],name:"US"},{latLng:[37,-119],name:"US"},{latLng:[47,-122],name:"US"},{latLng:[36,-95],name:"US"},{latLng:[39,-104],name:"US"},{latLng:[41,-71],name:"US"},{latLng:[35,-79],name:"US"},{latLng:[39,-75],name:"US"},{latLng:[41,-96],name:"US"},{latLng:[38,-84],name:"US"},{latLng:[39,-86],name:"US"},{latLng:[42,-71],name:"US"},{latLng:[40,-73],name:"US"},{latLng:[44,-93],name:"US"},{latLng:[40,-119],name:"US"},{latLng:[41,-75],name:"US"},{latLng:[38,-121],name:"US"},{latLng:[37,-121],name:"US"},{latLng:[36,-115],name:"US"},{latLng:[29,-95],name:"US"},{latLng:[47,-119],name:"US"},{latLng:[30,-86],name:"US"},{latLng:[35,-86],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[39,-77],name:"US"},{latLng:[42,-71],name:"US"},{latLng:[39,-104],name:"US"},{latLng:[39,-106],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[29,-95],name:"US"},{latLng:[37,-122],name:"US"},{latLng:[37,-121],name:"US"},{latLng:[33,-117],name:"US"},{latLng:[42,-71],name:"US"},{latLng:[33,-112],name:"US"},{latLng:[35,-78],name:"US"},{latLng:[41,-73],name:"US"},{latLng:[43,-71],name:"US"},{latLng:[27,-82],name:"US"},{latLng:[39,-120],name:"US"},{latLng:[37,-122],name:"US"},{latLng:[38,-122],name:"US"},{latLng:[45,-118],name:"US"},{latLng:[33,-84],name:"US"},{latLng:[45,-123],name:"US"},{latLng:[48,-121],name:"US"},{latLng:[40,-123],name:"US"},{latLng:[38,-121],name:"US"},{latLng:[32,-117],name:"US"},{latLng:[36,-120],name:"US"},{latLng:[34,-118],name:"US"},{latLng:[47,-122],name:"US"},{latLng:[41,-87],name:"US"},{latLng:[48,-121],name:"US"},{latLng:[46,-122],name:"US"},{latLng:[48,-122],name:"US"},{latLng:[48,-121],name:"US"},{latLng:[38,-122],name:"US"},{latLng:[38,-120],name:"US"},{latLng:[37,-120],name:"US"},{latLng:[36,-120],name:"US"},{latLng:[42,-70],name:"US"},{latLng:[30,-82],name:"US"},{latLng:[26,-81],name:"US"},{latLng:[27,-82],name:"US"},{latLng:[29,-82],name:"US"},{latLng:[30,-81],name:"US"},{latLng:[28,-82],name:"US"},{latLng:[32,-96],name:"US"},{latLng:[32,-97],name:"US"},{latLng:[30,-95],name:"US"},{latLng:[40,-74],name:"US"},{latLng:[39,-105],name:"US"},{latLng:[45,-122],name:"US"},{latLng:[44,-123],name:"US"},{latLng:[43,-121],name:"US"},{latLng:[42,-88],name:"US"},{latLng:[42,-87],name:"US"},{latLng:[40,-75],name:"US"},{latLng:[37,-77],name:"US"},{latLng:[34,-80],name:"US"},{latLng:[36,-82],name:"US"},{latLng:[39,-86],name:"US"},{latLng:[40,-86],name:"US"},{latLng:[41,-86],name:"US"},{latLng:[42,-97],name:"US"},{latLng:[40,-81],name:"US"},{latLng:[45,-93],name:"US"},{latLng:[43,-92],name:"US"},{latLng:[40,-110],name:"US"},{latLng:[41,-73],name:"US"},{latLng:[41,-73],name:"US"},{latLng:[29,-90],name:"US"},{latLng:[43,-102],name:"US"},{latLng:[44,-98],name:"US"},{latLng:[43,-98],name:"US"},{latLng:[43,-98],name:"US"},{latLng:[43,-96],name:"US"},{latLng:[42,-97],name:"US"},{latLng:[33,-106],name:"US"},{latLng:[35,-106],name:"US"},{latLng:[42,-83],name:"US"},{latLng:[42,-83],name:"US"},{latLng:[39,-75],name:"US"},{latLng:[22,-80],name:"Cuba"},{latLng:[5,-58],name:"Guyana"},{latLng:[-35,149],name:"Australia"},{latLng:[55,-3],name:"United Kingdom"},{latLng:[48,66],name:"Kazakhstan"},{latLng:[-17,149],name:"France"},{latLng:[53,-98],name:"Canada"},{latLng:[52,-106],name:"Canada"},{latLng:[9,40],name:"Ethiopia"},{latLng:[12,30],name:"Sudan"},{latLng:[9,-9],name:"Guinea"},{latLng:[37,-122],name:"Canada"},{latLng:[0,37],name:"Kenya"},{latLng:[17,-61],name:"Antigua and Barbuda"},{latLng:[32,-86],name:"US"},{latLng:[-32,-55],name:"Uruguay"},{latLng:[7,-1],name:"Ghana"},{latLng:[18,-66],name:"US"},{latLng:[-22,18],name:"Namibia"},{latLng:[-4,55],name:"Seychelles"},{latLng:[10,-61],name:"Trinidad and Tobago"},{latLng:[6,-66],name:"Venezuela"},{latLng:[-26,31],name:"Eswatini"},{latLng:[0,11],name:"Gabon"},{latLng:[15,-90],name:"Guatemala"},{latLng:[21,10],name:"Mauritania"},{latLng:[-1,29],name:"Rwanda"},{latLng:[13,-60],name:"Saint Lucia"},{latLng:[12,-61],name:"Saint Vincent and the Grenadines"},{latLng:[3,-56],name:"Suriname"},{latLng:[3,-53],name:"France"},{latLng:[13,144],name:"US"},{latLng:[42,20],name:"Kosovo"},{latLng:[53,-57],name:"Canada"},{latLng:[46,-63],name:"Canada"},{latLng:[6,20],name:"Central African Republic"},{latLng:[-4,21],name:"Congo (Brazzaville)"},{latLng:[1,10],name:"Equatorial Guinea"},{latLng:[-12,45],name:"France"},{latLng:[41,64],name:"Uzbekistan"},{latLng:[52,5],name:"Netherlands"},{latLng:[44,-63],name:"Canada"},{latLng:[16,-61],name:"France"},{latLng:[9,2],name:"Benin"},{latLng:[6,-9],name:"Liberia"},{latLng:[12,-68],name:"Netherlands"},{latLng:[5,46],name:"Somalia"},{latLng:[-6,34],name:"Tanzania"},{latLng:[18,-64],name:"US"},{latLng:[19,-81],name:"United Kingdom"},{latLng:[-21,55],name:"France"},{latLng:[13,-59],name:"Barbados"},{latLng:[42,19],name:"Montenegro"},{latLng:[41,74],name:"Kyrgyzstan"},{latLng:[-20,57],name:"Mauritius"},{latLng:[12,-70],name:"Netherlands"},{latLng:[-15,28],name:"Zambia"},{latLng:[11,42],name:"Djibouti"},{latLng:[13,-15],name:"Gambia, The"},{latLng:[16,-62],name:"United Kingdom"},{latLng:[25,-77],name:"Bahamas, The"},{latLng:[71,-42],name:"Denmark"},{latLng:[-20,165],name:"France"},{latLng:[32,-64],name:"United Kingdom"},{latLng:[15,18],name:"Chad"},{latLng:[13,-88],name:"El Salvador"},{latLng:[-17,178],name:"Fiji"},{latLng:[12,-85],name:"Nicaragua"}
    
    ],
    onMarkerLabelShow: function(event, label, code) 
    {
     label.html("<strong>"+label.html()+"</strong>"+markupdata[code]);                
    }
  });

}); */








/*

$(function(){
  
    console.log(data);
    /* var val = 2009;
        var statesValues = jvm.values.apply({}, jvm.values(data.states)),
        metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
        metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment)); */

   /* $('.map').vectorMap({
      map: 'world_mill_en',
      scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'linear',
      hoverOpacity: 0.7,
      hoverColor: false,
    
      regionStyle: {
        initial: {
          fill: 'rgba(210, 214, 222, 1)',
          "fill-opacity": 1,
          stroke: 'none',
          "stroke-width": 0,
          "stroke-opacity": 1
        },
        hover: {
          "fill-opacity": 0.7,
          cursor: 'pointer'
        },
        selected: {
          fill: 'yellow'
        },
        selectedHover: {
        }
      },
      markerStyle: {
        initial: {
          fill: '#f0a65a',
          stroke: '#111'
        }
      },
      backgroundColor: '#383f47',
      markers: markerslist,
       series: {
        markers: [{
          attribute: 'fill',
          scale: ['#FEE5D9', '#A50F15'],
          
          
        },{
          attribute: 'r',
          scale: [5, 20],
          
         
        }],
        regions: [{
          scale: ['#DEEBF7', '#08519C'],
          attribute: 'fill',
          values: country,
          
        }]
      }, 
      onMarkerLabelShow: function(event, label, index){
        /* label.html(
          '<b>'+data.metro.names[index]+'</b><br/>'+
          '<b>Population: </b>'+data.metro.population[val][index]+'</br>'+
          '<b>Unemployment rate: </b>'+data.metro.unemployment[val][index]+'%'
        ); */

      /*  label.html("<strong>"+label.html()+"</strong>"+markupdata[code]);
      },
      onRegionLabelShow: function(event, label, code){
        /* label.html(
          '<b>'+label.html()+'</b></br>'+
          '<b>Unemployment rate: </b>'+12+'%'
        ); */
      /*   label.html("<strong>"+label.html()+"</strong>"+markupdata[code]+code);
      }
    });

    var mapObject = $('.map').vectorMap('get', 'mapObject');

    /* $(".slider").slider({
      value: val,
      min: 2005,
      max: 2009,
      step: 1,
      slide: function( event, ui ) {
        val = ui.value;
        mapObject.series.regions[0].setValues(data.states[ui.value]);
        mapObject.series.markers[0].setValues(data.metro.unemployment[ui.value]);
        mapObject.series.markers[1].setValues(data.metro.population[ui.value]);
      }
    }); 
  
});*/