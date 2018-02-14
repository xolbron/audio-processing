var song;
var button;
var volumeSlider, rateSlider, panSlider;

function preload(){
    song = loadSound("sound/laurynhill-doowop (1).mp3");
}

function setup(){
    createCanvas(600,400);
    background(0);
    button = createButton("Play");
    button.mousePressed(togglePlaying);
    button.position(20, 540);
    // song.play();
}

function draw(){
    
}

function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
        button.html("Play");
    }
    else{
        song.play();
        song.setVolume(0.5);
        button.html("Pause");
    }
}