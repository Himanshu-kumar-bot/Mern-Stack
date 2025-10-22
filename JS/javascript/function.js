// function

// function greeting(){
//     console.log("Hello everyone, This is Himanshu Kumar");
// }
// greeting();

// function addNum(num1,num2,num3=0,num4=0){
//     const sum=num1+num2+num3+num4;
//     console.log(sum);
// }
// // addNum(3,4)
// // addNum(6,7)

// addNum(2,3,4)
// addNum(2,3,4,5)

// Rest Operator

// function addNum(...num){
//     let sum=0;
//     for(let i of num){
//        sum+=i;
//     }
//     console.log(sum);
// }

// addNum(2,3,4,5)

// const arr=[2,3,4,5];
// const arr1=[6,7,8,9];
// const[first,sec,...num]=arr; //Rest operator
// console.log(first,sec,num);

//spread operator
// const arr3=[arr,arr1];
// const arr4=[...arr,...arr1];
// console.log(arr3);
// console.log(arr4);

//function expression

//   const addNum=function(num1,num2){
//     return num1+num2;
// }

// console.log(addNum(3,4))

//Arrow Function

// const addNum=(num1,num2)=>{
//  return num1+num2;
// }

// const addNum=(num1,num2)=> num1+num2;
// const sqNum=num=> num*num; //if we have single parameter,no need of()

// console.log(addNum(3,4))
// console.log(sqNum(3))

// const greeting=()=>{
//     return{
//         name:"Himanshu",
//         age:20
//     }
// }


// const greeting = () => ({ name: "Himanshu", age: 20 });
// console.log(greeting())

// immediately invoked function (IIFE)

// (function greeting(){
//     console.log("hello ji")
// })();
 
// (()=>{
//     console.log("hi")
// })();
// function greet(){
//     console.log("Hello, Kaise ho")
// }
// function dance(){
//     console.log("I am dancing")
// }
// function meet(callBack){
//     console.log("I am going to meet someone")
//     callBack();
//     console.log("I have finished meeting");
// }
 
// meet(greet);
// meet(dance)
function zomatoOrderPlaced(){
    console.log("your food is preparing,Party everywhere,Don't wait!");
}
function blinkitOrder(){
    console.log("your order is packing,Deliver in 10 minutes, Your patience is my motivation ,Thankyou!")
}
function payment(amount,callBack){
    console.log(`${amount}payment is initiated`);
    console.log("payment is received");
  callBack();
}
payment(500,zomatoOrderPlaced);
payment(300,blinkitOrder);