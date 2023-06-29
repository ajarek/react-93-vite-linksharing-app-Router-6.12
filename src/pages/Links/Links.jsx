import { useNavigate } from 'react-router-dom'
import { BsGithub, BsYoutube, BsLinkedin} from 'react-icons/bs'
import Phone from '../../components/Phone/Phone'
import ModalLink from '../../components/ModalLink/ModalLink'
import './Links.css'

const Links = () => {
  const navigate = useNavigate()
  return (
    <div className='links'>
      <div className="phone-wrapper">
       <Phone>
        <ModalLink name={'GitHub'} backgroundColor={'#192127'} icon={<BsGithub/>} href={'https://github.com/'} />
        <ModalLink name={'YouTube'} backgroundColor={'#ff0000'} icon={<BsYoutube/>}href={'https://youtube.com/'} />
        <ModalLink name={'LinkedIn'} backgroundColor={'#0062b2'} icon={<BsLinkedin/>}href={'https://linkedin.com/'} />
       
        
       </Phone>
      </div>
      <div className="customize-links">

      </div>
    </div>
  )
}

export default Links
