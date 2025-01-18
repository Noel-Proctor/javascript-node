import { ProfilePicture } from '../Profile/ProfilePicture';
import profile_Icon from '../Assets/HeWillNeverLetYoudown.jpg';
import PropTypes from 'prop-types';
import Clock from '../Clock/Clock';
import ColourPicker from '../ColourPicker/ColourPicker';


function Header({ colour, setColourScheme }) {

    return (

        <header className='header' style={{ background: colour }}>
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
    colour: PropTypes.string.isRequired,
    setColourScheme: PropTypes.func.isRequired
};

export default Header;
