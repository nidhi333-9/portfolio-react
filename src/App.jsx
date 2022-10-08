import { useState } from 'react'
import { BsMoonStarsFill } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FaReact, FaHtml5, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiCss3, SiTailwindcss, SiJavascript, SiAdobephotoshop, SiCanva } from "react-icons/si"
import tnidhi from "./assets/nidhi.png"
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      <main className='bg-white pb-10 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-5 sm:mb-12 flex justify-between'>

            <h1 className='text-xl font-burtons uppercase dark:text-white'>TechyNidhi</h1>
            <ul className='flex items-center'>
              <li><BsMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl dark:text-white' /></li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4 md:ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='sm:flex mt-8 md:mt-16'>
            <div className='text-center  sm:text-left'>
              <div className='py-10 '>
                <h2 className='text-3xl md:text-5xl py-2 text-gray-800 dark:text-gray-300 font-medium'>Hey 👋, I am</h2>
                <h2 className='text-4xl md:text-6xl py-2 text-teal-600 font-medium'>Nidhi Kumari</h2>
                <h3 className='text-2xl py-2 font-semibold dark:text-gray-100'>Developer & Designer</h3>
                <p className='font-medium py-3 leading-8 text-gray-800 dark:text-gray-300'>Freelancer providing services for programming and development needs. Join me down below and let&aposs get cracking!</p>
              </div>
              <div className='flex text-5xl justify-center sm:justify-start gap-14 py-1 text-gray-600 cursor-pointer  dark:text-gray-100'>
                <a className='hover:text-teal-600' href='https://twitter.com/techy_nidhi' target="_blank" rel="noreferrer">
                  <AiFillTwitterCircle />
                </a>
                <a className='hover:text-teal-600' href="https://www.linkedin.com/in/nidhi-kumari-1b1628213/" target="_blank" rel="noreferrer">
                  <AiFillLinkedin />
                </a>

                <a className='hover:text-teal-600' href="https://github.com/nidhi333-9" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>

              </div>
            </div>

            <div className='relative mx-auto sm:w-72 mt-10' >
              <img className='image-nidhi rounded-lg animate-[wiggle_1s_ease-in-out_infinite]' src={tnidhi} alt="nidhi" />
            </div>
          </div>
        </section>

        <section>
          <div className='mt-10'>
            <h3 className='text-3xl py-1 font-semibold dark:text-gray-100'>My Projects</h3>
            <div className="projects">
              <Projects />
            </div>
          </div>

        </section>

        <section>
          <div className='mt-10'>
            <h3 className='text-3xl py-1 font-semibold dark:text-gray-100'>About Me</h3>
            <p className='font-medium py-3 leading-8 text-gray-800 dark:text-gray-300'>
              I am a self-learning student, who enjoys doing multiple things like web development, graphic designing, reading books and sketching.
              Let me know if I can help you anyway!!!
            </p>
          </div>

        </section>
        <section>
          <div className='mt-10'>
            <h3 className='text-3xl py-1 font-semibold dark:text-gray-100'>My Skills</h3>
            <div className='text-6xl pt-4'>
              <div className='flex  justify-start gap-14 py-3 text-gray-600 cursor-pointer dark:text-gray-100'>
                <div className='flex-col justify-center'>
                  <FaHtml5 />
                  <p className='text-sm font-semibold'>HTML5</p>
                </div>
                <div>
                  <FaReact />
                  <p className="text-sm font-semibold">React</p>
                </div>
                <div>
                  <FaFigma />
                  <p className="text-sm font-semibold">Figma</p>
                </div>

              </div>
              <div className='flex text-5xl justify-start gap-14 py-1 text-gray-600 cursor-pointer dark:text-gray-100'>
                <div className='flex-col justify-center'>
                  <SiCss3 />
                  <p className="text-sm font-semibold">CSS</p>
                </div>
                <div>
                  <SiCanva />
                  <p className="text-sm font-semibold">Canva</p>

                </div>
                <div>
                  <SiAdobephotoshop />
                  <p className="text-sm font-semibold">PhotoShop</p>
                </div>

              </div>
              <div className='flex text-5xl justify-start gap-14 py-1 text-gray-600 cursor-pointer dark:text-gray-100'>
                <div>
                  <SiJavascript />
                  <p className="text-sm font-semibold">JavaScript</p>
                </div>
                <div>
                  <SiNextdotjs />
                  <p className="text-sm font-semibold">Next Js</p>
                </div>
                <div>
                  <SiTailwindcss />
                  <p className="text-sm font-semibold">Tailwind</p>
                </div>

              </div>
            </div>
          </div>
        </section>
        <div className='mt-10'>
          <Contact />
        </div>
      </main>
      <footer className='h-20 text-center bg-gray-800 items-center pt-3'>
        <p className='font-medium py-3 leading-8 text-gray-300'>Made with ♥️ by Nidhi</p>
      </footer>

    </div>
  )
}

export default App
