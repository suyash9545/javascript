console.log('running alarm');


let addAlarm = document.getElementById('addAlarm');
addAlarm.addEventListener('click', addBtn);
var audio = new Audio('9th Wonder Kit_181 BPM.mp3');
function ringbell(){
    audio.play();
}

function addBtn(e) {
    e.preventDefault();
    let timeInput = document.getElementById('timeInput');

const getdate = new Date(timeInput.value)
console.log(getdate);
let now = new Date();
console.log(now);

let timer = getdate - now;
console.log(timer);

    if(timer>=0){
        setTimeout(() => {
         ringbell();   
        }, timer);
    }

    let html ="";

    html += ` <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${timeInput.value}</h5>
        <small>${timer/1000} seconds left</small>
    </div>
</div>`;

let output = document.getElementById('output');

output.innerHTML = html;
}


