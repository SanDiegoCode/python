/* Adding the script tag to the head as suggested before */

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "http://code.jquery.com/jquery-2.2.1.min.js";

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

function handler() {
    console.log('jquery added :)');
    var main = document.getElementsByClassName('md-sidebar--secondary')[0]
    $('.md-sidebar--secondary').append('<br><br><iframe src="https://trinket.io/embed/python/985ef36abd" width="100%" height="80%" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>')
}



function openEditor() {
    document.getElementById("contentframe").style.display = "block";
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".sidebar {right: 50vw}";
    document.body.appendChild(css);

}
