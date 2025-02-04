const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); 
    
    if(date.getSeconds() < 10){
        console.log(0);
        clock.innerText = `${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`;
    }
    else{
        console.log(11);
        clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    
}

getClock();
setInterval(getClock, 1000);