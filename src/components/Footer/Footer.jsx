import React from 'react'
import cl from './Footer.module.css'
import telegramIco from '../../assets/ContactsIcons/telegram.svg'
import viberIco from '../../assets/ContactsIcons/viber.svg'
import whatsAppIco from '../../assets/ContactsIcons/whatsapp.svg'


export default function Footer() {
  return (
    <footer className={cl.footerWrapper}>
        <div className={cl.footerContetn}>
            <div className={cl.footerColumn}>
                <h4 className={cl.footerColumnHeader}>О компании</h4>
                <div className={cl.footerLinks}>
                    <a className={cl.footerLink} href="">Партнёрская программа</a>
                    <a className={cl.footerLink} href="">Вакансии</a>
                </div>
            </div>
            <div className={cl.footerColumn}>
                <h4 className={cl.footerColumnHeader}>Меню</h4>
                <div className={cl.middelLinksWrapper}>
                    <div className={cl.footerLinks}>
                        <a className={cl.footerLink} href="">Расчёт стоимости</a>
                        <a className={cl.footerLink} href="">Услуги</a>
                        <a className={cl.footerLink} href="">Виджеты</a>
                        <a className={cl.footerLink} href="">Интеграции</a>
                        <a className={cl.footerLink} href="">Наши клиенты</a>
                    </div>
                    <div className={cl.footerLinks}>
                        <a className={cl.footerLink} href="">Кейсы</a>
                        <a className={cl.footerLink} href="">Благодарственные письма</a>
                        <a className={cl.footerLink} href="">Сертификаты</a>
                        <a className={cl.footerLink} href="">Блог на Youtube</a>
                        <a className={cl.footerLink} href="">Вопрос / Ответ</a>
                    </div>
                </div>
                
            </div>
            <div className={cl.footerContactColumn}>
                <h4 className={cl.footerColumnHeader}>Контакты</h4>
                <div className={cl.footerContacts}>
                    <p className={cl.number}>+7 555 555-55-55</p>
                    <div className={cl.constactsLinksWrapper}>
                        <a className={cl.contactIco} href="">
                            <img src={telegramIco} alt="" />
                        </a>
                        <a className={cl.contactIco} href="">
                            <img src={viberIco} alt="" />
                        </a>
                        <a className={cl.contactIco} href="">
                            <img src={whatsAppIco} alt="" />
                        </a>
                    </div>
                    <p className={cl.adress}>Москва, Путевой проезд 3с1, к 902</p>
                </div>
            </div>
        </div>
        <p className={cl.footerCopyRigth}>©WELBEX 2022. Все права защищены.</p>
        <a className={cl.cofidentialLink} href="">Политика конфиденциальности</a>
    </footer>
  )
}
