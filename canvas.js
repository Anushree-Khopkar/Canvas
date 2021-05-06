let canvas = document.getElementById("a");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.height)
console.log(canvas.width)
let a = canvas.getContext("2d");
let x = 100;
let y = 100;
function draw(){
    console.log(x)
    console.log(y)
    a.moveTo(x,y);
    for(var j= 1; j<6;j=j+1){
        for(var i = 1; i<6; i = i+1){
            x = x+60;
            y = y+90;
            console.log(x)
            console.log(y)
            a.lineTo(x, y);
            x = x+60;
            y = y-90;
            console.log(x)
            console.log(y)
            a.lineTo(x, y);    
        }
        x = x - 120*5;
        console.log(x)
        console.log(y)
        a.lineTo(x,y);
        x = x + 60;
        y = y + 90;
        console.log(x)
        console.log(y)
    }
    a.fillStyle = "black";
    a.fill();
    a.strokeStyle = "black";
    a.stroke();
}