if(document.readyState!=="loading"){
    console.log("Document is ready!");
    initializeCode();
}
else{
    document.addEventListener("DOMContentLoaded",function(){
        console.log("Document is ready after waiting for!");
        initializeCode();
    })  
}

let noteCounter=0;

function initializeCode(){
    const addNotebutton=document.getElementById("add note");
    const removeNotebutton=document.getElementById("remove note");

    addNotebutton.addEventListener("click",function(){
        const comment=document.getElementById("notes");

        let newParagraph=document.createElement("p");
        newParagraph.innerText = ++noteCounter + ". " + document.getElementById("comment").value;
        notes.appendChild(newParagraph);
    })

    removeNotebutton.addEventListener("click",function(){
        const comment=document.getElementById("notes");

        notes.removeChild(notes.lastChild);
        noteCounter--;
    })
}











/*console.log("Hello World!");

let numbers=[];

numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);

console.log(numbers);

numbers.unshift(666);

console.log(numbers);

let number= numbers.pop();

console.log(numbers);
console.log(number);

let student={
    name:"John",
    id:"67"
}

let students=[];

students.push(student);
students.push({name:"Adam",id:"1"});
students.push({name:"Son",id:"13"});
students.push({name:"Bro",id:"12"});

console.log(students);

students.forEach(s => console.log(s));

while (students.length>0) {
    console.log(students.pop());
}
console.log(students); 
*/