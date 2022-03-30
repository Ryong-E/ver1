const canvas = document.getElementById("jsCanvas");
const color = document.getElementsByClassName("jsColor");
const ctx = canvas.getContext('2d');
const range = document.getElementById("jsRange");
const fill = document.getElementById("jsMode");

let fillAndPaint = false;

function pushFill(){ // fill버튼 클릭시 innerText변경 후 fillAndPaint false,true 변경
    if(fillAndPaint){
        fill.innerText = "fill";
        fillAndPaint = false;
    }else{
        fill.innerText = "paint"
        fillAndPaint = true;
    }
}

fill.addEventListener("click", pushFill)
function change(){
    ctx.strokeStyle = "#5856D6";
}
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";

ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

if (canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);

}

function handleColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

function handlerRange(event){
    const range = event.target.value;
    ctx.lineWidth = range;
}
if(range){
    range.addEventListener("input", handlerRange);
}
Array.from(color).forEach(color => color.addEventListener("click", handleColor));