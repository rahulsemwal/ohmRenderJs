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
        return tpl;
    }
    /*var tpl = '<p>Hi, my name is {{name}}, and my age is {{age}}, living in {{address}}.</p>';
    var re = /{{([^}}]+)?}}/g,
        match; //focusing {{}} custom literal
    var cursor = 0,
        code,
        var startCode = function() {
            code = 'var r = [];\n';
        }
    var addCode = function(chunk) {
        code = code + 'r.push("' + chunk.replace(/"/g, '\\"') + '");\n'
    };
    var endCode = function() {
        code = code + 'return r.join("");';
    }
    startCode();
    while (match = re.exec(tpl)) {
        addCode(tpl.slice(cursor, match.index));
        addCode(match[1]);
        cursor = match.index + match[0].length;
    }
    addCode(tpl.substr(cursor, tpl.length - cursor));
    endCode();
    console.log(code);*/
UIengine2('<p>Hi, my name"s is {{name}}, and my age is {{age}}, living in {{address}}.</p>', {
    name: "rahul",
    age: 23
});