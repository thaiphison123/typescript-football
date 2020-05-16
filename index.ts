// Import stylesheets
import './style.css';

// // Write TypeScript code!


document.addEventListener('keydown', function(event){
  
  let key  :number = event.keyCode;
  let char : String = String.fromCharCode(key);

  let keeperMove = document.getElementById('keeperMove');
  let ballMove = document.getElementById('ballMove');

  let psBall: number;
  let psKeeper : number =  Math.floor(Math.random()*3);
  console.log(psKeeper);

  if(char == 'A' || char == 'S' || char == 'D'){
    if(char == 'A'){
      psBall = 0;
      ballMove.style.left = '-150px';
      ballMove.style.top = '-300px';
      ballMove.style.transition = '0.5s';
    }
    else if(char == 'S'){
      psBall = 1;
      ballMove.style.left = '0';
      ballMove.style.top = '-280px';
      ballMove.style.transition = '0.5s';
    }
    else if(char == 'D'){
      psBall = 2;
      ballMove.style.left = '150px';
      ballMove.style.top = '-300px';
      ballMove.style.transition = '0.5s';
    }
  }


  if(psKeeper == 0){
    keeperMove.style.left = '-150px';
    keeperMove.style.transition = '0.5s ease-out';
  }
  else if(psKeeper == 2){
    keeperMove.style.left = '150px';
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
