let todoObj = JSON.parse(localStorage.getItem("todolist"))
     if(!todoObj){
      todoObj =[{task:"Code for 3 hrs",date:"2025-08-17"}];
     }
     function addtoList(){ 
      const inputElement = document.querySelector(".js-input");
      const inputDate = document.querySelector(".js-date");
      let task = inputElement.value;   //or let {task,date} todoObject; destructering
      let date = inputDate.value;
      console.log(task);console.log(date)
      todoObj.push({task,date})
      console.log(todoObj);
      inputElement.value = ""
      showTasks()
     }
     function deletetask(i){
       todoObj.splice(i,1)
       showTasks()
     }
     function showTasks(){
       let list_Objs = ``;
       todoObj.forEach(function(todoitem,index){
        if(todoObj[index].task)
         list_Objs+=`<div class = "grid"><p>${todoObj[index].task}</p><p>${todoObj[index].date}</p><button class = "btn-red" onclick="deletetask(${index})">Delete</button></div>`;
        })
       let list_div =  document.querySelector(".js-list")
       list_div.innerHTML = list_Objs
       localStorage.setItem("todolist",JSON.stringify(todoObj));
     }
     function enter(event){
       if(event.key ==="Enter"){
          addtoList()
       }
     }
      