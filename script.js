
const form =
document.getElementById("volunteerForm");



const nameInput =
document.getElementById("name");

const emailInput =
document.getElementById("email");

const messageInput =
document.getElementById("message");

const toast =
document.getElementById("toast");

form.addEventListener("submit", function(e){



e.preventDefault();

let valid = true;

document.getElementById("nameError").textContent="";
document.getElementById("emailError").textContent="";
document.getElementById("messageError").textContent="";
document.getElementById("interestError").textContent="";

if(nameInput.value.trim()===""){

document.getElementById("nameError")
.textContent="Name is required";

valid=false;

}

if(!emailInput.value.includes("@")){

document.getElementById("emailError")
.textContent="Enter valid email";

valid=false;

}

const interest =
document.getElementById("interest");

if(interest.value===""){

document.getElementById("interestError")
.textContent="Please select an interest area";

    valid = false;

}

if(messageInput.value.length<10){

document.getElementById("messageError")
.textContent="Message should be at least 10 characters";

valid=false;

}

if(valid){

const submission = {

name:nameInput.value,

email:emailInput.value,

message:messageInput.value,

interest:
document.getElementById("interest").value,

date:new Date().toLocaleString()

};

let data =
JSON.parse(
localStorage.getItem("volunteers")
) || [];

data.push(submission);

localStorage.setItem(
"volunteers",
JSON.stringify(data)
);

toast.classList.add("show-toast");

setTimeout(()=>{

toast.classList.remove("show-toast");

},3000);

form.reset();

}

});

const toggleBtn =
document.getElementById("themeToggle");

if(toggleBtn){

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

    }

    toggleBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

        }
        else{

            localStorage.setItem("theme","light");

        }

    });

}


const impactSection =
document.querySelector("#impact");

let counterStarted = false;

const impactObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !counterStarted){

counterStarted = true;

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
+counter.getAttribute("data-target");

const current =
+counter.innerText;

const increment =
Math.ceil(target/100);

if(current < target){

counter.innerText =
current + increment;

setTimeout(updateCounter,20);

}
else{

counter.innerText =
target + "+";

}

};

updateCounter();

});

}

});

});

impactObserver.observe(impactSection);

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>{

observer.observe(el);

});

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }
    else{

        topBtn.style.display = "none";
        
    }
});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"
    });
});