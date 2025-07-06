// add money to the account
//step 1
document.getElementById('btn-add-money')
.addEventListener('click',function(event){

event.preventDefault()



//step 2
//get money to be added to the account balance
const addMoney = document.getElementById('amount-add').value;
// console.log(addMoney);

//get the pin number
const pinNumberInput = document.getElementById('input-pin-number').value;
// console.log(pinNumberInput);
// verify pin number
//wrong way to validate pin number
if(parseInt(pinNumberInput) === 1234){
    console.log('adding money to your account');
    const balance = document.getElementById('account-balance').innerText;
    // console.log(balance);
    
    const newBalance = parseFloat(balance) + parseFloat(addMoney);
    console.log(newBalance);
    
    document.getElementById('account-balance').innerText = newBalance;
}   
else{
    alert('adding money is failed to your account')
}
})
