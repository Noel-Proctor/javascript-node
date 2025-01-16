import { useState } from 'react';
import './ColourPicker.css';

function ColourPicker() {

    const [color, setColour] = useState("ff0000");

    const colors = ['#ff0000', '#474E93', '#72BAA9', '#D5E7B5'];

    const handleColourChange = (color) => {
        setColour(color);
    }

    return (

        <div className='colour-picker-container'>
            <h1>Color Picker</h1>
            <div className="color-pallete" style={{ backgroundColor: color }}>
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="color-box"
                        style={{ backgroundColor: color }}
                        onClick={() => setColour(color)}
                    ></div>
                ))}
            </div>

            <div className='Custom-colour-picker'>
                <input type="color"
                    value={color}
                    onChange={(e) => handleColourChange(e.target.value)} />
            </div>
        </div>

    );
}


export default ColourPicker;    