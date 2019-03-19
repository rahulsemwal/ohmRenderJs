/*MAIN-JS*/
function initApp() {debugger;
	
    // var data = {name:"Rahul",age:28,address:"Noida"};
    var data = {
        name: "rahul",
        age: 23,
        address: {
            street: 'Noida lan no 1'
        },
        degree: ['BCA', 'MCA']
    }
    var markup = document.getElementById("list2").innerHTML;
    var parsedMarkup = UIengine4(markup, data, function(r) {});
    var placeholder = document.getElementsByClassName("page");
    placeholder[0].innerHTML = parsedMarkup;
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