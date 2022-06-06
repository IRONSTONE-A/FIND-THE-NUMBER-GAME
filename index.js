let random = Math.floor(Math.random() * 100 +1) ;
let input = document.querySelector(".input-number");
let check = document.querySelector('.check');
let restart = document.querySelector('.restart');
let enterNumber = document.querySelector('.enter-number');
let chance = 7;
let clickNumber =0;
input.focus();



const guessGame = function(){

    if(chance > 1){
        if(input.value > 100 || input.value < 0){
            enterNumber.innerHTML = "Please enter a valid number";
        } else{
            if(input.value > random){
                enterNumber.innerHTML = 'Lower number please';
                chance--;
                clickNumber++;
                document.querySelector('.last').innerText = input.value;
                
            } 

            else if(input.value < random){
                enterNumber.innerHTML = 'Greater number please';
                chance--;
                clickNumber++;
                document.querySelector('.first').innerText = input.value;
                

            } else if(input.value == random){
               
                enterNumber.innerHTML = 'Congratulations, you guessed right.'
                enterNumber.style.color = "red"
                enterNumber.style.fontSize = "30px"
                chance--;
                clickNumber++;
                           
            }
        }
    
    } 
  
    else {
        enterNumber.innerHTML = 'Game Over';
        input.style.display = 'none';
        
        
    }
    document.querySelector('.chance-span').innerHTML = chance;
    document.querySelector('.attempts-span').innerHTML = clickNumber;
    input.value = "";
    input.focus();

    
    
}

check.addEventListener('click', guessGame);


input.addEventListener('keydown', (e) => {
    if(e.code === "Enter"){
        guessGame();
    }
})