import PropTypes from 'prop-types';
import Clock from '../Clock/Clock';
import ColourPicker from '../ColourPicker/ColourPicker';
import { useContext } from 'react';
import { ThemeContext } from '../../context/context'


function Header({ setColourScheme }) {

    const theme = useContext(ThemeContext);
    const themeColour = theme[0]

    return (

        <header className='header' style={{ background: themeColour }}>
            <nav>
                <a href="about">About</a>
                <a href="projects">Projects</a>
                <a href="contact">Contact</a>
                <Clock></Clock>
                <ColourPicker setColourScheme={setColourScheme}></ColourPicker>
            </nav>
        </header>

    );
}
Header.propTypes = {
    setColourScheme: PropTypes.func.isRequired
};

export default Header;
