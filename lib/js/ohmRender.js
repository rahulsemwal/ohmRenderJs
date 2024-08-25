/*OHM-RENDER-LIB-JS*/
/*@Author: Rahul Semwal
**@Version: 1
**@Method: Regex
**@TASK: It returns a reusable function by which we can bind object at any time when user want, like handlebar js does*/
(function($w){
    ohmify = function(tpl, cb) {
        //magic goes here.
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
                return function(obj){
                  return new Function(parsedCode).call(obj)
                };
            };
        startCode();
        while (match = re.exec(tpl)) {
            addCode(tpl.slice(cursor, match.index));
            addCode(match[1], true);
            cursor = match.index + match[0].length;
        }
        addCode(tpl.substr(cursor, tpl.length - cursor));
        endCode();
        if (typeof cb == "function") {
            cb(tpl);
        }
        return runCode(code);
    }
    //@Expose
    $w.ohmify = ohmify;
})(window);
