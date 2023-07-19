import React from 'react'
import MainSection from '../components/mainPageComponents/mainPageSection/MainSection'
import cl from '../components/mainPageComponents/MainPage.module.css'

import purpleBall from '../assets/backgroundImages/purple_ball.svg'
import redBall from '../assets/backgroundImages/red_ball.svg'
export default function MainPage() {
  return (
    <>
        <div className={cl.purpleBluredCircle}/>
        <div className={cl.redBluredCircle}/>
        <div className={cl.yellowBluredCircle}/>
        <img className={cl.purpleBall} src={purpleBall} alt="" />
        <img className={cl.bigRedBall} src={redBall} alt="" />
        <img className={cl.smallRedBall} src={redBall} alt="" />
        <MainSection/>
    </>
    
  )
}
