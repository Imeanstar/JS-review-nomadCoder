const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); 
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);