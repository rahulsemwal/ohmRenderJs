/*MAIN-JS*/
function initApp() {
    var Root = document.getElementsByClassName("page"),
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
        degree: ['BCA', 'MSC']
    }
    markup = document.getElementById("parent").innerHTML;
    var parentParsedMarkup = UIengine(markup, function(r) {});
    Root[0].insertAdjacentHTML('afterend', parentParsedMarkup(data));
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