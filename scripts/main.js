const myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";

let imageSelector = document.querySelector('img');
imageSelector.onclick = function(){
    let mySrc = imageSelector.getAttribute('src');
    if(mySrc === "images/unordinary_cover_image.jfif"){
        imageSelector.setAttribute("src", "images/serapina_image.jpg");
    }
    else{
        imageSelector.setAttribute("src", "images/unordinary_cover_image.jfif");
    }
}

let myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt("Please enter your name.");
    if(!myName){
        setUserName()
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "Welcome " + myName;
    }
    
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome back " + storedName;
}

myButton.onclick = function(){
    setUserName();
}