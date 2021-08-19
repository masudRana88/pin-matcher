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