// first target your element
const container = document.querySelector("#container");

//now make an element inside the container we referenced too!

const content = document.createElement("div");

//now make the class inside the element DIV
//variable.classList.add("class-name");

content.classList.add("content");

//now add the text inside of it 

content.textContent = "Hello Romalvir Singh!!!";

//now we create it to the HTML

container.appendChild(content);


// a <p> with red text that says “Hey I’m red!”

// an <h3> with blue text that says “I’m a blue h3!”
const para = document.createElement("P");
para.classList.add("paragraph");
para.textContent = "Hey Im red!";
para.style.color = 'red';
container.appendChild(para);


const paraBlue = document.createElement("P");
paraBlue.classList.add("paragraph");
paraBlue.textContent = "Hey Im blue h3!";
paraBlue.style.color = 'blue';
container.appendChild(paraBlue);

//button events method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

//button events method 3
//Method 3 is much more flexible and powerful, 


const newBtn = document.querySelector("#JM3")
newBtn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});