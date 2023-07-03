import { BsArrowRightShort } from 'react-icons/bs'
import './ModalLink.css'

const ModalLink = ({ icon, name, backgroundColor, href }) => {
  return (
    <a
      className='modal-link'
      style={{ backgroundColor: backgroundColor }}
      href={href}
      target={'_blank'}
    >
      <div className='modal-link-wrapper'>
        {icon}
        {name}
      </div>
      <BsArrowRightShort />
    </a>
  )
}

export default ModalLink
