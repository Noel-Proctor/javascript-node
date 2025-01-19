import { ThemeContext } from '../../context/context';
import { useContext } from 'react';

function Footer() {

    const theme = useContext(ThemeContext);
    const colour = theme[0];
    return (

        <footer className="footer" style={{ background: colour }}>
            <p>2025 All Rights Reserved To Homer Simpson</p>

        </footer>

    );
}

export default Footer;