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

// F12 버튼 방지
$(document).ready(function(){
    $(document).bind('keydown',function(e){
        if ( e.keyCode == 123 /* F12 */) {
            e.preventDefault();
            e.returnValue = false;
        }
    });
});

// 우측 클릭 방지
document.onmousedown=disableclick;
status="Right click is not available.";

function disableclick(event){
    if (event.button==2) {
        alert(status);
        return false;
    }
}