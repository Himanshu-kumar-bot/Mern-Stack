

const body=document.querySelector('body');
body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

    const circle=document.createElement('div');
    circle.classList.add('circle');
    const color=['#ff0000','#00ff00','#0000ff','#ffff00','#ff00ff','#00ffff'];
    //  const text=["hello","hi","wlcm","greetings","salutations","howdy"];
    //  circle.innerText=text[Math.floor(Math.random()*text.length)];
    circle.textContent="hi";
    const randomColor=color[Math.floor(Math.random()*color.length)];
    circle.style.backgroundColor=randomColor;
    circle.style.left=`${e.clientX-25}px`;
    circle.style.top=`${e.clientY-25}px`;
  console.log(body);
    body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },5000);
})