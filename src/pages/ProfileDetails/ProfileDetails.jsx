import Phone from '../../components/Phone/Phone'
import { useState, useEffect } from 'react'
import {
  saveStorage,
  fetchStorage,
  saveStorageSingle,
} from '../../helper/localStorage'
import ModalLink from '../../components/ModalLink/ModalLink'
import SocialMediaIcon from '../../helper/SocialMediaIcon'
import FileUpload from '../../helper/FormFileUpload/FileUpload'
import './ProfileDetails.css'
import { date } from 'yup'

const ProfileDetails = () => {
  const [data, setData] = useState([])
  const [counter, setCounter] = useState(0)
  const [preview, setPreview] = useState(null)
  const [first, setFirst] = useState()
  const [last, setLast] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    const myData = fetchStorage('myData')
    setData(myData)
  }, [counter])

  const onSubmit = (data) => {
    
      setFirst( data.first);
    
  
      setLast(data.last);
   
 
  
      setEmail(data.email);
   
 
    
    const file = data.file 
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setPreview(null)
    }
  }
  
  return (
    <div className='links'>
      <div className='phone-wrapper'>
        <Phone>
          {data &&
            data.map((link, index) => {
              const socialMediaName = `${link.platform}`

              return (
                <ModalLink
                  key={index}
                  name={link.platform}
                  backgroundColor={link.bg}
                  icon={<SocialMediaIcon name={socialMediaName} />}
                  href={link.link}
                />
              )
            })}
        </Phone>
      </div>
      <div className='customize-links'>
        <div className='wrapper-info'>
          <h1>Profile Details</h1>
          <p>Add your details to create a personal touch your profile!</p>
        </div>
        <div className='wrapper-link'>
          <FileUpload onSubmit={onSubmit} />
        </div>
        {preview && (
        <div>
          <h3>Podgląd pliku:</h3>
          <img src={preview} alt="Podgląd pliku" />
          <p>{first}</p>
          <p>{last}</p>
          <p>{email}</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default ProfileDetails
