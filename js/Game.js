let life = 300;

makeTable();

function makeTable() {
    
    let table = document.createElement("table");
    log("let table");

    table.id="table";
    log("table id table");

    for (let i = 0; i < 9; i++) {
        let tr = document.createElement("tr");
        log(i + "let tr");

        for (let j = 0; j < 9; j++) {
            log(j + " into for");
            let td = document.createElement("td");
            log(j + " td");
            let input = document.createElement("input");
            log(j + " input");

            td.id = j + "a" + i;

            input.type = "number";
            log(j + " input type");

            input.id = i + "." + j;
            log(j + " input id");

            input.max = 9;
            log(j + " input max");

            input.min = 0;
            log(j + " input min");

            input.x = j;
            log("input set x");

            input.y = i;
            log("input set y");

            td.append(input);
            log(j + " td ap");

            tr.append(td);
            log(j + " tr ap");

            input.oninput = function () {
                input.value = input.value % 10;
                log(
                    "changed! id : " +
                        input.id.replace(".", " , ") +
                        "   Number : " +
                        input.value
                );

                check(input.x , input.y , input.value);
            };

            log(j + "input oninput");
        }
        table.append(tr);
        log(i + " tb ap");
    }

    let div = document.createElement("div");
    log("let Life div");

    div.id="life";
    log("div id Set");

    div.innerText = "남은 목숨 : " + life;
    log("div innerText Set")

    document.body.append(div);
    log("ap life div")

    document.body.append(table);
    log("ap table");

    makeHint();
}

function log(string) {
    console.log(string);
}

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength) {
        object.value = object.value.slice(1, object.maxLength);
    }
}

function check(x , y , data){
    log("come to check");
    if(data != ""){
        if(data != Awnser[Number(y)][Number(x)]){
            let a = document.createElement("audio");
            a.autoplay = true;
            a.src="./Beep.wav";
            a.id="beep";
            a.style.width = "0px";
            document.body.append(a);
            life = life  - 1;
            document.getElementById("life").innerText = "남은 목숨 : " + life;
        }else{
            let a = document.createElement("audio");
            a.autoplay = true;
            a.src="./Right.MP3";
            a.id="beep";
            a.style.width = "0px";
            document.body.append(a);

            GameEnd();
        }
    }

    log(
        "changed! id : " +
            x + " , " + y +
            "   Number : " +
            data
    );

    if(Number(document.getElementById("life").innerText.replace("남은 목숨 : " , "")) <= 0){
        let child = document.getElementById("beep");
        child.parentNode.removeChild(child);

        child = document.getElementById("table");
        child.parentNode.removeChild(child);

        let b = document.createElement("audio");
        b.autoplay = true;
        b.src="./GO.wav";
        b.id="go";
        b.style.width = "0px";

        let newURL = window.location.protocol + "/" + window.location.host + "/" + window.location.pathname;

        let RestartButton = document.createElement("button");
        RestartButton.id="RestartButton";
        RestartButton.innerText = "다시 시작";
        RestartButton.onclick = function(){
            history.go(0);
        };

        document.body.append(b);
        document.body.append(RestartButton);
    }
}

function GameEnd(){
    for(var i = 0; i < 9;i++){
        for(var j = 0; j < 9;j++){
            if(document.getElementById(i + "." + j).value == ""){
                return ;
            }

            if(document.getElementById(i + "." + j).value != Awnser[i][j]){
                return ;
            }
        }
    }

    let b = document.createElement("audio");
    b.autoplay = true;
    b.src="./GG.wav";
    b.id="go";
    b.style.width = "0px";

    document.body.append(b);

    alert("게임 클리어!");

    setTimeout(next , 7500);
}

function next(){
    location.href= "http://sudoku.oein.kro.kr/MainGame.html?dif=" + getParam("dif") + "&stage=" + (getParam("stage") * 1 + 1);
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