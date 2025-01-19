import { useState } from 'react'
import './App.css'
import Header from './Components/Common/Header'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Common/Footer'
import About from './Components/About/About'
import ProjectList from './Components/Projects/ProjectList'
import Form from './Components/Form/Form'
import APIGetExample from './Components/APIRequestExamples/APIGetExample'
import APIPostExample from './Components/APIRequestExamples/APIPostExample'
import { ThemeContext } from './context/context'



function App() {


  const [colourScheme, setColourScheme] = useState(['#FF8000', '#4C1F7A', '#219B9D', '#EEEEEE']);

  return (
    <div className='App'>

      <ThemeContext.Provider value={colourScheme} setColourScheme={setColourScheme}>
        {/* Header Section */}
        <Header setColourScheme={setColourScheme}></Header>
        {/* About section */}
        <About></About>
        <APIPostExample></APIPostExample>
        <APIGetExample></APIGetExample>
        {/* Projects section */}
        <ProjectList></ProjectList>
        <Form></Form>
        {/* Contact section */}
        <ContactMe></ContactMe>
        {/* Footer Section */}
        <Footer></Footer>
      </ThemeContext.Provider>

    </div>


  )
}


export default App
