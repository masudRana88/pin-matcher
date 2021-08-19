// pin ganarate and get pin
function getPin(){
    const pin = gneratePin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
}
function gneratePin(){
    const pin = Math.round(Math.random()* 10000);
    const pinSting = pin + '';
    if(pinSting.length < 4){
        return gneratePin();
    }
    return pin;
}
// press key and display the key numbers
document.getElementById('key-pad').addEventListener('click', function(event){
  const numberElement = event.target ;
  const number = numberElement.innerText;
  if(number.length < 5){
        const displayNumber = document.getElementById('key-display');
    // clear all
    if(isNaN(number) && (number == 'C')){
        displayNumber.value = '';
    }
    //clear one by one 
    else if(isNaN(number) && (number == '<')){
        let disit = displayNumber.value;
        let newDisit = '';
            if(disit.length == 1){
                displayNumber.value = '';
            }
            for(i = 0; i< disit.length - 1; i++){
                newDisit = newDisit + disit[i];
                displayNumber.value = newDisit;
            } 
        }
    else{
        const privuesNumber = displayNumber.value;
        displayNumber.value = privuesNumber + number;
     }
    }
});

// varyfy the pin
document.getElementById('submit-btn').addEventListener('click', function(){
    const genaratePin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('key-display').value;
    if(genaratePin == typedPin){
        document.getElementById('succes-message').style.display = 'block';
        document.getElementById('varyfy-error').style.display = 'none';
    }
    else{
        document.getElementById('varyfy-error').style.display = 'block';
        document.getElementById('succes-message').style.display = 'none';
    }
});