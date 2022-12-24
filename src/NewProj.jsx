import React from 'react'

const Newproj = () => {
  return (
    <div className='newProj' id='proj'>
        <div className='proj-sec'>
            <p className='title-proj'>Projects</p>
            <h1 className='built'>What I've Built</h1>
            <div className='projects-grid'>
                <div className='new-projects'>
                    <img src={require('./netlix.png')} />
                    <div class="overlay">
                        <div class="info">
                            <h1>Netflix Clone</h1>
                        </div>
                    </div>
                    <div className='desp-proj'>
                        <p> A Netflix clone that incoporates Firebase and Firestore to authorize secure logins to users while also keeping track of user's saved movies.</p>
                        <a href='https://netflixcloner.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/netflixcloner'><img src={require('./github.png')} className="git"/></a>
                    </div>
                </div>

                <div className='new-projects'>
                    <img src={require('./weathertodo.png')} />
                    <div class="overlay">
                        <div class="info">
                            <h1>Weather To-Do</h1>
                        </div>
                    </div>
                    <div className='desp-proj'>
                        <p> A todo list app that allows the user to organize their task for the day. Incoporated a weather API to also display the weather of any city.</p>
                                <a href='https://weathertasktracker.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/todoapp-version2.0'><img src={require('./github.png')} className="git"/></a>
                    </div>
                </div>
                <div className='new-projects'>
                    <img src={require('./dino.png')} />
                    <div class="overlay">
                        <div class="info">
                            <h1>Dino Game</h1>
                        </div>
                    </div>
                    <div className='desp-proj'>
                    <p> A Google Chrome clone of the infamous Dino Game. Users can control the dino to jump over cactus. Users scores are kept and memorized.</p>
                            <a href='https://chrome-dinoclone.netlify.app/'>See the project live!</a><a href='https://github.com/nguyenbrandon101/dino-game-master'><img src={require('./github.png')} className="git"/></a>
                    </div>
                </div>
                <div className='new-projects'>
                    <img src={require('./todopic.png')} />
                    <div class="overlay">
                        <div class="info">
                            <h1>To-Do List 1.0</h1>
                        </div>
                    </div>
                    <div className='desp-proj'>
                    <p> A todo list app that allows the user to organize their task for the day. Users can categorize their task into either business or personal.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Newproj