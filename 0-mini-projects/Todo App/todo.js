let todolist = [];
     function addtoList(){ 
      const inputElement = document.querySelector(".js-input");
      let task = inputElement.value;
      console.log(task);
      todolist.push(task)
      console.log(todolist);
      inputElement.value = ""
      
     }
     function enter(event){
       if(event.key ==="Enter"){
          addtoList()
       }
     }
// mini project version 1 with array