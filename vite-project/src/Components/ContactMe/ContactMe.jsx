import PropTypes from 'prop-types';

function ContactMe({ colour }) {

    return (
        <section id='contact' className='contact-section' style={{ background: colour }}>
            <h3>Contact Me</h3>
            <p>This is how you can contact me</p>
            <p>This is a Components</p>
        </section>
    );
}

ContactMe.propTypes = {
    colour: PropTypes.string.isRequired,
};

export default ContactMe

