// //Arrays

// // let marks1=100;
// // let marks2=500;
// // let marks3=600;
// // let marks4=700;
// // let marks5=800;

// // let marks=[100,500,600,700,800];


// // console.log(marks);
// // console.log(marks.length); 

// //we can store multiple type data in array in js

// let arr=[100,30,"Himanshu",true]

// // console.log(arr[2]);
// // arr[2]="Golu";
 
// // console.log(arr[2])
// // //push operation
// // arr.push(30);
// // arr.push(31);
// // arr.push(32);
// // console.log(arr.length);


// //pop operation
// // arr.pop();
// // arr.pop();
// // console.log(arr)


// //Starting add kar sakta hu, delete at first place

// arr.unshift(10)

// console.log(arr)     //using shift and unshift performance will decreases

// arr.shift();
// console.log(arr);

// let arr=[2,3,4,5,6,7];
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }

// for(let num of arr){
//     console.log(num)
// }
 
// let arr=[1,2,3,4,8];
// let arr2=arr;
// arr2.push(30);
// console.log(arr);

//  const arr=[1,2,3];
//   arr=[2,3,4];
//   console.log(arr)

// let arr=[10,20,30,40,50];
// //  console.log(arr.slice(1,3))
// //  console.log(arr)

// console.log(arr.splice(1,3))
// console.log(arr)

// let arr=[4,3,6,7,8];
// let arr1=[8,6,4,0,5,"himanshu"];

//  let arr3=[arr,arr1]
//  console.log(arr3)


// let arr3=arr.concat(arr1)
// console.log(arr3)

// //spread use
// let arr3=[...arr,...arr1]
// console.log(arr3)

// const arr=['alice','tom','sam','alice'];

//toString
// console.log(typeof arr.toString());

//join

// console.log(arr.join("-"))

// console.log(arr.indexOf('alice'))
// console.log(arr.lastIndexOf('alice'))

// console.log(arr.includes('alice'))

// arr.sort();
// arr.reverse()
// console.log(arr)
 

// const arr=[101,12,220,56,23,45];

// arr.sort(); //compare on ASCII value of character and treat as every element in arrayis string
// console.log(arr)


// const arr=[101,20,202,34,11,1];
// arr.sort((a,b)=>b-a);  //ascending a-b, and descending b-a
// console.log(arr)


let arr=[10,30,50,[1,2,3,[6,7]],60];

const a=arr.flat(Infinity);
// console.log(arr[3][3][0])

console.log(a)