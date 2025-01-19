
import { useContext } from 'react';
import { ThemeContext } from '../../context/context';

function ContactMe() {

    const theme = useContext(ThemeContext);
    const colour = theme[0];

    return (
        <section id='contact' className='contact-section' style={{ background: colour }}>
            <h3>Contact Me</h3>
            <p>This is how you can contact me</p>
            <p>This is a Components</p>
        </section>
    );
}

export default ContactMe

