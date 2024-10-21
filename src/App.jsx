import { useState } from 'react'
import './App.css'
import Counter from './Components/Redux/Counter'
import PostsList from './Components/Redux/PostsList'
import AddFormPost from './Components/Redux/AddFormPost'


function App() {

  return (
    <>
   
     {/* <div>
      <Counter/>
     </div> */}
     
      <div>
      <AddFormPost/> 
      <PostsList/>
      </div>
      <div>
     
      </div>
    </>
  )
}


export default App
