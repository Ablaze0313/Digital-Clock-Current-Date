const clock = document.querySelector('.clock');

const now = new Date ();
const time = document.querySelector('.time-date');

const tick = () => {

    const now = new Date();
    const h = now.getHours();
    const m= now.getMinutes();
    const s= now.getSeconds();
    
    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span> 
    `;
    
    clock.innerHTML= html;
};

setInterval(tick, 1000);


const times = dateFns.format(now,'dddd, MMMM, Do, YYYY');


const html = `
   
<span>${times} </span>
`;

time.innerHTML= html;