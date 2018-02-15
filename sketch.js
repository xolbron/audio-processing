var song;
var button, skipButton;
var volumeSlider, rateSlider, panSlider;
var amp, volume, size;

function preload(){
    song = loadSound("sound/laurynhill-doowop (1).mp3");
}

function setup(){
    createCanvas(1420,650);
    background(0);
    button = createButton("Play");
    button.mousePressed(togglePlaying);
    button.position(20, 160);
    
    skipButton = createButton("Skip");
    skipButton.mousePressed(skip);
    skipButton.position(70, 160);
    
    volumeSlider = createSlider(0, 1, 0.5, 0.05);
    volumeSlider.position(20, 190);
    
    rateSlider = createSlider(0.5, 1.5, 1, 0.05);
    rateSlider.position(20, 220);
    
    panSlider = createSlider(-1, 1, 0, 0.05);
    panSlider.position(20, 250);
    
    //Add Cue
    //song.addCue(1, showSquare);
    
    amp = new p5.Amplitude();
    
}

function draw(){
    background(0);
    volume = amp.getLevel();
    size = map(volume, 0, 1, 0, 600);
    
    song.setVolume(volumeSlider.value());
    song.rate(rateSlider.value());
    song.pan(panSlider.value());
    
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2, height/2, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2 + 100, height/2 + 100, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2 + 100, height/2 - 100, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2 + 100, height/2, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2 + 200, height/2, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2 - 200, height/2, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2 - 100, height/2, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2 - 100, height/2 + 100, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2 - 100, height/2 - 100, size, size);
     fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2, height/2 + 200, size, size);
    fill(255, random(255), random(255));
    rectMode(CENTER);
    rect(width/2, height/2 + 100, size, size);
}

function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
        button.html("Play");
    }
    else{
        song.play();
        button.html("Pause");
    }
}

function skip(){
    if(song.isPlaying){
        song.jump(song.currentTime()+5);
    }
}

function showSquare(){
    fill(255);
    rect(width/2, height/2, size, size);
}