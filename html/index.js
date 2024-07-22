const handleData = (e) => {
    e.prevehtDetault();
    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value,
    }
    if (user.username.length >= 2 && user.email.length >= 3 && user.password.length >= 6 && user.number.length >= 10)
    {
        console.log(user);
    }
    else{
        alert('please enter required fields')
    }
    if(user.username.length >= 2){
        return
    }
    if(user.number.length >= 10){
        alert('number must be at least 10 charclers')
        return
    }
    if(user.password.length >= 6){
        alert('password must be at least 6 chearer')
        return
    }
    }