import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'

const App = () => {
  return (
    /**
     *  
     *  PLEASE JUST DELETE THIS BOILERPLATE WELCOME CODE I MADE
     *  
     * **/
     <div className="w-full h-auto flex flex-col bg-primary">
         <main>
           <Routes>
             <Route path="/*" element={<Hero/>}></Route>
           </Routes>
         </main>
    </div>
  )
}

export default App