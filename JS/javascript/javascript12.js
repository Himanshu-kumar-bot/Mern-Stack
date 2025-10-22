//forEach filter, reduce,map,set


// const arr=[10,20,30,40,50];
// sum=0;
// arr.forEach((Number)=>{
//    sum+=Number
// })

// console.log(sum);

//true:selected and false:not selected
// const newArr=arr.filter((number)=>number>25)
// console.log(newArr)

// Array.prototype.filtering=function(compare){
// const ans=[];
// for(let num of this){
// if(compare(num)){
//     ans.push(num);
// }
// }
// return ans;
// }

// const newArr=arr.filtering((number)=>number>25)
// console.log(newArr);

// const arr1=[1,2,3,4,5];
// const newArr=arr1.map((number)=>number*2)
// console.log(newArr)





const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const newproducts=products.filter((product)=>product.price>50).sort((a,b)=>a.price-b.price);
// console.log(newproducts);

// const ans=products.map((product)=>({name:product.name,price:product.price})).sort((a,b)=>a.price-b.price);
// console.log(ans);


// const total = products.reduce((acc, product)=> (acc + product.price), 0);
// console.log(total);

//Data structure in js : set

// const arr2=[1,2,3,4,5,1,2,3];
// const mySet=new Set(arr2);

// console.log(mySet);
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// console.log(mySet);

// console.log(mySet.has(23));
// mySet.delete(2);
// console.log(mySet);
// console.log(mySet.size);
// mySet.clear();
// console.log(mySet);
 
//  const emails=["himan@arr2","himanshu@arr2","hello@arr2","himan@arr2"];
//     const uniqueEmail=[...new Set(emails)];
//     // console.log(uniqueEmail);

//     for(let i of uniqueEmail){
//         console.log(i)
//     }


//Map in js
// const map=new Map([
//     [1,"Himanshu"],
//     [2,"Hello"],
//     [3,"Hi"]
// ]);

const map=new Map();
map.set(1,"Himanshu");
map.set(2,"Hello");
map.set(3,"Hi");
// console.log(map);
// console.log(map.has(1));
// console.log(map.get(2));
// map.delete(2);
// console.log(map);
// console.log(map.size);
// // map.clear();
// console.log(map);

for(let [key,value] of map){
    console.log(key,value);
}