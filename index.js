var DEBUG = true;

if(DEBUG){window.addEventListener('error', function() {this.window.alert('Javascript Error')}, false);}

function setup() {
    document.getElementById('header_links').addEventListener('mouseover', function(event) {event.target.style.transition = '0.4s'; event.target.style.color = '#cccccc';} , false);
    document.getElementById('header_links').addEventListener('mouseout', function(event) {event.target.style.transition = '0.6s'; event.target.style.color = '#ffffff';} , false);

    headerLinks = document.getElementById('header_links').children;
    for ( i = 0; i < headerLinks.length; i++ ) {
        headerLink = headerLinks.item(i);
        if ( headerLink.hasAttribute('data-js_nav') ) {
            headerLink.addEventListener('click', function(event) { updateBodyToPage(this.getAttribute('data-js_nav')); event.preventDefault(); event.stopPropagation(); }, false);
            headerLink.addEventListener('keydown', function(event) { if(event.keycode == 13) updateBodyToPage(this.getAttribute('data-js_nav')); event.preventDefault(); event.stopPropagation(); }, false);
        }
    }
    document.getElementById('header_logo_bird').addEventListener('click', function(event) { updateBodyToPage(this.getAttribute('data-js_nav')); event.preventDefault(); event.stopPropagation(); }, false);
    document.getElementById('header_logo_bird').addEventListener('keydown', function(event) { updateBodyToPage(this.getAttribute('data-js_nav')); event.preventDefault(); event.stopPropagation(); }, false);
}

window.addEventListener('load', setup, false);

function updateBodyToPage(localPage) {
    var body = document.getElementById('main_body');
    body.style.transition = "opacity "+0.6+"s ease";
    body.style.opacity = 0;
    window.setTimeout(function() {
        writeLocalPageHTML(localPage, body);
        window.scrollTo(window.scrollX, 0);
        window.setTimeout( function() {body.style.opacity = 1;}, 100); // Timeout necessary here to prevent flicker
    }, 600);

}

function writeLocalPageHTML(localPage, destinationElement) {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onload = function() { 
        if ( ajaxRequest.status === 200 ) // Server status ok
            destinationElement.innerHTML = ajaxRequest.responseText;
        else
            console.log('Failed to retrieve loacal page "' + localPage + '" html from the server');
    }
    ajaxRequest.open('GET', localPage, true);
    ajaxRequest.send(null);
}
