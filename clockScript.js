setInterval(() => {
    let d = new Date();
    let hrstime = d.getHours();
    let mintime = d.getMinutes();
    let sectime = d.getSeconds();
    hrsrotation = 30 * hrstime + mintime / 2;
    minrotation = 6 * mintime;
    secrotation = 6 * sectime;

    hours.style.transform = `rotate(${hrsrotation}deg)`
    minutes.style.transform = `rotate(${minrotation}deg)`
    seconds.style.transform = `rotate(${secrotation}deg)`
}, 1000);