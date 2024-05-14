let task = 
    {
        "title": "قراءة الكتاب",
        "date" : "10/20/2020",
        "isDone" : false
    }

    let tasks = [
    {
        "title": "قراءة الكتاب",
        "date" : "10/20/2020",
        "isDone" : true
    },
    {
        "title": "قراءة الكتاب",
        "date" : "10/20/2020",
        "isDone" : false
    },
    {
        "title": "قراءة الكتاب",
        "date" : "10/20/2020",
        "isDone" : true
    }
]

getTaskfromStorge ()
             //======= Fill Task ======//
  function filltasks(){
  
   
    let index=0
    document.getElementById("tasksTable").innerHTML =""

    for(task of tasks )
        {
            let contain = 
     `
        <div class="task   ${task.isDone ? "done" : " " } " >
            <div class="button">
                <button   onclick="Update(${index})" class="circule  " style="background-color:rgba(0, 16, 197,0.692) ;">
                <span class="material-symbols-outlined">
                edit
                </span>
            </button>
                 ${task.isDone? 
                `
                 <button   onclick="Done(${index}) " "  class="circule   " style="background-color: #ff3333;">
                 <span class="material-symbols-outlined">
                 close_small
                 </span>
            </button>`
                                :
                       
                `
                 <button   onclick="Done(${index}) " "  class="circule   " style="background-color: rgb(0, 150, 30);">
                <span class="  material-symbols-outlined">
                done
                </span>
            </button>`
                        }
                
                <button onclick=deleteTask(${index}) class="circule " style="background-color: rgb(114,0,0);">
                <span class="material-symbols-outlined">
                delete
                </span>
            </button>
            </div>
            <div class="content">
            <div>
            <h4>${task.title}</h4>
            
                <span style="font-size: smaller;" >${task.date}</span>
                <span class="material-symbols-outlined" style="font-size: 15px;">
                history
                </span>
            </div>
            </div>
        </div>
 `
   
    document.getElementById("tasksTable").innerHTML += contain 
    index++
    
}
  }  
  filltasks()

   //======= Fill Task ======//


  //======= Add New Task ======// 
document.getElementById("Add").addEventListener("click",function(){
    let now = new Date()
    let taskDate = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear() 
    let taskName = prompt("ادخل المهمه الجديدة")
  let taskobj =
       {
        "title": taskName,
        'date' : taskDate,
        'isDone' : false
         }
         if(taskName!=`` && taskName!= null)
          tasks.push(taskobj)
                isReturn () 
                filltasks()
                
               
            })
             //======= Add New Task ======// 


              //======= Delete task ======// 
function deleteTask(index){
    let taskesIndex = tasks[index]
    let isConfirmed = confirm("are you sure to remove :" + (taskesIndex.title)  )
    if(isConfirmed)
        {
          
        tasks.splice(index,1)   
        isReturn ()
        filltasks()
}
}

         //======= Delete task ======//

          //======= Update Task ======//
function Update(index){
    let task = tasks[index]
    let newDate = prompt("put a new name " , task.date)
    let newTaskName = prompt("put a new name " , task.title)
        if(newTaskName!=``&& newTaskName!= null  )
    task.title = newTaskName
          if( newDate!=``&& newDate!= null)
        task.date = newDate
           isReturn ()
   filltasks()
    }
        //======= Update Task ======//  

        //======= Task is Done ======//
    function Done (index){
        let task = tasks[index]
          if(task.isDone){

           
              task.isDone = false 
             
          }
            else{
            task.isDone = true 
            
            }
            isReturn ()
            filltasks()
        }

          //======= Task is Done ======//


          //======= storage ======//

      function isReturn (){
        let taskString = JSON.stringify(tasks)
        localStorage.setItem("mytasks", taskString )

      }


      function getTaskfromStorge (){
        tasks = JSON.parse(localStorage.getItem("mytasks"))
   }

         //======= storage ======//