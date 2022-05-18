const go = document.querySelector('.go');
const stop = document.querySelector('.stop');
const time=document.querySelector('.time');
const time2=document.querySelectorAll('.time2');
const time3=document.querySelector('.time3');
const change = document.querySelector('.change');
const clock = document.querySelector('.clock');

let timer = 0;

function getTime(){
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth()+1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();


time.textContent=`${hours}:${minutes}:${seconds}`;
time2[0].textContent=`${year}년 ${month}월 ${date}일 `;
time2[1].textContent=`${hours}시 ${minutes}분 ${seconds}초`;
}
timer = setInterval(getTime,1000);

go.addEventListener('click',()=>{
if(timer==0){
timer = setInterval(getTime,1000);
}
});
stop.addEventListener('click',()=>{

clearInterval(timer);
timer = 0;

});


change.addEventListener('click',()=>{

if(change.value=='sky'){
clock.style.background='url(space.jpg)';
change.value='space';
time2[0].style.display='block';
time2[1].style.display='block';
time.style.display='none';
}
else if(change.value=='space'){
change.value='sky';
time.style.display='block';
time2[0].style.display='none';
time2[1].style.display='none';
clock.style.background='url(sky2.jpg)';
}
});




