let random = Math.floor(Math.random() * 100 +1) ;
let input = document.querySelector(".input-number");
let check = document.querySelector('.check');
let restart = document.querySelector('.restart');
let enterNumber = document.querySelector('.enter-number');
let chance = 7;



const guessGame = function(){

    if(chance > 0){
        if(input.value > 100 || input.value < 0){
            enterNumber.innerHTML = "Please enter a valid number";
        } else{
            if(input.value > random){
                enterNumber.innerHTML = 'Lower number please';
                chance--;
                document.querySelector('.last').innerText = input.value;
                
            } 

            else if(input.value < random){
                enterNumber.innerHTML = 'Greater number please';
                chance--;
                document.querySelector('.first').innerText = input.value;
                

            } else if(input.value == random){
                enterNumber.innerHTML = 'Congratulations, you guessed right.'
                enterNumber.style.color = "red"
                
                chance--;
                
                

                           
            }
        }
    
    } else {
        enterNumber.innerHTML = 'Game Over';
        input.style.display = 'none';
        chance--;
        
    }
    document.querySelector('.chance-span').innerHTML = chance;
    input.value = "";
    
}

check.addEventListener('click', guessGame);


check.addEventListener('keydown', (e) => {
    if(e.code == 'Enter'){
        guessGame();
    }
})