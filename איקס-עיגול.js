var arr=[];
var turn=0,num=0,count=0,cP1=0,cP2=0;
function Press(x)
{
    if(turn==0&&arr[x]!==1&&arr[x]!=2)
    {
        document.getElementById('p' + x).value = 'x';
        count++;  
        arr[x] = 1;
        turn = 1;
        if(Check(1))
        {
            document.getElementById('points').innerHTML = document.getElementById("a1").placeholder +"," +'you win the game!';
            cP1++;
            document.getElementById("points1").innerHTML = cP1;
        }
        else if (count == 9)
        {
        document.getElementById('points').innerHTML = 'Game - Over !';
        }
    }
    else
    {
        if(arr[x]!==1&&arr[x]!=2)
        {
            document.getElementById('p' + x).value = 'o';
            count++;  
            arr[x] =2;
            turn=0;
        }
        if(Check(2))
        {
            document.getElementById('points').innerHTML = document.getElementById("a2").placeholder+"," + 'you win the game!';
            cP2++;
            document.getElementById("points2").innerHTML = cP2;          
        }
        else if (count == 9)
        {
            document.getElementById('points').innerHTML = 'Game - Over !';
        }       
    }
}
function Check(a)
{
    for(var i=0; i<7; i+=3){
        if(arr[i]==a&&arr[i+1]==a&&arr[i+2]==a)
        {
            return true;
        }
    }
    for(var i=0; i<3; i++){
        if(arr[i]==a&&arr[i+3]==a&&arr[i+6]==a)
        {
            return true;
        }
    }
    if(arr[0]==a&&arr[4]==a&&arr[8]==a||arr[2]==a&&arr[4]==a&&arr[6]==a)
    {
        return true
    }
    return false;
}
function NewGame(){
    for(var i=0; i<9; i++){
        document.getElementById('p' + i).value = " ";
        arr[i]=0;
    }
    document.getElementById("a1").value = "player1";
    document.getElementById("a2").value="player2";
    document.getElementById('points').innerHTML=' ';
    document.getElementById("points1").innerHTML = ' ';
    document.getElementById("points2").innerHTML = ' ';
    turn=num=count=cP1=cP2=0;
}
function NextGame(){
    for (var i = 0; i < 9; i++) {
        document.getElementById('p' + i).value = " ";
        arr[i]=0;
    }
        document.getElementById('points').innerHTML = ' ';
        turn=num=count=0;
}