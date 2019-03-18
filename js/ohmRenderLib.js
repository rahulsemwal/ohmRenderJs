/*OHM-RENDER-LIB-JS*/
/*@DOC:By RegEx method*/
UIengine = function(tpl, obj, cb) {
    //magic go here.
    var re = /{{([^}}]+)?}}/g,
        match; //focusing {{}} custom literal
    while (match = re.exec(tpl)) {
        tpl = tpl.replace(match[0], obj[match[1]])
    }
    //magic end here.
    if (typeof cb == "function") {
        cb(tpl);
    }
    return tpl;
}

/*@DOC:By different method*/
UIengine2 = function(tpl, obj, cb) {
        //magic go here.
        var re = /{{([^}}]+)?}}/g,
            cursor = 0,
            code,
            startCode = function() {
                code = 'var r = [];\n';
            },
            addCode = function(chunk, jsCode) {
                jsCode ? (code = code + 'r.push(' + chunk + ');\n') :
                    (code = code + 'r.push("' + chunk.replace(/"/g, '\\"') + '");\n');
            },
            endCode = function() {
                code = code + 'return r.join("");';
            },
            runCode = function(parsedCode,obj){
              parsedCode = parsedCode.replace(/[\r\t\n]/g, '');
              return new Function(parsedCode).call(obj);
            };
        startCode();
        while (match = re.exec(tpl)) {
            addCode(tpl.slice(cursor, match.index));
            // addCode(match[1], true);
            addCode('this.' + match[1], true);
            cursor = match.index + match[0].length;
        }
        addCode(tpl.substr(cursor, tpl.length - cursor));
        endCode();
        console.log(code, typeof code);
        //magic end here.
        if (typeof cb == "function") {
            cb(tpl);
        }
        return runCode(code,obj);
        // return new Function(code.replace(/[\r\t\n]/g, '')).apply(obj);
        // return tpl;
    }
    
UIengine2('<p>Hi, my name"s is {{name}}, and my age is {{age}}, living in {{address.street}}.</p>', {
    name: "rahul",
    age: 23,
    address:{street:'Noida lan no 1'}
});

/*@DOC:By different method*/
UIengine3 = function(tpl, obj, cb) {
        //magic go here.
        var re = /{{([^}}]+)?}}/g,
            cursor = 0,
            code,
            startCode = function() {
                code = 'var r = [];\n';
            },
            addCode = function(chunk, jsCode) {
                jsCode ? (code = code + 'r.push(' + chunk + ');\n') :
                    (code = code + 'r.push("' + chunk.replace(/"/g, '\\"') + '");\n');
            },
            endCode = function() {
                code = code + 'return r.join("");';
            },
            runCode = function(parsedCode,obj){
              parsedCode = parsedCode.replace(/[\r\t\n]/g, '');
              return new Function(parsedCode).call(obj);
            };
        startCode();
        while (match = re.exec(tpl)) {
            addCode(tpl.slice(cursor, match.index));
            // addCode(match[1], true);
            addCode('this.' + match[1], true);
            cursor = match.index + match[0].length;
        }
        addCode(tpl.substr(cursor, tpl.length - cursor));
        endCode();
        console.log(code, typeof code);
        //magic end here.
        if (typeof cb == "function") {
            cb(tpl);
        }
        return runCode(code,obj);
        // return new Function(code.replace(/[\r\t\n]/g, '')).apply(obj);
        // return tpl;
    }
    
UIengine2('{{this[0]}}<p>Hi, my name"s is {{name}}, and my age is {{age}}, living in {{address.street}}.</p>', {
    '0':'first tupple',
    name: "rahul",
    age: 23,
    address:{street:'Noida lan no 1'}
});