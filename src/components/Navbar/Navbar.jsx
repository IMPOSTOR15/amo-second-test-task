import React from 'react'
import cl from './Navbar.module.css'
import logoPart1 from '../../assets/navAssets/navLogo/part1.svg'
import logoPart2 from '../../assets/navAssets/navLogo/part2.svg'
import telegramIco from '../../assets/ContactsIcons/telegram.svg'
import viberIco from '../../assets/ContactsIcons/viber.svg'
import whatsAppIco from '../../assets/ContactsIcons/whatsapp.svg'
export default function navbar() {

  return (
    <div className={cl.navbarWrapper}>
      <div className={cl.logoWrapper}>
        <div className={cl.logoBlock}>
          <img className={cl.logoPart1} src={logoPart1} alt="logo1" />
          <img className={cl.logoPart2} src={logoPart2} alt="logo2" />
        </div>
        <p className={cl.subLogoText}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <div className={cl.navLinks}>
        <a className={cl.navLink} href="">Услуги</a>
        <a className={cl.navLink} href="">Виджеты</a>
        <a className={cl.navLink} href="">Интеграция</a>
        <a className={cl.navLink} href="">Кейсы</a>
        <a className={cl.navLink} href="">Сертификаты</a>
      </div>
      <div className={cl.navContacts}>
        <p className={cl.phoneNumber}>+7 555 555-55-55</p>
        <a className={cl.constactLink} href="">
          <img className={cl.contactIco} src={telegramIco} alt="" />
        </a>
        <a className={cl.constactLink} href="">
          <img className={cl.contactIco} src={viberIco} alt="" />
        </a>
        <a className={cl.constactLink} href="">
          <img className={cl.contactIco} src={whatsAppIco} alt="" />
        </a>
      </div>
    </div>
  )
}
