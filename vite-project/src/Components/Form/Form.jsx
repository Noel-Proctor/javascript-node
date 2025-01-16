import { useState } from 'react';
import './Form.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





function Form() {

    const [formData, setFormData] = useState({
        text: "",
        checkbox: false,
        radio: '',
        select: '',
        date: new Date()
    });


    const formOnChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

    };

    const formOnDateChange = (date) => {
        setFormData({
            ...formData,
            date: date
        });

    };


    return (

        <div className='form-container'>
            <p>TEST FORM</p>
            <form action="">

                {/* Text input */}
                <div className='form-field'>
                    <label htmlFor="txtInput">Text Input</label>
                    <input id="txtInput" type="text" name='text' value={formData.text} onChange={formOnChange} />
                </div>

                {/* checkbox */}
                <div className='form-field '>
                    <label htmlFor="formCheckbox" className='horizontal-centre'>
                        <input type="checkbox" name="checkbox" id="formCheckbox" checked={formData.checkbox} onChange={formOnChange} />
                        Checkbox
                    </label>
                </div>

                {/* Radio button */}
                <div className='form-field'>
                    <label>Radio:</label>
                    <div>
                        <label className='horizontal-centre'>
                            <input type="radio" name='radio' checked={formData.radio === 'Option1'} onChange={formOnChange} value='Option1' />
                            Option 1
                        </label>
                    </div>
                    <div>
                        <label className="horizontal-centre">
                            <input type="radio" name='radio' checked={formData.radio === 'Option2'} onChange={formOnChange} value='Option2' />
                            Option 2
                        </label>
                    </div>
                </div>

                {/* Dropdown */}
                <div className='form-field'>
                    <label>Select</label>
                    <select name="select" value={formData.select} onChange={formOnChange}>
                        <option value="">--Please select an option--</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>

                {/* Date Picker */}
                <div className='form-field'>
                    <label>Date Picker</label>
                    <DatePicker
                        id='datePicker'
                        selected={formData.date}
                        onChange={formOnDateChange}>
                    </DatePicker>
                </div>
            </form>

            <div className='form-data'>
                <h3>Form Data</h3>
                <p><strong> Text: </strong>{formData.text || "NA"}</p>
                <p><strong> Checked:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
                <p><strong> Radio:</strong> {formData.radio || 'NA'}</p>
                <p><strong> Dropdown: </strong>{formData.select || 'NA'}</p>
                <p><strong> Date: </strong>{formData.date.toLocaleDateString()}</p>
            </div>
        </div>

    );
}

export default Form



