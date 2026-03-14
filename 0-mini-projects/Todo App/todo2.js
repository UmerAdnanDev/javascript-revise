let todoObj =[{task:"Code for 3 hrs",date:"2025-08-17"}];
     function addtoList(){ 
      const inputElement = document.querySelector(".js-input");
      const inputDate = document.querySelector(".js-date");
      let task = inputElement.value;
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
       for(let i = 0;i<todoObj.length;i++){
         list_Objs+=`<p>${todoObj[i].task}</p><p>${todoObj[i].date}</p><button class = "btn-red" onclick="deletetask(${i})">Delete</button>`;
       }
       let list_div =  document.querySelector(".js-list")
       list_div.innerHTML = list_Objs
     }
     function enter(event){
       if(event.key ==="Enter"){
          addtoList()
       }
     }
      