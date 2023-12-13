let clickedButtons=document.querySelectorAll(".number-button")
let userChosen=document.getElementById("user-chosen")
let compChosen=document.getElementById("comp-chosen")
let Userscore=document.getElementById("user-score")
let ComputerScore=document.getElementById("Comp-score")
let out1=document.getElementById("user")
let out2=document.getElementById("comp")

let userScore=0;
let compScore=0;
let turn=1;
let userChoice;
let compChoice;

function userClicked(){
    clickedButtons.forEach(button=>{
      button.addEventListener('click',()=>{
        console.log(`User clicked: ${button.innerHTML}`)

        userChoice = 2
        //=Number(button.innerHTML);       
        
        const compChoice=2
        //compRandom();
        

        userChosen.innerHTML=userChoice
        compChosen.innerHTML=compChoice
        console.log(`Comp choice: ${compChoice}`)
        
        scoreChecking()
            
      });
   })
}

userClicked()
function compRandom(){
    return (Math.floor(Math.random()*6)+1)
}

function scoreChecking(){
  
    if(turn==1){
    
        if(userChoice!=compChoice){
          console.log(userChoice==compChoice)
          userScore+=userChoice;
          Userscore.innerHTML=userScore;
          ComputerScore.innerHTML=compScore;
          console.log(`User Score: ${userScore}`,turn);
          console.log(`Computer Score: ${compScore}`,turn);
        }
        
        if(userChoice==compChoice){
          console.log("out user")
         out1.innerHTML="User is out";
         console.log("user is out")
         turn=2;
        }
    
    }
    
    else if(turn===2){
          if(compChoice!==userChoice){
            compScore+=compChoice
            Userscore.innerHTML=userScore;
            ComputerScore.innerHTML=compScore;
            console.log(`User Score: ${userScore}`);
            console.log(`Computer Score: ${compScore}`);
          }
    
          else if(compChoice===userChoice && compScore<userScore){
            out2.innerHTML="User Won and Computer Lost"
            console.log("User wins")
          }

          else if(compScore==userScore && compChoice===userChoice){
            out2.innerHTML="Tie";
            console.log("Tie");
          }
          else if(compScore>userScore){
            console.log("Comp wins");
            out2.innerHTML="Computer Wins"
          }
   }

}
        
// else if(userChosen!=compChosen){
//     userScore+=userChosen;
//     console.log(userScore)
// }
// else{
//     console.log("out")
// }
