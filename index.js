var DEBUG = true;

if(DEBUG){window.addEventListener('error', function() {this.window.alert("Error loading dynamic functionality")}, false);}
document.getElementById('header_links').addEventListener('mouseover', function(e) {e.target.style.transition = '0s'; e.target.style.color = '#cccccc';} , false);
document.getElementById('header_links').addEventListener('mouseout', function(e) {e.target.style.transition = '0.5s'; e.target.style.color = '#ffffff';} , false);