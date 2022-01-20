   const audio = new Audio();
        audio.src = "https://www.dropbox.com/s/qss5mu1mqx655ux/bat_hit_ball.mp3?dl=1";
        
 
        
        
/*    //////////
var six = document.getElementById("six");
six.onclick = function(){
          audio.play();
          }
          
*/
    
var m = 1;   
var total = 0;
var bowler =Math.floor(Math.random()*7);
var compscore = Math.floor(Math.random()*100);
var targ = compscore+1;
/console.log(compscore );/
console.log("----- Ignore Line 1 Error ----- ");
console.log("  ");
console.log("YOUR MATCH HISTORY WILL RECORDED BELOW !");
console.log("  ");
console.log("MATCHDAY " + m + ". Your Target : " +targ);


document.getElementById("target").innerHTML = "Target : "+ targ;
//////
function zero(){
    
    myscore = 0;
    document.getElementById("player").innerHTML = "You Choose : "+ myscore;
    
    var bowler =Math.floor(Math.random()*7);
    
    document.getElementById("comp").innerHTML = "Computer Choose : "+ bowler;

    if(myscore == bowler){
        add();
    }
}

function one(){
    
    myscore = 1;
    document.getElementById("player").innerHTML = "You Choose : "+ myscore;
    
    var bowler =Math.floor(Math.random()*7);
    
    document.getElementById("comp").innerHTML = "Computer Choose : "+ bowler;

    if(myscore == bowler){
  alert("😲⚠️Out!!!😲⚠️");
  document.getElementById("urscore").innerHTML = " Total Score : " + 0;
  document.getElementById("player").innerHTML = "You Choose : "+ 0;
  document.getElementById("comp").innerHTML = "Computer Choose : "+ 0;
  total = 0;
  
  
    }else{
        add();
    }
}

function two(){
    
    myscore = 2;
    document.getElementById("player").innerHTML = "You Choose : "+ myscore;
    
    var bowler =Math.floor(Math.random()*7);
    
    document.getElementById("comp").innerHTML = "Computer Choose : "+ bowler;

    if(myscore == bowler){
        alert("😲⚠️Out!!!😲⚠️");
       total = 0; document.getElementById("urscore").innerHTML = " Total Score : " + 0;
    }else{
        add();
    }
}

function three(){
    
    myscore = 3;
    document.getElementById("player").innerHTML = "You Choose : "+ myscore;
    
    var bowler =Math.floor(Math.random()*7);
    
    document.getElementById("comp").innerHTML = "Computer Choose : "+ bowler;

    if(myscore == bowler){
        alert("😲⚠️Out!!!😲⚠️");
       total = 0; document.getElementById("urscore").innerHTML = " Total Score : " + 0;
    }else{
        add();
    }
}

function four(){
    
    myscore = 4;
    document.getElementById("player").innerHTML = "You Choose : "+ myscore;
    
    var bowler =Math.floor(Math.random()*7);
    
    document.getElementById("comp").innerHTML = "Computer Choose : "+ bowler;

    if(myscore == bowler){
        alert("😲⚠️Out!!!😲⚠️");
       total = 0; document.getElementById("urscore").innerHTML = " Total Score : " + 0;
    }else{
        add();
    }
}

function five(){
    
    myscore = 5;
    document.getElementById("player").innerHTML = "You Choose : "+ myscore;
    
    var bowler =Math.floor(Math.random()*7);
    
    document.getElementById("comp").innerHTML = "Computer Choose : "+ bowler;

    if(myscore == bowler){
        alert("😲⚠️Out!!!😲⚠️");
       total = 0; document.getElementById("urscore").innerHTML = " Total Score : " + 0;
    }else{
        add();
    }
}

function six(){
    
    myscore = 6;
    document.getElementById("player").innerHTML = "You Choose : "+ myscore;
    
    var bowler =Math.floor(Math.random()*7);
    
    document.getElementById("comp").innerHTML = "Computer Choose : "+ bowler;

    if(myscore == bowler){
    
        alert("😲⚠️Out!!!😲⚠️");
       total = 0; document.getElementById("urscore").innerHTML = " Total Score : " + 0;
        
    }else{
        add();
    }
/*    
    const audio = new Audio();
        audio.src = "https://www.dropbox.com/s/wlpnmbeu0ipqnkc/cricket%20shot.mp3?dl=1";
        
 
        
        
    //////////
var six = document.getElementById("six");
six.onclick = function(){
          audio.play();
          }
 */   
}


function add(){
    total = total + myscore;
    document.getElementById("urscore").innerHTML = "Total Score : "+ total;
    
    var urs = document.getElementById("urscore");

if(total > targ){
    alert("🥳🤩🎖️You Win !!!🥳🤩🎖️");
   compscore = Math.floor(Math.random()*100);
   targ = compscore+1;
   document.getElementById("target").innerHTML = "Target : "+ targ;
    total = 0;
    urs.innerHTML = "Total Score : "+total;
    m++;
    console.log("MATCHDAY "+m+". Your Target : " + targ);
}
}