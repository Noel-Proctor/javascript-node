import { useState } from 'react'
import './App.css'
import Header from './Components/Common/Header'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Common/Footer'
import About from './Components/About/About'
import ProjectList from './Components/Projects/ProjectList'
import ProfileImageUploader from './Components/Profile/ProfileImageUploader'


function App() {



  return (
    <div className='App'>
      {/* Header Section */}
      <Header></Header>
      {/* About section */}
      <About></About>
      {/* Projects section */}
      <ProjectList></ProjectList>
      <ProfileImageUploader></ProfileImageUploader>
      {/* Contact section */}
      <ContactMe></ContactMe>
      {/* Footer Section */}
      <Footer></Footer>
    </div>

  );
}

export default App
