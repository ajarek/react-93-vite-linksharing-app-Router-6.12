import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const SocialMediaIcon = ({ name }) => {
  if (name === 'Facebook') {
    return <FaFacebook />
  } else if (name === 'Twitter') {
    return <FaTwitter />
  } else if (name === 'Instagram') {
    return <FaInstagram />
  } else if (name === 'YouTube') {
    return <FaYoutube />
  } else if (name === 'GitHub') {
    return <FaGithub />
  } else if (name === 'LinkedIn') {
    return <FaLinkedin />
  } else {
    return null // Obsługa przypadku, gdy nazwa nie pasuje do żadnej ikony
  }
}

export default SocialMediaIcon
