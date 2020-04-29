//variables
var hits = 0;
var outs = 0;
var runs = 0;

//chance
    function startgame() {
      var outcome = Math.floor(Math.random() * 3)
      document.getElementById("button-text").innerHTML = outcome;
     if (outcome < 1){
    hits = hits + 1;
    };
    if (outcome < 1) {
    outs = outs+ 1;
    } 
 }
 
 //activasion 
document.getElementById("hit").innerHTML = 'hits: ' + hits;
document.getElementById("out").innerHTML = 'outs: ' + outs;
document.getElementById("run").innerHTML = 'runs: ' + runs;