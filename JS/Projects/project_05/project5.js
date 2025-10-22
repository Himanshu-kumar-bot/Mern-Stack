const clock=document.getElementById('box');

 
setInterval (()=>{
    const time=new Date();
    clock.textContent=time.toLocaleTimeString();
},1000);
 
