// use html tag inside template, use with literals
// import {Sum} from sample4;
// console.log(Sum());
(function($w){
    var components = {};
    function render(Root, data){
        var app = components.app;
        Root.insertAdjacentHTML('beforeend', app(data));
    }
    function init(){
        var Root = document.getElementsByTagName("body")[0];
        var data = [{ name: "Robert", age: 24, address: { street: 'Boston USA' }, degree: ['BE', 'MS']},
                    { name: "Smule", age: 16, address: { street: 'New York USA' }, degree: ['high School']}];
        var templates = {}; 
        templates.app = 
        `<div class="app">
            <%components.style()%>
            <%for(var i = 0; i<this.length; i++){%>
                <%components.profile(this[i])%>
            <%}%>
        </div>`;         
        templates.profile = 
        `<div class="profile">
            <header></header>    
            <p>
                Hi, my name is <%this.name%>, living in <%this.address.street%>.
            </p>
            <ul class="list">
                <%components.age(this)%>
                <%components.degree(this)%>
            </ul>
        </div>`;
        templates.age = 
        `<li>Age: <%this.age%>, 
            <%if(this.age<18){%> 
                Teenage 
            <%} else{%> 
                Adult 
            <%}%>
        </li>`;                
        templates.degree  = 
        `<%for(var i = 0; i<this.degree.length; i++){%>
            <li><%this.degree[i]%></li>
        <%}%>`;
        templates.style = 
        `<style>
            .app>div.profile{ 
                height:122px;
                color:white; 
                background: #d36f6f; 
                padding:5px 10px; 
                box-sizing:border-box;
            } 
            .app > div.profile + div.profile{
                background: #226f76;
            }
            .list{ 
                padding-left:15px;
            } 
        </style>`;
        //Parse all templates once and save partial functions in component bucket           
        for(var o in templates){
            components[o] = ohmify(templates[o]);
        }
        render(Root, data);
    }
    $w.init = init;
    $w.components = components;
})(window)





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