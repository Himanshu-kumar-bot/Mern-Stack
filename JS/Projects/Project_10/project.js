const form=document.querySelector('form');

const answers={
    q1:"Sachin Tendulkar",
    q2:"West Indies",
    q3:"Sachin Tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan"
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
  
    const data=new FormData(form);
    let finalScore=0;
    for (const [key,value] of data.entries()){
        if(value===answers[key]){
            finalScore++;
        }
    }

    document.getElementById('out').textContent=`Your Score is ${finalScore}`; 
});