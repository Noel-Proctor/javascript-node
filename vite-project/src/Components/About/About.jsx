import ProfileImageUploader from '../Profile/ProfileImageUploader';
import './About.css';
import { ThemeContext } from '../../context/context';
import { useContext } from 'react';

function About() {

    const Theme = useContext(ThemeContext);
    const colour = Theme[1];

    return (
        <section id='about' className='about-section' style={{ background: colour }}>
            <h2>About Me</h2>

            <div className="imageUploader">
                <ProfileImageUploader></ProfileImageUploader>
            </div>



            <p>This is some information about me</p>

        </section>

    );
}

export default About