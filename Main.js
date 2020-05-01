//variables
var hits = 0;
var outs = 0;
var runs = 0;
document.getElementById("hit").innerHTML = 'hits: ' + hits;
document.getElementById("out").innerHTML = 'outs: ' + outs;
document.getElementById("run").innerHTML = 'runs: ' + runs;
//chance
    function startgame() {
      var outcome = Math.floor(Math.random() * 3)
      document.getElementById("button-text").innerHTML = outcome;
       //activation
     document.getElementById("hit").innerHTML = 'hits: ' + hits;
     document.getElementById("out").innerHTML = 'outs: ' + outs;
     document.getElementById("run").innerHTML = 'runs: ' + runs;
    if (outcome === 2){
    hits = hits + 1;
    document.getElementById("button-text").innerHTML = "HIT";
      if (hits >= 3) {
        runs = runs + 1   
      }
    }
    if (outcome < 2) {
    outs = outs+ 1;
    document.getElementById("button-text").innerHTML = "Out!";
      if (outs === 3) {
        hits = hits * 0;
        outs = hits * 0; 
        runs = runs * 0;
        document.getElementById("hit").innerHTML = 'hits: ' + hits;
        document.getElementById("out").innerHTML = 'outs: ' + outs;
        document.getElementById("run").innerHTML = 'runs: ' + runs;
      if(outs === 0){
        document.getElementById("button-text").innerHTML = "New Inning"
      }
    }
  }
}


