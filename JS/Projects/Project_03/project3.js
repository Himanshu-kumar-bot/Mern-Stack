const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const boy=document.getElementById("Boy");
    const girl=document.getElementById("Girl");

     const l1=boy.value.length;
     const l2=girl.value.length;
     const result=Math.pow(l1+l2,3)%101;

     const res=document.querySelector('h2');
     res.textContent=`Result: ${result} %`;
     form.reset();

})