function init(){
  var Root = document.getElementsByTagName("body")[0];
  //JSON Data
  var data1 = { name: "World" };
  var data2 = { name: "Shaktiman" };
  var data3 = { name: "Ironman" };
  var data4 = { name: "Groot" };
  //HTML template
  var template = 'Hello <b><%this.name%>!</b></br>';
  //Data binding and template parsing through ohmRender.js
  var component = ohmify(template);
  //Render 
  Root.insertAdjacentHTML('beforeend', component(data1));
  Root.insertAdjacentHTML('beforeend', component(data2));
  Root.insertAdjacentHTML('beforeend', component(data3));
  Root.insertAdjacentHTML('beforeend', component(data4));
}















/*Inject ohmRender.js library into DOM */
function loadScript(path, callback) {
  const scriptTag = document.createElement("script");
  scriptTag.src = path;
  scriptTag.onload = callback;
  document.body.appendChild(scriptTag);
}

loadScript("../../lib/js/ohmRender.js", function () {
  init();
});
/*End*/

