const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {                                       //this function is use for storing data in localstorage(browser)
    localStorage.setItem("notes", notesContainer.innerHTML);     //notesConatiner variable ka data browser mei notes variable mei store hoga
}

createBtn.addEventListener("click" , ()=>{                       //jab btn pei click hoga tab yehfunction exectute hoga.   
    let inputBox = document.createElement("p");                  //it will create variable inputbox which stores p
    let img = document.createElement("img");
    inputBox.className = "input-box";                            //p tag ke variable inputbox ko class name diya input-box 
    inputBox.setAttribute("contenteditable","true");             //woh class ko style diya contenteditable:"true"
    img.src="img/delete.png";                                    //img tag mei woh img ka src diya
    notesContainer.appendChild(inputBox).appendChild(img);       //notescontainer div mei yeh inputbox ko append kiya and usmei img ko append kiya
    
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){                             //tagname property alaways returns names in uppercase only
        e.target.parentElement.remove();                        // jispei click kiya hei wahi element delete hoga
        updateStorage();                                        // agar note delete kiya toh usko browser pei update karne keliye
    }
    else if(e.target.tagName === "p"){                          // agar already written note mei edit karna hei to yeh function
        notes = document.querySelectorAll(".input-box");        
        notes.forEach(nt => {                                   // notes ka short form nt as a use kiya hei
            nt.onkeyup = function(){                            //jabhi bhi notes variable ke conatent mei any key(means anything add hua) toh woh browser pei update hoga
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{                  //enter key ka joh default function hota hei (to submit) woh hahi hoga
    if(event.key === "Enter"){                                  // instead woh cursor next line pei jayega
        document.execCommand("inserrLineBreak");
        event.preventDefault();
    }
})




















