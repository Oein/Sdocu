function BodYoOnloaD(){
    let script_A = document.createElement("script");
    script_A.src = "./" + getParam("dif") + "/" + getParam("stage") + "/Awnser.js";

    let script_B = document.createElement("script");
    script_B.src = "./" + getParam("dif") + "/" + getParam("stage") + "/Hint.js";

    let script_C = document.createElement("script");
    script_C.src = "./js/Game.js";

    document.body.append(script_A);
    document.body.append(script_B);
    document.body.append(script_C);
    document.getElementById("title").innerText = "Sudoku " + getParam("dif").substring(0,1).toLocaleUpperCase() + getParam("dif").substring(1).toLocaleLowerCase() + " - " + getParam("stage");
}

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");

    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}