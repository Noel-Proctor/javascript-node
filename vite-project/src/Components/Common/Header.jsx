import { ProfilePicture } from '../Profile/ProfilePicture';
import profile_Icon from '../Assets/HeWillNeverLetYoudown.jpg';
import PropTypes from 'prop-types';

function Header({ colour }) {

    const myName = "Noel Proctor";
    const profession = "Software Developer";

    return (

        <header className='header' style={{ background: colour }}>
            <h1>{myName}</h1>
            <ProfilePicture></ProfilePicture>

            <img src={profile_Icon}></img>
            <h1>TEST</h1>
            <h2>{profession}</h2>
            <nav>
                <a href="about">About</a>
                <a href="projects">Projects</a>
                <a href="contact">Contact</a>
            </nav>
        </header>




    );
}
Header.propTypes = {
    colour: PropTypes.string.isRequired
};

export default Header;
