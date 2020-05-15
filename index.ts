// Import stylesheets
import './style.css';

// // Write TypeScript code!

var psBall: number;

document.addEventListener('keydown', function(event){
  var key = event.keyCode;
  var char = String.fromCharCode(key);
  var psKeeper = () : number => {
    return Math.floor(Math.random()*3);
  }
  if(char == 'A'){
    psBall = 0;
  }
  else if(char == 'S'){
    psBall = 1;
  }
  else if(char == 'D'){
    psBall = 2;
  }

  if(char == 'A' || char == 'S' || char == 'D'){
    if(psKeeper() == psBall){
      alert("goal!!!")
    }
    else{
      alert("out!!");
    }
  }

})
