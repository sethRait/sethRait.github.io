var gn = new GyroNorm(); // For gyroscope and motion data

$(document).ready(runner());
var json;

function runner() {
    fillCreepyIpStats();
    gyro();
}


function fillCreepyIpStats() {
    $.getJSON('https://ipapi.co/json/', function (json) {
        console.log(json);
        Object.keys(json).forEach(function(key) {
            console.log(key + " : " + json[key]);
        });
        $('#location').append(json['city'] + " " + json['region'] + " " + json['country']);
        $('#isp').append(json['org']);
        $('#ipAddress').append(json['ip']);
        var requestString = buildrequestString(json);
        $('#map').append(requestString);
    });
}

function buildrequestString(json) {
    var iframeHeader = '<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?';
    var iframeFooter = " allowfullscreen></iframe>";
    var apiKey = '&key=AIzaSyBmpCMnSgCf83X2oI1TQ3aZTOvKhKXe18A"';
    latitude = json['latitude'];
    longitude = json['longitude'];
    var requestString = iframeHeader + 'q=' + latitude + ', ' + longitude + apiKey + iframeFooter;
    return requestString;
}

function gyro() {
    gn.init().then(function() {
        gn.start(function(data) {
            console.log("WE HAVE DATA");
            console.log(data);
            return;
        });
    }).catch(function(e) {
        // Handle if DeviceOrientation or DeviceMotion is not supported by
        // the browser or device.
        console.log("You're not using a phone!");
    });
}
