function ComputerChoice(){
  random  = Math.floor(Math.random()*(3))+1 ; console.log(random);
  if(random == 1){ comp_choice = `Rock`;}
  else if(random == 2){ comp_choice = `Paper`;}
  else{ comp_choice = `Scissors`;}
  return comp_choice;
  
}
function play(user_choice){
  let computer_choice = ComputerChoice();
  let result ="It's a Draw";
  if( computer_choice === user_choice){
      alert(`You choose: ${user_choice}\nComputer choose: ${comp_choice}\nResult:${result}`)
  }
  else if(user_choice === "Rock"){
     if(computer_choice === "Paper"){
        result ="You Lost";
        alert(`You choose: ${user_choice}\nComputer choose: ${comp_choice}\nResult:${result}`)
     }
     else{
        result ="You Won";
        alert(`You choose: ${user_choice}\nComputer choose: ${comp_choice}\nResult:${result}`)
     }
  }
  else if(user_choice === "Paper"){
     if(computer_choice === "Scissors"){
        result ="You Lost";
        alert(`You choose: ${user_choice}\nComputer choose: ${comp_choice}\nResult:${result}`)
     }
     else{
        result ="You Won";
        alert(`You choose: ${user_choice}\nComputer choose: ${comp_choice}\nResult:${result}`)
     }
  }
  else if(user_choice === "Scissors"){
     if(computer_choice === "Rock"){
        result ="You Lost";
        alert(`You choose: ${user_choice}\nComputer choose: ${comp_choice}\nResult:${result}`)
     }
     else{
        result ="You Won";
        alert(`You choose: ${user_choice}\nComputer choose: ${comp_choice}\nResult:${result}`)
     }
  }
}