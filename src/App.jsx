import { useState } from 'react'
import PostsList from './Components/Redux/PostsList'
import AddFormPost from './Components/Redux/AddFormPost'


function App() {

  return (
    <>
      <AddFormPost/> 
      <PostsList/>
    </>
  )
}


export default App
