let startTime = 0;


setTimeout(function () {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    console.log(hours);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    console.log(minutes);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    console.log(seconds);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    console.log(milliseconds);
}, 10);
