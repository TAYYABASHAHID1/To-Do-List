var usertext=document.getElementById("usertext")
var btn=document.getElementById("adding")
var ul=document.getElementById("main")

btn.addEventListener("click",function(){
ul.innerHTML+=  `<li id="slots"> ${usertext.value} <button id ="delete" onclick="dlt()">delete</button> <button id="edit" onclick="update()">edit</button></li>`

usertext.value=" "


})

//"delete button"
var delte =document.getElementById("delete") 

function dlt(){
console.log(event.target.parentNode.remove());

}

//"edit button"
function update(){
//    console.log(event.target.parentNode.innerHTML.nodevalue)
//    var won=prompt("enter any text",)
// console.log(event.target.parentNode.innerHTML= won)
// console.dir(event.target.parentNode.innerHTML=won)

// }
var li=document.getElementById("slots")
// var newText = prompt("Enter new text:", li.firstChild.textContent);
// if (newText !== null) {
//     li.firstChild.textContent = newText + ' ';

// }

var span = li.firstChild;
var currentText = span.textContent.trim();


var input = document.createElement("input");
input.type = "text";
input.value = currentText;
       
       var saveButton = document.createElement("button");
       saveButton.textContent = "Save";

      
       li.insertBefore(input, span);
       li.insertBefore(saveButton, span);
       li.removeChild(span);

       saveButton.addEventListener("click", function() {
         var newText = input.value;

         
         var newSpan = document.createElement("span");
         newSpan.textContent = newText + " ";

         li.insertBefore(newSpan, input);
         li.removeChild(input);
         li.removeChild(saveButton);
})
}
//"clear all button"
var allclear=document.getElementById("allclear")

function foo (){
var get=document.childNodes[1].children[1].children[0].children[0].children[3]
get.remove();
};
