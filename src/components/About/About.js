import './About.css'
import gori from '../images/gori.png'
import league from '../images/league.png'
import lovecraft from '../images/lovecraft.png'
import skate from '../images/skate.png'
import food from '../images/food.png'
import film from '../images/film.png'
import {React, useEffect} from 'react'

function About() {

    useEffect(() => {
        document.title = "обо мне"
    })

    return(
        <div className="about">
            <h2 className='about__title'>Мне нравится</h2>
            <div className="about__hobbies">
                <div 
                    className="about__hobby"
                    style={{
                        backgroundImage: `url(${gori})`
                    }}
                >
                    <div className="hobby__container">
                        <p className="hobby__text">ходить там, где мало людей</p>
                    </div>
                </div>
                <div 
                    className="about__hobby"
                    style={{
                        backgroundImage: `url(${league})`
                    }}
                >
                    <div className="hobby__container">
                        <p className="hobby__text">командные виды спорта</p>
                    </div>
                </div>
                <div 
                    className="about__hobby"
                    style={{
                        backgroundImage: `url(${lovecraft})`
                    }}
                >
                    <div className="hobby__container">
                        <p className="hobby__text">читать</p>
                    </div>
                </div>
                <div 
                    className="about__hobby"
                    style={{
                        backgroundImage: `url(${skate})`
                    }}
                >
                    <div className="hobby__container">
                        <p className="hobby__text">кататься боком</p>
                    </div>
                </div>
                <div 
                    className="about__hobby"
                    style={{
                        backgroundImage: `url(${food})`
                    }}
                >
                    <div className="hobby__container">
                        <p className="hobby__text">готовить и вкусно кушать</p>
                    </div>
                </div>
                <div 
                    className="about__hobby"
                    style={{
                        backgroundImage: `url(${film})`
                    }}
                >
                    <div className="hobby__container">
                        <p className="hobby__text">хорошее кино</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About