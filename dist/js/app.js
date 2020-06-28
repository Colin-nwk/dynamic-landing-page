// select DOM items

const time = document.getElementById('time'),
      greeting =document.getElementById('greeting'),
      name =document.getElementById('name'),
      focus =document.getElementById('focus');

//mine due to img link in js not working
// const bg = document.querySelector('.bg')


// show time
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour % 12 || 12 ;

    // output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}
// add zero
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting
function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12){
        // morning
        document.body.style.backgroundImage = "url('/dist/img/mountain1.jpg')";
        greeting.textContent = 'Good Morning';
        
        // bg.classList.add('morning');
        
        
    }else if(hour < 18){
        // afternoon
        document.body.style.backgroundImage = "url('/dist/img/mountain2.jpg')";
        greeting.textContent = 'Good Afternoon';
    }else {
        // evening
        document.body.style.backgroundImage = "url('/dist/img/mountain1.jpg')";
        greeting.textContent = 'Good evening';
        document.body.style.color ='white';
    }
}



// run
showTime();
setBgGreet();