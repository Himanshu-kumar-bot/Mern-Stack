// Scope and closure , Higher Order function(HOF)

//global scope-->accessible to everyone
//functional scope-->accessible only to that function
//block level scope-->accessible only to that block


// let a=10; //global
// const b=20;//global

// if(true){
//     // console.log(a);
//     let c=20;  //block level scope
//     console.log(c);
// }
// // console.log(c)


// function greet(){
//     let e=30;  //functional scope not accessible outside the function
// }
//   console.log(e);

// let global=30;

// function greet(){
//     // let global=40;
//     function meet(){
//         let global=10;
//        console.log(global);
//     }
//     meet();
    
// }
//  greet();


// function createCounter(){
//     function increment(){
//         console.log("I am increment function")
//     }
//     return increment;
// }

// const count=createCounter();
// count();


// function createCounter(){

//     let count=0;   
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }

// const counter=createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

//Closure-->A function that remembers vairables from its outer scope even after the outer function has finished excuting
//after execution of the outer function the inner function still has access to the outer function's variables because of closure 
//reason after the execution it stores the refernce of the outer in the heap memory;
//which it requires further to execute;
// function createBankAccount(){

//     let balance=500;

//      return {
//         deposite:function(amount){
//             if(typeof amount ==="number" && amount>0){
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withDraw:function(amount){
//             if(typeof amount ==="number" && amount<=balance  && amount>0){
//                 balance-=amount;
//                 return balance;
//             }
//         },
       
//         get:function(){
//             return balance;
//         }
  
        
//      }
    
// }

// const acc=createBankAccount();
// console.log(acc.deposite(500));


//Higher Order Function

function double(value){
   return function execute(num){
        // console.log("hello");
        return num*value;
    }
    // return execute;
}
  const s=double(5)(20);
 console.log(s);