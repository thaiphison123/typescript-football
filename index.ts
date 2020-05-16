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
  console.log(psKeeper);

  if(char == 'A' || char == 'S' || char == 'D'){
    if(char == 'A'){
      psBall = 0;
      ballMove.style.left = '30%';
      ballMove.style.top = '85px';
      ballMove.style.transition = '0.5s';
    }
    else if(char == 'S'){
      psBall = 1;
      ballMove.style.left = '47.3%';
      ballMove.style.top = '105px';
      ballMove.style.transition = '0.5s';
    }
    else if(char == 'D'){
      psBall = 2;
      ballMove.style.left = '65%';
      ballMove.style.top = '85px';
      ballMove.style.transition = '0.5s';
    }
  }


  if(psKeeper == 0){
    keeperMove.style.left = '-35%';
    keeperMove.style.transition = '0.5s ease-out';
  }
  else if(psKeeper == 2){
    keeperMove.style.left = '35%';
    keeperMove.style.transition = '0.5s ease-out';
  }
  else{
    keeperMove.style.top = '20px';
    keeperMove.style.transition = '0.25s ease-out';
  }

  if(char == 'A' || char == 'S' || char == 'D'){
    setTimeout(function(){
      if(psKeeper == psBall){
        alert("Out!!!")
        window.location.reload(true);
      }
      else{
        alert("Goal!!");
        window.location.reload(true);
      }
    },500);
  }

})
