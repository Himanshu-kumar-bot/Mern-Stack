// function handleClick(){
//    const el= document.getElementById("heading");
//    el.textContent="Strike is coming soon";

// }

// const el= document.getElementById("heading");
// el.onclick= function(){
//     el.textContent="Strike is coming soon";
// }
 
// el.onclick= function(){
//     el.style.fontSize="50px";  //this overrides the previous onclick function so only this will work and  this is not better way to handle events

// }


// const el= document.getElementById("heading");
// el.addEventListener("click", function(){
//     el.textContent="Strike is coming soon";
// })

// el.addEventListener("click", function(){
//     el. style.backgroundColor="red" //this will work as we are using addEventListener
// })

// const divEl= document.getElementById("child1");
// divEl.addEventListener("click", function(){
//     divEl.textContent="Child 1 clicked";
// });
const parentEl= document.getElementById("parent");

// console.log(parentEl.children);
// parentEl.addEventListener("click", (e)=>{
//     // console.log(e.target);
//     e.target.textContent="I am clicked";
// });

function handleClick(e){
    e.target.textContent="I am clicked";
    parentEl.removeEventListener("click", handleClick);
}
parentEl.addEventListener("click", handleClick);
// parentEl.removeEventListener("click", handleClick);
// for(let i of parentEl.children){
//     console.log(i);
//     i.addEventListener("click", ()=>{
//         i.textContent="I am  clicked";
// })};

// const gParentEl= document.getElementById("grandparent");
// gParentEl.addEventListener("click", (e)=>{
//     console.log(e.target); //this will show the element which is clicked
//     // console.log("Grand parent clicked");
// });

// const parentEl= document.getElementById("parent");
// parentEl.addEventListener("click", (e)=>{
//  e.stopPropagation();   //this will stop the event bubbling so grand parent event will not be triggered
//     // console.log("Parent clicked");
//      console.log(e);
// });

// const childEl= document.getElementById("child");
// childEl.addEventListener("click", (e)=>{
//     e.stopPropagation(); //this will stop the event bubbling so parent and grand parent event will not be triggered
//     // console.log("Child clicked");
//      console.log(e);
// });