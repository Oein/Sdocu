function makeHint(){
    Set(0 , 3 , 1);
    Set(0 , 6 , 7);
    Set(1 , 2 , 2);
    Set(1 , 3 , 6);
    Set(1 , 5 , 3);
    Set(1 , 7 , 5);
    Set(2 , 1 , 5);
    Set(2 , 3 , 4);
    Set(2 , 6 , 2);
    Set(2 , 8 , 8);
    Set(3 , 0 , 4);
    Set(3 , 1 , 2);
    Set(3 , 2 , 5);
    Set(3 , 3 , 3);
    Set(3 , 7 , 8);
    Set(4 , 4 , 9);
    Set(5 , 1 , 8);
    Set(5 , 8 , 3);
    Set(5 , 7 , 1);
    Set(5 , 6 , 5);
    Set(5 , 5 , 4);
    Set(6 , 0 , 1);
    Set(6 , 2 , 4);
    Set(6 , 5 , 6);
    Set(6 , 7 , 7);
    Set(7 , 1 , 7);
    Set(7 , 3 , 9);
    Set(7 , 5 , 2);
    Set(7 , 6 , 6);
    Set(8 , 2 , 3);
    Set(8 , 5 , 1);
}

function Set(x , y , d){
    document.getElementById(x + "." + y).value = d;
}