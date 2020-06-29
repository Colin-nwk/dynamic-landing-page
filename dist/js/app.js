// select DOM items

const time = document.getElementById('time'),
      greeting =document.getElementById('greeting'),
      name =document.getElementById('name'),
      focus =document.getElementById('focus');

// options
const showAmPm = true;


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
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

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
        document.body.style.backgroundImage = "url('/dist/img/main.jpg')";
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

// get name
function getName(){
    if(localStorage.getItem('name')=== null){
        name.textContent = '[enter name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

// set name
function setName(e){
    if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerHTML);
            name.blur();
        }
    }else {
        localStorage.setItem('name', e.target.innerHTML);
    }
}
// set focus
function setFocus(e){
    if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerHTML);
            focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerHTML);
    }
}

// get focus
function getFocus(){
    if(localStorage.getItem('focus')=== null){
        focus.textContent = '[enter your focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

// event listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// run
showTime();
setBgGreet();
getName();
getFocus();