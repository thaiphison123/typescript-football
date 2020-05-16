// Import stylesheets
import './style.css';

// // Write TypeScript code!


document.addEventListener('keydown', function(event){
  
  let key  :number = event.keyCode;
  let char : String = String.fromCharCode(key);

  let keeperMove = document.getElementById('keeperMove');
  let ballMove = document.getElementById('ballMove');
  let headMove = document.getElementById('headMove');
  let handLeftMove = document.getElementById('hand-leftMove');
  let handRightMove = document.getElementById('hand-rightMove');
  let footLeftMove = document.getElementById('foot-leftMove');
  let footRightMove = document.getElementById('foot-rightMove');



  let psBall: number;
  let psKeeper : number =  Math.floor(Math.random()*3);
  console.log(psKeeper);

  if(char == 'A' || char == 'S' || char == 'D'){
    if(char == 'A'){
      psBall = 0;
      ballMove.style.left = '-170px';
      ballMove.style.top = '-290px';
      ballMove.style.transition = '0.5s';
      ballMove.style.width = '17px';
      ballMove.style.height = '17px';
    }
    else if(char == 'S'){
      psBall = 1;
      ballMove.style.left = '0';
      ballMove.style.top = '-290px';
      ballMove.style.transition = '0.5s';
      ballMove.style.width = '17px';
      ballMove.style.height = '17px';
    }
    else if(char == 'D'){
      psBall = 2;
      ballMove.style.left = '170px';
      ballMove.style.top = '-290px';
      ballMove.style.transition = '0.5s';
      ballMove.style.width = '17px';
      ballMove.style.height = '17px';
    }
  }

  if(char == 'A' || char == 'S' || char == 'D'){
    if(psKeeper == 0){
      keeperMove.style.left = '-100px';
      keeperMove.style.transform = 'rotate(-65deg)';
      keeperMove.style.transition = '0.5s ease-out';
      handLeftMove.style.transform = 'rotate(60deg)';
      handRightMove.style.transform = 'rotate(-60deg)';
      headMove.style.top = '4px';
      footLeftMove.style.height = '20px';
      footRightMove.style.height = '35px';
    }
    else if(psKeeper == 2){
      keeperMove.style.left = '100px';
      keeperMove.style.transform = 'rotate(65deg)';
      keeperMove.style.transition = '0.5s ease-out';
      handLeftMove.style.transform = 'rotate(60deg)';
      handRightMove.style.transform = 'rotate(-60deg)';
      headMove.style.top = '4px';
      footLeftMove.style.height = '35px';
      footRightMove.style.height = '20px';
    }
    else{
      keeperMove.style.top = '10px';
      keeperMove.style.transition = '0.5s ease-out';
      handLeftMove.style.transform = 'rotate(0deg)';
      handRightMove.style.transform = 'rotate(-0deg)';
      handLeftMove.style.height = '15px';
      handRightMove.style.height = '15px';
      handLeftMove.style.width = '15px';
      handRightMove.style.width = '15px';
      handLeftMove.style.borderRadius = '50%';
      handRightMove.style.borderRadius = '50%';
      handLeftMove.style.left = '-25px';
      handRightMove.style.left = '25px';
    }
  }

  if(char == 'A' || char == 'S' || char == 'D'){
    setTimeout(function(){
      if(psKeeper == psBall){
        alert("Out!!!")
        keeperMove.style.left = '0';
        keeperMove.style.top = '0';
        keeperMove.style.transform = 'rotate(0deg)';
        handLeftMove.style.transform = 'rotate(20deg)';
        handRightMove.style.transform = 'rotate(-20deg)';

        handLeftMove.style.height = '5px';
        handRightMove.style.height = '5px';
        handLeftMove.style.width = '30px';
        handRightMove.style.width = '30px';
        handLeftMove.style.borderRadius = '0';
        handRightMove.style.borderRadius = '0';
        handLeftMove.style.left = '-33px';
        handRightMove.style.left = '33px';

        footLeftMove.style.height = '30px';
        footRightMove.style.height = '30px';
        headMove.style.top = '0';
        ballMove.style.left = '0';
        ballMove.style.top = '0';
        ballMove.style.width = '25px';
        ballMove.style.height = '25px';

      }
      else{
        alert("Goal!!");
        keeperMove.style.left = '0';
        keeperMove.style.top = '0';
        keeperMove.style.transform = 'rotate(0deg)';
        handLeftMove.style.transform = 'rotate(20deg)';
        handRightMove.style.transform = 'rotate(-20deg)';

        handLeftMove.style.height = '5px';
        handRightMove.style.height = '5px';
        handLeftMove.style.width = '30px';
        handRightMove.style.width = '30px';
        handLeftMove.style.borderRadius = '0';
        handRightMove.style.borderRadius = '0';
        handLeftMove.style.left = '-33px';
        handRightMove.style.left = '33px';

        footLeftMove.style.height = '30px';
        footRightMove.style.height = '30px';
        headMove.style.top = '0';
        ballMove.style.left = '0';
        ballMove.style.top = '0';
        ballMove.style.width = '25px';
        ballMove.style.height = '25px';
      }
    },500);
  }

})
