import PropTypes from 'prop-types';
import ProfileImageUploader from '../Profile/ProfileImageUploader';
function About({ colour }) {
    return (

        <section id='about' className='about-section' style={{ background: colour }}>
            <h2>About Me</h2>

            <ProfileImageUploader></ProfileImageUploader>
            <p>This is some information about me</p>

        </section>

    );
}

About.propTypes = {
    colour: PropTypes.string.isRequired
}

export default About