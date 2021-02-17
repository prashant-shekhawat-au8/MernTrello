export const task =(search)=> async dispatch => {
    fetch("https://trelllo-mern.herokuapp.com/task",{
        method:'GET'
        })
    .then((res) => res.json())
    .then((data) => {
        console.log(data.data.task)
        
        if(search){
            console.log(data.data.task.filter(filter=>filter.title===search))
            //dispatch({type:"TASK",payload:data.data.task.filter(filter=>filter.name===search)})
        }
        else{
            dispatch({type:"TASK",payload:data.data.task})
            
        }
    })
  }
