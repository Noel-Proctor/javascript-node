import { useState, useCallback, useContext } from "react";
import { useDropzone } from 'react-dropzone'
import { ProfilePicture } from "./ProfilePicture";
import default_image from '../Assets/defaultProfileImage.jpg'
import { ThemeContext } from "../../context/context";

function ProfileImageUploader() {

    const [imageUrl, setImageUrl] = useState(null);
    const theme = useContext(ThemeContext);
    const colour = theme[1];


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
        borderRadius: '50pc',
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

export default ProfileImageUploader;
