import Phone from '../../components/Phone/Phone'
import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import ModalLink from '../../components/ModalLink/ModalLink'
import SocialMediaIcon from '../../helper/SocialMediaIcon'
import './Preview.css'

const Preview = () => {
  const { data, setData, newUser, setNewUser } = useContext(AppContext)
  return (
    <div className='preview'>
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
      </div>
    </div>
  )
}

export default Preview