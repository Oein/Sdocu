function makeHint(){
    Set(0 , 1 , 6);
    Set(0 , 4 , 1);
    Set(0 , 6 , 5);
    Set(1 , 0 , 1);
    Set(1 , 2 , 5);
    Set(1 , 5 , 2);
    Set(1 , 7 , 3);
    Set(2 , 1 , 3);
    Set(2 , 3 , 7);
    Set(2 , 6 , 4);
    Set(2 , 8 , 8);
    Set(3 , 2 , 4);
    Set(3 , 4 , 3);
    Set(3 , 7 , 9);
    Set(4 , 0 , 8);
    Set(4 , 3 , 6);
    Set(4 , 5 , 7);
    Set(4 , 8 , 2);
    Set(5 , 1 , 5);
    Set(5 , 4 , 2);
    Set(5 , 6 , 1);
    Set(6 , 0 , 6);
    Set(6 , 2 , 7);
    Set(6 , 5 , 1);
    Set(6 , 7 , 4);
    Set(7 , 1 , 4);
    Set(7 , 3 , 8);
    Set(7 , 6 , 9);
    Set(7 , 8 , 5);
    Set(8 , 2 , 3);
    Set(8 , 4 , 6);
    Set(8 , 7 , 8);
}

function Set(x, y , d){
    document.getElementById(x + "." + y).value = d;
}