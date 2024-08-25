// Basic fundamental of data binding with <%this.[key]%>
function init(){
    var Root = document.getElementsByTagName("body")[0];
    //JSON Data
    var data = { name: "World" };
    //HTML template
    var template = 'Hello <b><%this.name%>!</b>';
    //Data binding and template parsing through ohmRender.js
    var component = ohmify(template, function(){ /* callback */ });
    //Render 
    Root.insertAdjacentHTML('beforeend', component(data));
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

  