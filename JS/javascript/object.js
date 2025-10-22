// Object 

//Key value

// const user={
//     name:"Himanshu",
//     emailId:"himanshukumar@gmail.com",
//     amount:3400,
//     "Home Address":"Lucknow"
// }

//keys are in string form we can access

// console.log(user["Home Address"])
// console.log(user["name"])
// console.log(user["emailId"]);

//access by .key

// console.log(user)
// console.log(user.name)

//CRUD Operation:- Create Read Upadate Delete

//update
// user.adhaar=38019225
// user.amount=5000;
// // console.log(user)

//Delete

// delete user.emailId;
// console.log(user)

// const user={
//     name:"Himanshu",
//     emailId:"himanshukumar@gmail.com",
//     amount:3400,
//     age:18
// }

// const user2=user;
// user2.age=30;
// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let keys in user){
//     console.log(keys,user[keys])
    
// }
//(user.keys)not use ,,, user["name"] user["age"]

// const name=user.name;
// const age=user.age;

// console.log(name,age)

//object ko destructure karna
// const{name:userName,age:userAge}=user;
// console.log(userName,userAge)

// const arr=[2,3,4,5,6,7];
// const[first,second]=arr;

// console.log(first,second)
// console.log(user)

// for(let i of Object.keys(user)){
//     console.log(i,user[i])
// }

// for(let i of Object.values(user)){
//     console.log(i);
// }

// for(let i of Object.entries(user)){
//     console.log(i)
// }


// const user={
//     name:"Himanshu",
//     emailId:"himanshukumar@gmail.com",
//     amount:3400,
//     age:18,
//     greeting:function(){
//         console.log(`Strike is coming on 18th october ${this.name}`)
//         return 20;
//     }
// }

//  const va=user.greeting()
//  console.log(va)
 
//  const user2={
//     name:"Golu",
//     account:201
//  }
// user2.greeting=user.greeting;
// user2.greeting()
// console.log(user2)

//Nested Object
// const user={
//     name:"Himanshu",
//     emailId:"himanshukumar@gmail.com",
//     amount:3400,
//     age:18,
//     address:{
//        city:"Lucknow",
//        state:"Uttarpradesh"
//     }
// }
// console.log(user.address.city)

//Shallow copy

// const user2=user;
// const user2={...user}
// user.name="Golu"
// // console.log(user2)  //Here we change name in user but it not reflect in user2'name

// user.address.city="Kanpur"
// console.log(user2) 
//it is shallow copy because it applies only one layer means not in nested Object

// //Deep copy

// const user2=structuredClone(user);
// user2.address.city="kanpur";
// console.log(user)

// const user={
// name:"Himanshu",
// age:20,
// 0:100,
// 2:200
// }
// console.log(user[0]);

//array are stored in form of object
// const arr={
//     0:10,
//     1:20,
//     2:30,
//     3:40
// }
// console.log(arr);

// {
//      0:10,
//     1:20,
//     2:30,
//     3:40
// }


//key;string|symbol dono use kar sakte hai
const sym=Symbol("id")

const user={
name:"Himanshu",
age:20,
0:100,
[sym]:"Hello ji"
}

console.log(user[sym])


//How objects are stored
//How arrays are stored
//map pointer,property pointer,element pointer