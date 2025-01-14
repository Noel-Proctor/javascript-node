import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const myName = "Noel Proctor";
  const profession = "Software Developer";
  const projects = [
    {
      title: "Project One",
      description: "A web application built using React and Node.js",
      link: "#"
    },

    {
      title: "Project Two",
      description: "An Ecommerce platform built using Spring Boot",
      link: "#"
    }
  ]

  return (
    <>
      <div className='App'>
        {/* Header section */}
        <header className='header'>
          <h1>{myName}</h1>
          <h2>{profession}</h2>
          <nav>
            <a href="about">About</a>
            <a href="projects">Projects</a>
            <a href="contact">Contact</a>
          </nav>
        </header>


        {/* About section */}
        <section id='about' className='about-section'>
          <h2>About Me</h2>
          <p>This is some information about me</p>

        </section>

        {/* Projects section */}
        <section id='projects' className="project-section">
          <h2>Projects</h2>
          <p>This is some information about my projects</p>

          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className='project-item'>
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <a href={project.link}>Go to project</a>
              </div>
            ))}
          </div>

        </section>


        {/* Contact section */}
        <section id='contact' className='contact-section'>
          <h3>Contact Me</h3>
          <p>This is how you can contact me</p>
        </section>

        <footer className="footer">
          <p>2025 All Rights Reserved To Homer Simpson</p>

        </footer>

      </div>
    </>
  )
}

export default App
