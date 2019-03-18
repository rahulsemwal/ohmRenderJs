/*MAIN-JS*/
function initApp(){
	var data = {name:"Rahul",age:28,address:"Noida"};
	var markup = document.getElementById("list").innerHTML;
	var parsedMarkup = UIengine(markup, data, function(r){});
	var placeholder = document.getElementsByClassName("page");
	placeholder[0].innerHTML = parsedMarkup;
}

window.document.onreadystatechange = function(){
	switch(document.readyState){
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