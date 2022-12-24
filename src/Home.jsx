import React from 'react'

const Home = () => {
  return (
    <div className='wrapper'>
      <div className='about-section'>
          <div className='about-me'>
              <h1>Hi,</h1>
              <h1>I'm <span>Brandon</span></h1>
              <h1>Software Engineer</h1>
              <p>
                  As an software engineer, my mission is to create a digital experience that users will love to use while also unlocking and learning new skills and tools to help further perfect my craft! If you would like to contact me, please feel free to reach out to me via <a href="mailto: bran.nguyen1118@gmail.com" class = "links">Email</a> .
              </p>
          </div>
          <div>
              <img className='selfie' src={require('./sefie.jpeg')} />
          </div>
      </div>
    </div>
  )
}

export default Home