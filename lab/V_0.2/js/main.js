/*MAIN-JS*/
//Glbal Reusable Components Declarion
var child1ParsedMarkup, child2ParsedMarkup;

function initApp() {
    var Root = document.getElementsByClassName("page")[0],
    markup = '', data;
    markup = document.getElementById("child-1").innerHTML;
    child1ParsedMarkup = UIengine(markup, function(r){});
    markup = document.getElementById("child-2").innerHTML;
    child2ParsedMarkup = UIengine(markup, function(r) {});
    data = {
        name: "Kunal",
        age: 23,
        address: {
            street: 'Noida lan no 1'
        },
        degree: ['BCA', 'MCA']
    }
    markup = document.getElementById("parent").innerHTML;
    var parentParsedMarkup = UIengine(markup, function(r) {});
    Root.insertAdjacentHTML('afterend', parentParsedMarkup(data));
}

window.document.onreadystatechange = function() {
    switch (document.readyState) {
        case 'loading':
            //in between of html parsing
            //loading();
            break;
        case 'interactive':
            //html fully parsed
            //sub-resources like image, frames, stylesheets are pending
            //loading(); or initApp();
            //ready for DOM manipulation
            initApp();
            break;
        case 'complete':
            //works as window.onload() event
            //html fully parsed
            //sub-resources like image, frames, stylesheets are loaded
            //initApp();
            break;
    }
}