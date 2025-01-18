import { useState } from 'react'
import './App.css'
import Header from './Components/Common/Header'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Common/Footer'
import About from './Components/About/About'
import ProjectList from './Components/Projects/ProjectList'
import ProfileImageUploader from './Components/Profile/ProfileImageUploader'
import Form from './Components/Form/Form'
import ColourPicker from './Components/ColourPicker/ColourPicker'
import Clock from './Components/Clock/Clock'


function App() {

  const [colourScheme, setColourScheme] = useState(['#FF8000', '#4C1F7A', '#219B9D', '#EEEEEE']);

  return (
    <div className='App'>
      {/* Header Section */}
      <Header colour={colourScheme[0]} setColourScheme={setColourScheme}></Header>
      {/* About section */}
      <About colour={colourScheme[1]}></About>
      {/* Projects section */}
      <ProjectList colour={colourScheme[2]}></ProjectList>
      <Form></Form>
      {/* Contact section */}
      <ContactMe colour={colourScheme[3]}></ContactMe>
      {/* Footer Section */}
      <Footer colour={colourScheme[0]}></Footer>
    </div>

  );
}

export default App
