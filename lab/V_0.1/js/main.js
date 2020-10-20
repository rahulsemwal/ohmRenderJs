/*MAIN-JS*/
function initApp() {

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
    // var parsedMarkup = UIengine4(markup, data, function(r) {});
    var parsedMarkup = UIengine(markup, function(r) {});
    var placeholder = document.getElementsByClassName("page");
    // placeholder[0].innerHTML = parsedMarkup;
    placeholder[0].innerHTML = parsedMarkup(data);

    //Next level
    data = {
        name: "Kunal",
        age: 23,
        address: {
            street: 'Noida lan no 1'
        },
        degree: ['BCA', 'MSC']
    }
    markup = document.getElementById("list3").innerHTML;
    parsedMarkup = UIengine(markup, function(r) {});
    document.getElementsByClassName("page")[0].insertAdjacentHTML('afterend', parsedMarkup(data));

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