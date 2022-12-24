import React from 'react'

const Proj = () => {
  return (
    <div className='newProj' id='proj'>
        <div className='proj-sec'>
            <p className='title-proj'>Projects</p>
            <h1 className='built'>What I've Built</h1>
            <div className='projects-grid'>
                <div className='new-projects'>
                    <img src={require('./netlix.png')} />
                    <div className="overlay">
                        <div className="info">
                            <h1>Netflix Clone</h1>
                        </div>
                    </div>
                    <div className='desp-proj'>
                        <p> A Netflix clone that incoporates Firebase and Firestore to authorize secure logins to users while also keeping track of user's saved movies.</p>
                        <a href='https://netflixcloner.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/netflixcloner'><img src={require('./github.png')} className="git"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Proj