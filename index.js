var DEBUG = true;

if(DEBUG){window.addEventListener('error', function() {this.window.alert("Javascript Debug Exception")}, false);}

function swapPageBody(event, page) {
    return false;
}

function setup() {
    // Navigation events
    document.getElementById('header_links').addEventListener('mouseover', function(event) {event.target.style.transition = '0.4s'; event.target.style.color = '#cccccc';} , false);
    document.getElementById('header_links').addEventListener('mouseout', function(event) {event.target.style.transition = '0.6s'; event.target.style.color = '#ffffff';} , false);
}

window.addEventListener('load', setup, false);