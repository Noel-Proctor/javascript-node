import { ProfilePicture } from '../Profile/ProfilePicture';
import profile_Icon from '../Assets/HeWillNeverLetYoudown.jpg';

function Header() {

    const myName = "Noel Proctor";
    const profession = "Software Developer";

    return (

        <header className='header' >
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

export default Header