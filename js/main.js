var bridgePlaying = false;

document.getElementById("play-btn").onclick = function(){
    if(bridgePlaying){
        document.getElementById("bridj").pause();
        document.getElementById("play-btn").innerHTML = "play";
        bridgePlaying = false;
    
    
    
    }
    else{
        bridgePlaying = true;
        document.getElementById("play-btn").innerHTML = "pause";
        document.getElementById("bridj").play();
    }
};

document.getElementById("speedup-btn").onclick = function(evt){
    evt.preventDefault();
    document.getElementById("bridj").playbackRate += 0.1;



};
document.getElementById("speeddown-btn").onclick = function(evt){
    evt.preventDefault():
    document.getElementById("bridj").playbackRate -= 0.1;


};