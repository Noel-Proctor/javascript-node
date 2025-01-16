
import PropTypes from 'prop-types';

function Footer({ colour }) {
    return (

        <footer className="footer" style={{ background: colour }}>
            <p>2025 All Rights Reserved To Homer Simpson</p>

        </footer>

    );
}

Footer.propTypes = {
    colour: PropTypes.string.isRequired,
};

export default Footer;