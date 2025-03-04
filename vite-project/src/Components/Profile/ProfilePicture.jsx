import './ProfilePicture.css'
import PropTypes from 'prop-types'

export const ProfilePicture = ({ src, alt, size }) => {
  return (
    <div>
      <img src={src} alt={alt} className='profile-image' size={size}></img>
    </div>
  );
}

ProfilePicture.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string

};

// ProfilePicture.defaultProps = {
//   alt: 'Profile Picture test',
//   size: '100px',
//   src: default_image
// };




