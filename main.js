function setup(){
    canvas=createCanvas(600,700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

song_harrypotter="";
song_peterpan=""

function preload(){
    song = loadSound("music.mp3");
}

function play(){
    song.play();
}