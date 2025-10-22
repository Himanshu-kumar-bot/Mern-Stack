// console.log("hello");

// // let 
// let a=20;
// a=20;
// console.log(a);

//const

// const b=20;
// b=21;
// console.log(b); //it gives error because const variable is constant not  changable;


//var
// var a=20;
// a=20;
// console.log(a);

// var a=30;
// a=31;
// console.log(a);  now we dont use it because of this reason and other also;

// if(true){
//     var a=30;
// }
// console.log(a); here it excutes sucessfully but it not logically correct,here we can access value which is defined inside the if conditon actually it is not globally initialized .


//Data Types :-
//  1. Primitive data types - number,string,boolean,undefined,null,bigInt,symbol
//  2.Non-primitive data types -Arrays,object,functions


// let num1=9;
// let num2=10;
// console.log(num1 +" "+ num2);

// let str1="Strike is coming soon";
// let str2;  //undefined
// console.log(str1 +" "+str2);

//when a variable assigned a null this means that we manually set null to variable
//when  a variable not assigned this means it is not exist

//Symbol

// let a=Symbol("hello");
// console.log(a);

//Array

//  let a=[1,2,3,"string",'a'];
//  console.log(a);
//  console.log(typeof(a));

//object

// let student={
//     name:"Himanshu",
//     age:18,
//     gender:"male"
// };
// student.name="Golu"
// student.age=20
// console.log(student);

// function

//   let a=function getDetails(){
//     console.log("Name-Himanshu"+ "  age-18");
// }
// // getDetails();
//  a();

// ⁡⁣⁢⁢/͟/͟P͟r͟i͟m͟i͟t͟i͟v͟e d͟a͟t͟a t͟y͟p͟e͟s a͟r͟e I͟m͟m͟u͟t͟a͟b͟l͟e⁡

// let a=20;
// a=21;  //it is not change 20 to 21 ,, 21 is create seprate and a point to 21;
// console.log(a);

// let name="Himanshu";
// name="Golu";
// name[0]='H'; //G is not replace by H so immutability proved here;
// console.log(name);



//Non-primitive datatypes are mutable

// let a=[20,22,24,26,28];
// a[0]=33;
// console.log(a);

// let obj={
//     name:"Mohan",
//     age:19
// };
// obj.name="Rohan";
// console.log(obj);

// let a=20;
// let b=a;
// b=21;
// console.log(a,b);