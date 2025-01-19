import './ColourPicker.css';
import { useState } from 'react';
import { IoIosColorFill } from "react-icons/io";
import { IoClose } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
function ColourPicker({ setColourScheme }) {


    const colourSchemes = [
        ['#FF8000', '#4C1F7A', '#219B9D', '#EEEEEE'],
        ['#E88D67', '#F3F7EC', '#006989', '#005C78'],
        ['#FCC737', '#F26B0F', '#E73879', '#7E1891'],
        ['#7C444F', '#9F5255', '#E16A54', '#F39E60'],
        ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'],
        ['#1e1e1e', '#2e2e2e', '#3e3e3e', '#4e4e4e'],
        ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da']
    ];

    const handleColourChange = (colorScheme) => {
        setColourScheme(colorScheme);
    }

    const [showColourPicker, setShowColourPicker] = useState(false);

    const toggleColourPicker = () => {
        setShowColourPicker(!showColourPicker);
    }



    return (

        <div className='colour-picker-container'>

            <IoIosColorFill onClick={toggleColourPicker} className='icon' />


            {showColourPicker && (

                <div className='popup-overlay'>
                    <div className='popup'>


                        <div className="popup-title">
                            <IoClose onClick={toggleColourPicker} className='icon' />
                        </div>


                        <div className='color-pallete'>
                            {[...colourSchemes].map((colorScheme, index) => (
                                <div
                                    key={index}
                                    className='colour-box'
                                    onClick={() => handleColourChange(colorScheme)}>
                                    {[...colorScheme].map((color, index) => (
                                        <div
                                            key={index}
                                            className='colour-strip'
                                            style={{ backgroundColor: color }}>
                                        </div>))
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default ColourPicker;    