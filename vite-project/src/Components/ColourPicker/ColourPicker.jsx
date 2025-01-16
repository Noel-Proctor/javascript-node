import './ColourPicker.css';


// eslint-disable-next-line react/prop-types
function ColourPicker({ setColourScheme }) {

    const colourSchemes = [
        ['#FF8000', '#4C1F7A', '#219B9D', '#EEEEEE'],
        ['#E88D67', '#F3F7EC', '#006989', '#005C78'],
        ['#FCC737', '#F26B0F', '#E73879', '#7E1891'],
        ['#7C444F', '#9F5255', '#E16A54', '#F39E60']
    ];

    const handleColourChange = (colorScheme) => {
        setColourScheme(colorScheme);
    }

    return (

        <div className='colour-picker-container'>
            <h1>Color Picker</h1>
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
    );
}


export default ColourPicker;    