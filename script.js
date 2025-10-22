const clock = document.querySelector("#clock");
setInterval(() => {
    // let date = new Date();
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    // if(seconds<10){
    //     if(minutes<10)clock.textContent = `${hours}:0${minutes}:0${seconds}`;
    //     else clock.textContent = `${hours}:${minutes}:0${seconds}`;
    // }else{
    //     if(minutes<10)clock.textContent = `${hours}:0${minutes}:${seconds}`;
    //     else clock.textContent = `${hours}:${minutes}:${seconds}`;
    // }


    let date = new Date();
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000); // after every 1000 milliseconds the function will be called and the time will be updated
