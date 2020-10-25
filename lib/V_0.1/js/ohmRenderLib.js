/*OHM-RENDER-LIB-JS*/
/*@Author: Rahul Semwal
**@Method: Regex
**@DOC:By different method
**@LEVEL-5:Suport for complex object DS like {name:'rahul',age:23,address:{street:'Noida Lan 1'},degree:['BCA','MCA']} 
**@TASK: It returns a reusable function by which we can bind object at any time when user want, like handlebar js*/
UIengine = function(tpl, cb) {
    //magic go here.
    var re = /<%([^%>]+)?%>/g,
        codeReExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
        cursor = 0,
        code,
        startCode = function() {
            code = 'var r = [];\n';
        },
        addCode = function(chunk, jsCode) {//parser here
            jsCode ? chunk.match(codeReExp) ? (code = code + chunk + '\n') :
                (code = code + 'r.push(' + chunk + ');\n') :
                (code = code + 'r.push("' + chunk.replace(/"/g, '\\"') + '");\n');
        },
        endCode = function() {
            code = code + 'return r.join("");';
        },
        runCode = function(parsedCode) {
            parsedCode = parsedCode.replace(/[\r\t\n]/g, '');
            console.log(parsedCode);
            // return new Function(parsedCode).call(obj);
            return function(obj){
              return new Function(parsedCode).call(obj)
            };
        };
    startCode();
    while (match = re.exec(tpl)) {
        addCode(tpl.slice(cursor, match.index));
        addCode(match[1], true);
        // addCode('this.' + match[1], true);this approch will not work for this scenario
        cursor = match.index + match[0].length;
    }
    addCode(tpl.substr(cursor, tpl.length - cursor));
    endCode();
    console.log(code, typeof code);
    //magic end here.
    if (typeof cb == "function") {
        cb(tpl);
    }
    return runCode(code);
}
/*
**@Example : 
    UIengine('<p>Hi, my name"s is <%this.name%>, and my age is <%this.age%>, living in <%this.address.street%>.</p><%for(var i = 0; i<this.degree.length; i++){%><p><%this.degree[i]%></p><%}%>', {
        name: "rahul",
        age: 23,
        address: {
            street: 'Noida lan no 1'
        },
        degree: ['BCA', 'MCA']
    });
*/