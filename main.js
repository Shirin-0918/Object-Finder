//variables
status="";

function preload(){}

function setup(){
    canvas=createCanvas(300,260);
    canvas.position(530,150);
    video=createCapture(VIDEO);
    video.size(300,260)
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects"
    value=document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}

function draw(){
    image(video,0,0,300,260)
}