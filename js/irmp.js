// Remove existing stylesheets
for (let i = 0; i < document.getElementsByTagName('link').length; i++) {
    document.styleSheets[i].disabled = true;
}

// Let's start with a blank slate shall we
document.querySelector('.container').remove();
document.querySelector('table').remove();
document.querySelector('#fixedFooter').remove();
document.querySelector('#fader').remove();
document.querySelector('body').style.removeProperty('background');

// Add new HTML in probably the least professional way possible
document.body.innerHTML =
'<h1>Hello there</h1>' +
'<h2>yo just testing things hbu</h2>' +
'<p>yup thats cool hopefully it works</p>';

// trying to use external html file, not working yet, keep Googling
// $( body ).load( "directory/test.html" );