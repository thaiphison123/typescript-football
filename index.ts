// Import stylesheets
import './style.css';

// // Write TypeScript code!

let psBall: number;

document.addEventListener('keydown', function(event){
  
  let key = event.keyCode;
  let char = String.fromCharCode(key);

  let keeperMove = document.getElementById('keeperMove');
  let ballMove = document.getElementById('ballMove');

  let psKeeper : number =  Math.floor(Math.random()*3);

  if(char == 'A'){
    psBall = 0;
  }
  else if(char == 'S'){
    psBall = 1;
  }
  else if(char == 'D'){
    psBall = 2;
  }


  // if(char == 'A' || char == 'S' || char == 'D'){
  //   if(psKeeper() == psBall){
  //     alert("goal!!!")
  //   }
  //   else{
  //     alert("out!!");
  //   }
  // }

})
