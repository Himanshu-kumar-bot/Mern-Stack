const result=document.getElementById("result");
 
 
setInterval (()=>{
    const current=Date.now();

const olympicTime=new Date("2028,7,14").getTime();
 
let timer=olympicTime-current;
const days=Math.floor(timer/1000/60/60/24);
timer%=1000*60*60*24;
const hours=Math.floor(timer/1000/60/60);
timer%=1000*60*60;
const minutes=Math.floor(timer/1000/60);
timer%=1000*60;
const seconds=Math.floor(timer/1000);

result.textContent=`${days}: Days ${hours}: Hours ${minutes}: Minutes ${seconds}: Seconds`;
},1000);
 