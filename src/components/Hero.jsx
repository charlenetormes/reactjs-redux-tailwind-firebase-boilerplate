import React from 'react'
import heroLogo from '../img/hero-img.png';
import {FaGithub, FaLinkedin, FaTelegram} from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="z-50">
            <div className="grid grid-flow-row grid-row-1 md:grid-flow-col md:grid-cols-2">
                <div className="flex h-screen items-center justify-center p-20 md:p-20 bg-slate-800">
                    <h1 className="text-4xl md:text-6xl text-white leading-tight">
                        Welcome to 
                        <br/><span className="text-cyan-400 font-bold">React+Redux</span> 
                        <br/><span className="text-sky-400 font-bold">TailwindCSS</span>
                        <br/><span className="text-yellow-400 font-bold">Firebase</span>
                        <br/><span className="text-violet-400 font-bold">Boilerplate</span>
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center h-screen">
                    <img className="rounded-full drop-shadow-2xl w-60" src={heroLogo}></img>
                    <h1 className="p-10 text-xl md:text-3xl">
                      Hi! My name is <span className="text-red-400 font-semibold">Charlene Tormes</span>
                    </h1>
                    <p className="p-20 md:p-5">Created this boilerplate for React so it's easier to start your project react over again</p>
                    <h2 className="mt-2 md:mt-10 font-semibold">
                      Give me a <span className="text-red-400">follow</span>
                    </h2>

                    <div className="flex flex-row gap-8 mt-6 mb-6">
                      
                      <div className="cursor-pointer">
                        <FaGithub className="text-2xl"></FaGithub>
                      </div>

                      <div className="cursor-pointer">
                        <FaLinkedin className="text-2xl text-blue-700"></FaLinkedin>
                      </div>

                      <div className="cursor-pointer">
                        <FaTelegram className="text-2xl text-sky-500"></FaTelegram>
                      </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Hero