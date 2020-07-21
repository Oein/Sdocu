function makeHint(){
    Set(0,0,4);
    Set(0,1,5);
    Set(0,5,9);
    Set(0,8,7);
    Set(1,0,7);
    Set(1,4,6);
    Set(1,6,2);
    Set(2,2,6);
    Set(2,4,5);
    Set(2,6,1);
    Set(2,7,9);
    Set(3,3,6);
    Set(3,8,8);
    Set(4,1,8);
    Set(4,2,3);
    Set(4,6,4);
    Set(4,7,5);
    Set(5,0,5);
    Set(5,5,1);
    Set(6,1,1);
    Set(6,2,8);
    Set(6,4,7);
    Set(6,6,3);
    Set(7,2,9);
    Set(7,4,8);
    Set(7,8,2);
    Set(8,0,6);
    Set(8,3,2);
    Set(8,7,4);
    Set(8,8,1);
}

function Set(x, y , d){
    document.getElementById(x + "." + y).value = d;
}