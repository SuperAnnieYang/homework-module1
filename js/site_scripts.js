var attr = ["partner bus tour","partner cabin rental","partner camping adventure","partner college tours","part bike rental","partner tour group"];
var fileNames = [];
var photos = [];
var openList = "<li class='partner'>"; 
var closeList = "</li>";
var image;
var imageList = [];

for (var i=0; i<6; i++){
    fileNames.push("partner-" + (i+1));
    photos.push("<img src='images/partners/" + fileNames[i] + ".png' alt='" + attr[i] + "'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);  
}
document.getElementById("partners").innerHTML = imageList.join('');

/*--------Random codes--------
//Note: submit button is initially disabled upon loading of this page-see <body> in html

var code = ''; // to store generated codes and initialize to empty value
var getCode = '';//to store entered code
var btnvalue;//for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHYJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
*/
