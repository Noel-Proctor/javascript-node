import { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone'
import { ProfilePicture } from "./ProfilePicture";
import default_image from '../Assets/defaultProfileImage.jpg'

function ProfileImageUploader({ colour }) {

    const [imageUrl, setImageUrl] = useState(null);


    const onDrop = useCallback((acceptedFile) => {
        const image = acceptedFile[0];
        const reader = new FileReader();

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {

            const binaryStr = reader.result;
            console.log(binaryStr);
            setImageUrl(binaryStr);
        }
        reader.readAsDataURL(image);
    }, []);


    const dropzoneStyle = {
        width: '200px',
        height: '200px',
        border: '2px dashed #cccccc',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    };


    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    // Use the imageUrl if it exists, otherwise fall back to the default image 
    const displayedImageUrl = imageUrl || default_image;

    return (
        <div style={{ backgroundColor: colour }}>
            <div {...getRootProps()} style={dropzoneStyle}>
                <input {...getInputProps()} />
                <ProfilePicture src={displayedImageUrl}></ProfilePicture>
            </div>
        </div>

    )
}

ProfileImageUploader.propTypes = {
    colour: PropTypes.string.isRequired,
};

export default ProfileImageUploader;
