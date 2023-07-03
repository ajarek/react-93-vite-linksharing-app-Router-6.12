import Phone from '../../components/Phone/Phone'
import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import {
  saveStorage,
  fetchStorage,
  saveStorageSingle,
  deleteStorage
} from '../../helper/localStorage'
import ModalLink from '../../components/ModalLink/ModalLink'
import SocialMediaIcon from '../../helper/SocialMediaIcon'
import FileUpload from '../../helper/FormFileUpload/FileUpload'
import './ProfileDetails.css'
import { date } from 'yup'

const ProfileDetails = () => {
  
  
  const [preview, setPreview] = useState(null)
  
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate();
  const { data, setData, newUser, setNewUser, counter, setCounter } = useContext(AppContext)

  useEffect(() => {
    const myData = fetchStorage('myData')
    setData(myData)
  }, [counter])
  useEffect(() => {
    
    const myUser = fetchStorage('user')
   if (myUser)
    {setNewUser(myUser)}
  },[counter])
  

  const onSubmit = (data) => {

    
    setFirst(data.first)

    setLast(data.last)

    setEmail(data.email)

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
  useEffect(() => {
    const user={
      img:preview,
      first:first,
      last:last,
      email:email
    }
    if(preview)
   { saveStorageSingle(user, 'user')}
   setCounter(counter+1)
  },[preview])
 
  return (
    <div className='links'>
      <div className='phone-wrapper'>
        <Phone
          src={newUser?newUser.img:null}
          nameUser={newUser?newUser.first + ' ' + newUser.last:null}
          email={newUser?newUser.email:null}
          background={'transparent'}
        >
          {data &&
            data
            .filter((value, index, self) => {
              return index === self.findIndex(obj => (
                obj.platform === value.platform 
              ));
            })
            .map((link, index) => {
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
        <div className='wrapper-link'>
          <button className='delete' onClick={()=>{deleteStorage('user');setNewUser()}}>Delete Profil</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
