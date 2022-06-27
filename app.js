
var input = document.getElementById("input");
var list = document.getElementById("list");
// list.setAttribute("style","background-color: red;margin-left:0px")

var count = document.getElementById("count").innerHTML;
// var countNumber = 0;
// count = countNumber;
// console.log(count);

var count = document.getElementById("count");
var countnum = 0;
count.innerHTML = countnum;


function addTodo(e){

    if(input.value.length >=5 && input.value.length <=20){
        console.log(input.value);

    var li = document.createElement("li");
    li.setAttribute("style","margin-top:30px;border: 2px solid black;background-color: lightgreen;padding : 15px");
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    list.appendChild(li);


    //create Delete button
    var btndelete = document.createElement("button");
    btndelete.setAttribute("style","width: 100%;padding : 10px 25px;margin-left : 10px;border : 2px solid red;font-family: monospace;");
    btndelete.innerHTML = "Delete Button";
    btndelete.setAttribute("onclick","deletodo(this)")
    li.appendChild(btndelete);


    //create Edit button
    var editdelete = document.createElement("button");
    editdelete.setAttribute("style","width: 100%;padding : 10px 25px;border : 2px solid red;margin-left : 10px;font-family: monospace;");
    editdelete.innerHTML = "Edit Button";
    li.appendChild(editdelete);
    editdelete.setAttribute("onclick","edittodo(this)");

    input.value="";
    
    countnum ++;
    count.innerHTML = countnum;
    

    }
        else{
            alert("Enter Valid ToDo");
        }    
    }
function deletodo(e){
//  console.log(e);
// var d = e.parentNode.childNodes;
// console.log(d);
e.parentNode.remove();
countnum --;
count.innerHTML = countnum;
}

function edittodo(e){
    var edittodoagain = prompt("Edit Todo Again !",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edittodoagain;
}
 
function deleteall(){
    list.innerHTML = "";
    count.innerHTML = 0;
}
    