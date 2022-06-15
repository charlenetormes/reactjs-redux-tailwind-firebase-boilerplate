import React from 'react'

const Hero = () => {
  return (
    <div className="w-screen h-screen grid grid-flow-col grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center p-20 bg-slate-100 md:p-0 dark:bg-slate-800">
                <h1 className="text-6xl text-white">
                    Welcome to 
                    <br/><span className="text-cyan-400 font-bold">React+Redux</span> 
                    <br/><span className="text-sky-400 font-bold">TailwindCSS</span>
                    <br/><span className="text-yellow-400 font-bold">Firebase</span>
                    <br/><span className="text-violet-400 font-bold">Boilerplate</span>
                </h1>
            </div>
            <div className="flex items-center justify-center">

            </div>
    </div>
  )
}

export default Hero