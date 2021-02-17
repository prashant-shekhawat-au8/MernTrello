export const category =(search)=> async dispatch => {
    fetch("https://trelllo-mern.herokuapp.com/category",{
        method:'GET'
        })
    .then((res) => res.json())
    .then((data) => {
        console.log(data.data.category)
        if(search){
            
            dispatch({type:"CATEGORY",payload:data.data.category.filter(filter=>filter.name===search)})
        }
        else{
            dispatch({type:"CATEGORY",payload:data.data.category})
            
        }
        
    })
  }
