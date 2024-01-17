let userScr=0;
let compScr=0;
const choices=document.querySelectorAll(".choice");
const msgbox=document.querySelector(".msg");
const userScore=document.querySelector("#userScore");
const compScore=document.querySelector("#compScore");
const genCompChoice=()=>{
  const options=["Rock","Paper","Scissors"];
  const ranIn=Math.floor(Math.random()*3);
  return options[ranIn];
}
const drawGame=(userChoice,compChoice)=>{
  console.log("It's a DRAW");
  msgbox.innerText=`Draw!Play again`;
  msgbox.style.backgroundColor="#988CED";
}
const loseGame=(userChoice,compChoice)=>{
  console.log("Alas,you LOST!!");
  compScr++;
  msgbox.innerText=`You Lose!${compChoice} beats ${userChoice}`;
  msgbox.style.backgroundColor="#EB392C";
  compScore.innerText=compScr;

}
const winGame=(userChoice,compChoice)=>{
  console.log("Hey,you WON!!");
  userScr++;
  msgbox.innerText=`You Win!${userChoice} beats ${compChoice}`;
  msgbox.style.backgroundColor="#3BB028";
  userScore.innerText=userScr;
}
const playGame=(userChoice)=>{
console.log("User choice was=",userChoice);
const compChoice=genCompChoice();
console.log("Computer choice was=",compChoice);
if(userChoice===compChoice){
  // draw
  drawGame(userChoice,compChoice);
}
else{
  let userWin=true;
  if(userChoice==="Rock"){
    if(compChoice==="Paper"){
      userWin=false;
    }
  }
  if(userChoice==="Paper"){
    if(compChoice==="Scissors"){
      userWin=false;
    }
  }
  if(userChoice==="Scissors"){
    if(compChoice==="Rock"){
      userWin=false;
    }
  }
  if(userWin===false){
    loseGame(userChoice,compChoice);
  }
  else if(userWin===true){
    winGame(userChoice,compChoice);
  }
}

}



choices.forEach((choice)=>{
   console.log(choice);
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
   playGame(userChoice);
  });
});
