document.getElementById('login-set').addEventListener('click',function(event){
    event.preventDefault()
    console.log('clicked');
    

    //step 3
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value
    console.log(phoneNumber ,pinNumber);

    //this is temporaray, should'nt do like this
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href ='\home.html'
    }
        else{
    // console.log('wrong phone number or pin');
    alert('wrong phone number or pin')
    }
})