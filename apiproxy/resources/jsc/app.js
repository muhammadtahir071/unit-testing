// app.js
// JavaScript callout used to check and set the HTTP verb on the request.

function checkVerb() {
    var verb = context.getVariable('request.verb');
    return verb;
}

function setVerb() {
    return context.setVariable('request.verb', 'POST');
}