const form =document.querySelector('form');
const input =document.querySelector('input');
const  allTask =document.querySelector('#allTask');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const text =input.value.trim();
    if(text ==''){
      return;
    }
    input.value ='';
    const taskContainer =document.createElement('div');
    taskContainer.style.marginTop ='10px';

    const task =document.createElement('span');
    task.innerText =text;
    task.style.marginRight ='40px';
   
   
    const deleteBtn =document.createElement('button');
    deleteBtn.innerText ='Delete';
    
    const donebtn =document.createElement('button');
    donebtn.innerText ='Done';
    donebtn.style.marginRight ='10px';
   

     taskContainer.append(task, donebtn, deleteBtn);
     allTask.append(taskContainer);
 
  
    donebtn.addEventListener('click',function(){
        task.style.textDecoration ='line-through';
    });
    deleteBtn.addEventListener('click',function(){
        allTask.removeChild(taskContainer);
    });
   
     
     

});