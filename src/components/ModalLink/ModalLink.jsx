import { BsArrowRightShort } from 'react-icons/bs'
import './ModalLink.css'

const ModalLink = ({ icon, name, backgroundColor }) => {
  return (
    <div
      className='modal-link'
      style={{ backgroundColor: backgroundColor }}
    >
      <div className='modal-link-wrapper'>
        {icon}
        {name}
      </div>
      <BsArrowRightShort />
    </div>
  )
}

export default ModalLink
