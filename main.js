video="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.position(540,180);
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}