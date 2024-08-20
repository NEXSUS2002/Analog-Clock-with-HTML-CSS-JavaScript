const secHand = document.querySelector("#second");
const minHand = document.querySelector("#minute");
const hrHand = document.querySelector("#hour");

setInterval(() => {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    const hrRotation = (360 * hr) / 12 + (360 * min) / (12 * 60);
    const minRotation = (360 * min) / 60;
    const secRotation = (360 * sec) / 60;

    hrHand.style.transform = `rotate(${hrRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    secHand.style.transform = `rotate(${secRotation}deg)`;
}, 1000);