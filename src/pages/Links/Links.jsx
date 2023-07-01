import { Form } from '../../helper/Form/Form'
import { saveStorage, fetchStorage } from '../../helper/localStorage'
import SocialMediaIcon from '../../helper/SocialMediaIcon'
import Phone from '../../components/Phone/Phone'
import ModalLink from '../../components/ModalLink/ModalLink'
import './Links.css'
import { useState, useEffect } from 'react'

const Links = () => {
  const [data, setData] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const myData = fetchStorage('myData')
    setData(myData)
  }, [counter])

  const addLink = (data) => {
    setCounter(counter + 1)
    const bg = () => {
      if (data.platform === 'GitHub') {
        return '#192127'
      }
      if (data.platform === 'YouTube') {
        return '#ff0000'
      }
      if (data.platform === 'LinkedIn') {
        return '#0062b2'
      }
      if (data.platform === 'Facebook') {
        return '#4267B2'
      }
      if (data.platform === 'Twitter') {
        return '#1DA1F2'
      }
      if (data.platform === 'Instagram') {
        return '#C13584'
      }
    }

    const newLink = {
      link: data.link,
      platform: data.platform,
      bg: bg(),
    }

    saveStorage(newLink, 'myData')
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
          <h1>Customize your links</h1>
          <p>Add links below and then all your profiles with world!</p>
        </div>

        <div className='wrapper-link'>
          <Form onSubmit={addLink} />
        </div>
      </div>
    </div>
  )
}

export default Links
