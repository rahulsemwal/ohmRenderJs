/*MAIN-JS*/
//Glbal Reusable Components Declarion
//First independent component
function child1ParsedMarkup(props){
    var markup = document.getElementById("child-1").innerHTML;
    var parsedMarkup = ohmify(markup, function(r){});
    return parsedMarkup(props);
};
//Second independent component
function child2ParsedMarkup(props){
    var markup = document.getElementById("child-2").innerHTML;
    var parsedMarkup = ohmify(markup, function(r) {});
    return parsedMarkup(props);
}

function initApp() {
    var Root = document.getElementsByClassName("page")[0];
    var data = { name: "Kunal", age: 23, address: { street: 'Noida lan no 1' }, degree: ['BCA', 'MCA']}
    // var markup = document.getElementById("child-1").innerHTML;
    // child1ParsedMarkup = ohmify(markup, function(r){});
    // markup = document.getElementById("child-2").innerHTML;
    // child2ParsedMarkup = ohmify(markup, function(r) {});
    var markup = document.getElementById("parent").innerHTML;
    var parentParsedMarkup = ohmify(markup, function(r) {});
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