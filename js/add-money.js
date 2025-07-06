document.getElementById('btn-add-money')
.addEventListener('click',function(event){
   event.preventDefault();
    
//    step 2-------> get pin + check pin + get money
const money = document.getElementById('amount-add').value

const pinNumber = document.getElementById('input-pin-number').value

if(parseInt(pinNumber) === 1234){
   const balance = document.getElementById('account-balance').innerText

 
   
   
   const newBalance = parseFloat(balance) + parseFloat(money);
    console.log(newBalance);
    
        document.getElementById('account-balance').innerText = newBalance;
      
}
else{
    alert('Your pin number is invalid')
}

})
// cash Out
