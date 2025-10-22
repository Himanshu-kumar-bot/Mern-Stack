 const  newElement=document.createElement("h2");
 newElement.textContent="This is created by JS";
 newElement.style.color="red";

 const element  =document.getElementById("first");
 element.after(newElement);
//  element.before(newElement);
//  pos.append(element);

 const newElement2=document.createElement("h3");
 newElement2.textContent="Diwali aa rahi hai";
 newElement2.style.color="blue";
newElement2.id="second";

// newElement2.className="diwali";
// newElement2.className+=" holi";  it's little bit confusing because it will overwrite the previous class
newElement2.classList.add("diwali");
newElement2.classList.add("holi");

newElement2.style.backgroundColor="yellow";
newElement2.style.textAlign="center";
newElement2.style.padding="10px";
element.before(newElement2);
newElement2.setAttribute("title","mytitle");
// console.dir(newElement2);
// console.log(newElement2.getAttribute("class"));
console.log(newElement2.getAttribute("title"));


// const li1=document.createElement("li");
// li1.textContent="Milk";
 

// const li2=document.createElement("li");
// li2.textContent="Cake";

// const li3=document.createElement("li");
// li3.textContent="Halwa";
 
// const li4=document.createElement("li");
// li4.textContent="Paneer";

// li1.id="item1";
// const unOrderedList=document.getElementById("list1");
// unOrderedList.append(li1);
// unOrderedList.append(li2);
// unOrderedList.prepend(li3);

// // li1.after(li4); here li1 is itnitially initialized so it will work
//  unOrderedList.children[1].after(li4); 
//   // here we are using children property of unOrderedList to access the second element and then using after method to add li4 after it

  let arr=["Banana","Mango","Orange","Apple"];
  const unOrderedList=document.getElementById("list1");
//   let fragment=document.createDocumentFragment();
  let arr1=[];
  for(let i=0;i<arr.length;i++){
    let li=document.createElement("li");
    li.textContent=arr[i];
    // fragment.append(li);
    arr1.push(li);

     
  }
    // unOrderedList.append(fragment);
    unOrderedList.append(...arr1); // here ... is spread operator which will spread the array elements

    const s1=document.getElementById("first");
    s1.remove(); // to remove an element
    console.dir(s1); // it will still show the element in console but it is removed from the DOM

    const month=document.getElementById("list1");
    console.dir(month.children);