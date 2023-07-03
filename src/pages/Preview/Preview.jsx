import Phone from '../../components/Phone/Phone'
import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import {
  saveStorage,
  fetchStorage,
  saveStorageSingle,
  deleteStorage,
} from '../../helper/localStorage'
import ModalLink from '../../components/ModalLink/ModalLink'
import SocialMediaIcon from '../../helper/SocialMediaIcon'
import './Preview.css'
import { set } from 'react-hook-form'

const Preview = () => {
  const { data, setData, newUser, setNewUser, counter } = useContext(AppContext)
  useEffect(() => {
    const myData = fetchStorage('myData')
    setData(myData)
  }, [counter])
  useEffect(() => {
    const myUser = fetchStorage('user')
    if (myUser) {
      setNewUser(myUser)
    }
  }, [counter])
  return (
    <div className='preview-pages'>
      <div className='links'>
        <div className='phone-wrapper'>
          <Phone
            src={newUser ? newUser.img : null}
            nameUser={newUser ? newUser.first + ' ' + newUser.last : null}
            email={newUser ? newUser.email : null}
            background={'transparent'}
          >
            {data &&
              data
                .filter((value, index, self) => {
                  return (
                    index ===
                    self.findIndex((obj) => obj.platform === value.platform)
                  )
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
