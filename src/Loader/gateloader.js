import { getShoppingCart } from "../Utils/fakeDb"

const jobCardLoader = async () =>{
   const loadJobs = await fetch('featurejob.json')
  const jobCards =await loadJobs.json()
  const storeCart = getShoppingCart()
  const saveJob =[]
  console.log(storeCart)
  for (const id in storeCart){
    const addedJob= jobCards.find(jobCard => jobCard.id === id)
    if(addedJob){
      const quantity = addedJob[id]
      addedJob.quantity = quantity;
      saveJob.push(addedJob)
    }
  }

  return saveJob;

}


export default jobCardLoader;