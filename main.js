
  let inputname=document.getElementById("name");
let inputprices=document.getElementById("prices");
let inputcatogry=document.getElementById("catogry");
let inputsearch=document.getElementById("search");

let taskssindex=0
let tasks=[]
if (localStorage.getItem("taskss")!=null){
    tasks=JSON.parse(localStorage.getItem("task"))
    display()
}
function addtask(){
    let task={

        name: inputname.value ,
        price: inputprices.value,
        catogry : inputcatogry.value
    }
 tasks.push(task)
 localStorage.setItem("task",JSON.stringify(tasks));
 display()
}
function display(){
    let temp =""
    for (let i=0 ; i<tasks.length ; i++){
        temp +=`
        <tr>
        <td >${i}</td>
        <td>${tasks[i].name}</td>
        <td>${tasks[i].price}</td>
        <td>${tasks[i].catogry}</td>
        <td><button type="button" onclick="updatetask(${i})"  class="btn  bg-danger">update</button></td>
        <td><button type="button" onclick="removtask(${i})" class="btn bg-info">delete</button></td>
      </tr>`
    }
    document.getElementById("tablebody").innerHTML=temp
    localStorage.setItem("task",JSON.stringify(tasks));
}
function removtask(index){
 tasks.splice(index,1);
 localStorage.setItem("task",JSON.stringify(tasks));
 display()
}
function updatetask(taskindexx){
    taskssindex=taskindexx
    inputname.value = tasks[taskindexx].name
    inputprices.value= tasks[taskindexx].price
    inputcatogry.value= tasks[taskindexx].catogry
    display()
   document.getElementById("add").style.display="none"
   document.getElementById("edit").style.display="inline-block"
}
function edittask(){
    tasks[taskssindex].name=inputname.value
    tasks[taskssindex].price=inputprices.value
    tasks[taskssindex].catogry=inputcatogry.value
    localStorage.setItem("task",JSON.stringify(tasks));
    display()
}
 
function clearform(){
    inputname.value=""
    inputprices.value=""
    inputcatogry.value=""
}
function search(){
    let searchvalue = inputsearch.value.toLowerCase();
    let temp =""
    for (let i=0 ; i<tasks.length ; i++){
        if(tasks[i].name.toLowerCase().includes(searchvalue)==true){
            temp +=`
            <tr>
            <td >${i}</td>
            <td>${tasks[i].name}</td>
            <td>${tasks[i].price}</td>
            <td>${tasks[i].catogry}</td>
            <td><button type="button" onclick="updatetask(${i})"  class="btn  bg-danger">update</button></td>
            <td><button type="button" onclick="removtask(${i})" class="btn bg-info">delete</button></td>
          </tr>`
        }
     
    }
    document.getElementById("tablebody").innerHTML=temp
    
}