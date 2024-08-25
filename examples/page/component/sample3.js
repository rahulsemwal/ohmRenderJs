// use html tag inside template, use with literals
function init(){
    var Root = document.getElementsByTagName("body")[0];
    var data1 = { name: "Robert", age: 24, address: { street: 'Boston USA' }, degree: ['BE', 'MS']};
    var data2 = { name: "Smule", age: 16, address: { street: 'New York USA' }, degree: ['high School']};
    var template = `<div class="profile">
                      <p>
                        Hi, my name is <%this.name%>, living in <%this.address.street%>.
                      </p>
                      <ul class="list">
                        <li>Age: <%this.age%>, 
                          <%if(this.age<18){%> 
                            Teenage 
                          <%} else{%> 
                            Adult 
                          <%}%>
                        </li>
                        <%for(var i = 0; i<this.degree.length; i++){%>
                            <li><%this.degree[i]%></li>
                        <%}%>
                      </ul>
                    </div>`;
    //Data binding and template parsing through ohmRender.js                
    var component = ohmify(template, function(){ /* callback */ });
    //Render
    Root.insertAdjacentHTML('beforeend', component(data1));
    Root.insertAdjacentHTML('beforeend', component(data2));
    Root.insertAdjacentHTML('beforeend', "<style>.list{ padding-left:15px;} div{ color:white; background: #d36f6f; padding:5px 10px; box-sizing:border-box;} div + div{background: #226f76;}</style>");
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