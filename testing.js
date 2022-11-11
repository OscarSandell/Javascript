/**
 * @type HTMLCanvasElement
 */

console.log("Hello World!");



let coordinates = {
    x:0,
    y:0
}

function create_array(){
    let array = new Array(1000);
    let counter =0;
    for (let index = 0; index < 100;index++) {
        
        for (let indey =0;indey < 100;indey++){
            array[index] = coordinates;
            
            counter++;
        }   
    }
    return array;
}

function kordinat(x,y)
{
    this.X = x;
    this.Y = y;
}

function create_cordinates() {
    let array = new Array(1000);
    let x = 0;
    let y = 0;
    for (let index = 0; index < 1000;index++) {
        array[index] = new kordinat(x,y);
        x += 10;
        x = x % 1920;
        y += 10;
        y = y % 1080;
    }
    return array;
    
}


let array = create_array();
let Coordinates = create_cordinates();
//let array3 = createarrrrray();

function draw(x,y){
    const canvas = document.getElementsByClassName("canvas");
    //const canvas = document.getElementById("Mycanvas");
    console.log("Typeof canvas = " + typeof canvas);
    const ctx = canvas[0].getContext('2d');
    ctx.fillstyle = "#009578";
    ctx.fillText("Hello World!",100,150);
    return canvas;    

}

function drawpoint(x,y,colour,radie){
    var c = document.getElementsByClassName("canvas");
    var ctx = c[0].getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,radie,0,2 * Math.PI);
    ctx.stroke();
}

for (let index = 0; index < 1000; index++) {
    console.log("X = " + Coordinates[index].x + "  Y = " + Coordinates[index].y);
    
}

for (let index = 0; index < 1000;index++) {   
    drawpoint(Coordinates[index].X,Coordinates[index].Y,"blue",5);
    console.log("Hej");
}