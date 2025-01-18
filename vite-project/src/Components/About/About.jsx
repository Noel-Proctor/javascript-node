import PropTypes from 'prop-types';
import ProfileImageUploader from '../Profile/ProfileImageUploader';
import './About.css';
function About({ colour }) {
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

About.propTypes = {
    colour: PropTypes.string.isRequired
}

export default About