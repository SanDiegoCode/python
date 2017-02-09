function setup() {
	var main = document.getElementsByClassName('main')[0]
	main.insertAdjacentHTML('afterend', '<div class="drawer sidebar" id="sidebar" style=""> <div class="a"><div class="b"><div class="c"><!-- Your SVG Here --><a href="#" onclick="openEditor();"> <svg width="50" height="300" > <text x="28" y="50%" transform="rotate(-90, 28, 150)" style="text-anchor:middle; font-size:14px">Open Editor</text> </svg> </a></div></div></div> </div><div id="contentframe" style="position:relative; height: 100vh; right: 0px; left: 50vw;"><iframe src="https://trinket.io/embed/python/9be29ea331?toggleCode=true&runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0"></iframe></div>');
}

function openEditor() {
  document.getElementById("contentframe").style.display = "block";
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".sidebar {right: 50vw}";
document.body.appendChild(css);

}