//add data to local storage
const addToDb= id =>{
   let jobDetailCard = {}

   //get previous data from localstorage
   const storeJobDetail = localStorage.getItem('jobCard')
   if(storeJobDetail){
    jobDetailCard= JSON.parse(storeJobDetail)
   }


   //add quantity
   const quantity = jobDetailCard[id]
   if(quantity){
    const newQuantity = quantity + 1;
    jobDetailCard[id]= newQuantity;
   }
   else{
    jobDetailCard[id]= 1;
   }

   localStorage.setItem('jobCard', JSON.stringify(jobDetailCard))
}


export {addToDb}