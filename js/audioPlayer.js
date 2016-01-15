if(localStorage.getItem("lastThingPlayed")){
 document.getElementById("audioguy").setAttribute("src", localStorage.getItem("lastThingPlayed"));
    
}

document.getElementById("load-audio").onclick = function(){
  var loadedSource = document.getElementById("source-input").value;
    document.getElementById("audioguy").setAttribute("src"
                                          
};

document.getElementById("speeddown").onclick = function(){
  document.getElementById("audioguy").playbackRate -= 0.1;
};

document.getElementById("speedup").onclick = function(){
  document.getElementById("audioguy").playbackRate += 0.1;
};

document.getElementById("speedreset").onclick = function(){
  document.getElementById("audioguy").playbackRate = 1;
};