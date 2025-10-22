//Number

// let a=10;
// let b=345.6821;
// console.log(b.toFixed(1))//output->345.7   round off 1 place after the decimal
// console.log(typeof b.toFixed(2)); //it returns string  
//  b.toFixed(1);
// console.log(b); //output=345.6821 because of immutability

// let c=b.toFixed(1);
// console.log(c);

// console.log(b.toPrecision(6))

// console.log( b.toString())  //output -->345.6821 and type is string


// let a=new Number(20);
// let b=30; //data copy
// console.log(a)   //output-->[Number: 20]

// let a=new Number(10);
// let b=new Number(20);

// console.log(a==b);  ///returns false because they are object and memory allocation different;

// let obj={
//     name:"Himanshu"
// }
// let obj1={
//     name:"Himanshu"
// }
// let obj1=obj;//reference copy
// console.log(obj==obj1);

//Non-primitive-->refernce ke basis pe compare hota hai
//primitive-->Copy by value

// console.log(Math.abs(-1));
// console.log(Math.PI);
// console.log(Math.floor(3.9))
// console.log(Math.ceil(3.9))
// console.log(Math.sqrt(25))
 
//   console.log(Math.random()) //genrate value between 0 and 1 ,,,,0 included but 1 not [0,1);
//    console.log(Math.floor((Math.random()*6)+1)) //1-6
//    console.log(Math.floor((Math.random()*11)+15)) //15-25

//Math.floor(Math.random()*(max-min+1)+min);

//OTP generate --> 4 Digits (1000-9999)

// console.log(Math.floor(Math.random()*(9999-1000+1)+1000));