const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const income=document.querySelector("#income");
    const amount=parseInt(income.value);

    const result=document.querySelector('h2');
    let tax=0;
    if(amount<=1200000){
        tax=0;
         
    }else if(amount<=1600000){
        tax=(amount-1200000)*0.15;
    }else if(amount<=2000000){
        tax=(400000*0.15)+(amount-1600000)*0.20;
    }else if(amount<=2400000){
        tax=(400000*0.15)+(400000*0.20)+(amount-2000000)*0.25;
    }else{
        tax=(400000*0.15)+(400000*0.20)+(400000*0.25)+(amount-2400000)*0.30;
    }

    result.textContent=`Total Tax ${tax}`;
    e.reset();
})





 